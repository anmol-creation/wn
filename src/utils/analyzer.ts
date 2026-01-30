
import { EARNING_PATHWAYS, type Pathway, SKILL_LEVELS, IMPROVEMENT_RESOURCES } from '../data/rules';

export interface UserInputItem {
  id: string; // unique id for list rendering
  text: string;
  level: number; // 1 = Beginner, 2 = Intermediate, 3 = Advanced
}

export interface UserProfile {
  Education: UserInputItem[];
  Skills: UserInputItem[];
  Hobbies: UserInputItem[];
  Interests: UserInputItem[];
  Activities: UserInputItem[];
  Spending: UserInputItem[];
  Resources: UserInputItem[];
}

export interface MatchedPathway extends Pathway {
  matchScore: number; // 0 to 100%
  readiness: 'High' | 'Medium' | 'Low';
  missingSkills: string[];
  improvementSteps: string[];
}

export interface SkillScorecard {
  labels: string[];
  data: number[];
}

export interface ChartData {
  labels: string[];
  data: number[];
}

export interface GapAnalysisData {
  labels: string[];
  currentLevels: number[];
  requiredLevels: number[];
}

export interface AnalysisResult {
  scorecard: SkillScorecard;
  topPathways: MatchedPathway[];
  totalSkillPoints: number;

  // New chart data
  barChartData: ChartData;
  pieChartData: ChartData;
  radarChartData: ChartData;
  gapAnalysisData: GapAnalysisData | null;
}

export const analyzeProfile = (profile: UserProfile): AnalysisResult => {
  // 1. Consolidate all text inputs for matching
  const allInputs = [
    ...profile.Education,
    ...profile.Skills,
    ...profile.Hobbies,
    ...profile.Interests,
    ...profile.Activities,
    ...profile.Resources // Resources like 'Camera' can trigger photography
  ];

  const inputTexts = allInputs.map(item => item.text.trim().toLowerCase()).filter(t => t.length > 0);

  // 2. Calculate Skill Scorecard (Sum of levels per category)
  // We will visualize the "Capacity" in each area.
  const categories = Object.keys(profile) as (keyof UserProfile)[];
  const scorecardLabels = categories;
  const scorecardData = categories.map(cat => {
    return profile[cat].reduce((sum, item) => sum + item.level, 0);
  });

  const totalSkillPoints = scorecardData.reduce((a, b) => a + b, 0);

  // 3. Match Pathways
  const matchedPathways: MatchedPathway[] = EARNING_PATHWAYS.map(pathway => {
    let matchCount = 0;
    const missing: string[] = [];
    const lowerInputs = inputTexts;

    pathway.requiredSkills.forEach(reqSkill => {
        // loose matching: checks if user input contains the skill or vice versa
      const isPresent = lowerInputs.some(input =>
        input.includes(reqSkill) || reqSkill.includes(input)
      );

      if (isPresent) {
        matchCount++;
      } else {
        missing.push(reqSkill);
      }
    });

    // Calculate score based on coverage of required skills
    let score = 0;
    if (pathway.requiredSkills.length > 0) {
      score = (matchCount / pathway.requiredSkills.length) * 100;
    }

    // Determine Readiness
    let readiness: 'High' | 'Medium' | 'Low' = 'Low';
    if (score >= 80) readiness = 'High';
    else if (score >= 40) readiness = 'Medium';

    // Generate Improvement Steps
    const improvementSteps: string[] = [];
    missing.forEach(skill => {
        // Find general key for resource lookup (e.g., 'premiere pro' -> 'video')
        // Simple heuristic: check if resource keys match skill string
        const resourceKeys = Object.keys(IMPROVEMENT_RESOURCES);
        const matchedKey = resourceKeys.find(key => skill.includes(key) || key.includes(skill));

        if (matchedKey) {
            improvementSteps.push(`Learn ${skill}: Check resources on ${IMPROVEMENT_RESOURCES[matchedKey].join(', ')}`);
        } else {
            improvementSteps.push(`Acquire skill: ${skill}`);
        }
    });

    return {
      ...pathway,
      matchScore: Math.round(score),
      readiness,
      missingSkills: missing,
      improvementSteps: improvementSteps.slice(0, 3) // Top 3 steps
    };
  });

  // Filter out pathways with 0 matches, or keep high potential ones if user has interest
  // For now, we want to show a broad range, so we keep anything with > 0 score.
  // Or if score is 0 but user has strong related inputs (maybe handle later).
  const relevantPathways = matchedPathways
    .filter(p => p.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore);

  // --- Prepare Chart Data ---

  // Bar Chart: Top Skills vs Levels
  // Collect all items with levels from Education, Skills, Hobbies
  const leveledItems = [
    ...profile.Education,
    ...profile.Skills,
    ...profile.Hobbies
  ].filter(item => item.text.trim().length > 0);

  // Sort by level descending
  const sortedSkills = leveledItems.sort((a, b) => b.level - a.level).slice(0, 10);
  const barChartData = {
    labels: sortedSkills.map(s => s.text),
    data: sortedSkills.map(s => s.level)
  };

  // Pie Chart: Category Contribution
  // Already calculated as scorecardData, just need to structure it
  const pieChartData = {
    labels: scorecardLabels,
    data: scorecardData
  };

  // Radar Chart: Top Monetizable Skills
  // Find user skills that appear in ANY earning pathway's required skills
  const allRequiredSkills = new Set<string>();
  EARNING_PATHWAYS.forEach(p => p.requiredSkills.forEach(s => allRequiredSkills.add(s)));

  const monetizableSkills = leveledItems.filter(item => {
    const text = item.text.toLowerCase();
    return Array.from(allRequiredSkills).some(req => text.includes(req) || req.includes(text));
  });

  // Remove duplicates, keep highest level
  const uniqueMonetizableSkills = new Map<string, number>();
  monetizableSkills.forEach(item => {
     const key = item.text;
     if (!uniqueMonetizableSkills.has(key) || uniqueMonetizableSkills.get(key)! < item.level) {
       uniqueMonetizableSkills.set(key, item.level);
     }
  });

  // Limit to top 5-6 for Radar chart legibility
  const topMonetizable = Array.from(uniqueMonetizableSkills.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  const radarChartData = {
    labels: topMonetizable.length > 0 ? topMonetizable.map(x => x[0]) : ['General'],
    data: topMonetizable.length > 0 ? topMonetizable.map(x => x[1]) : [1]
  };

  // Line Chart: Gap Analysis for #1 Pathway
  let gapAnalysisData: GapAnalysisData | null = null;
  if (relevantPathways.length > 0) {
    const topPathway = relevantPathways[0];
    const requiredLevel = SKILL_LEVELS[topPathway.difficulty]; // e.g. 1, 2, or 3

    // For each required skill, find user's level
    const labels = topPathway.requiredSkills;
    const currentLevels = labels.map(reqSkill => {
        // Find best matching user item
        const match = leveledItems.find(item =>
            item.text.toLowerCase().includes(reqSkill) || reqSkill.includes(item.text.toLowerCase())
        );
        return match ? match.level : 0;
    });

    const requiredLevels = labels.map(() => requiredLevel);

    gapAnalysisData = {
        labels,
        currentLevels,
        requiredLevels
    };
  }

  return {
    scorecard: {
      labels: scorecardLabels,
      data: scorecardData
    },
    topPathways: relevantPathways,
    totalSkillPoints,
    barChartData,
    pieChartData,
    radarChartData,
    gapAnalysisData
  };
};
