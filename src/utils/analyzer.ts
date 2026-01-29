
import { EARNING_PATHWAYS, type Pathway, SKILL_LEVELS } from '../data/rules';

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
  missingSkills: string[];
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
    // We add a small weight if they have *some* skills versus none.
    let score = 0;
    if (pathway.requiredSkills.length > 0) {
      score = (matchCount / pathway.requiredSkills.length) * 100;
    }

    return {
      ...pathway,
      matchScore: Math.round(score),
      missingSkills: missing
    };
  });

  // Filter out pathways with 0 matches (or set a lower threshold if we want to show suggestions based on interests even if low skill)
  // Let's keep those with at least 1 match or > 0 score.
  // Actually, to provide "Gap Analysis", we might want to show high-potential pathways even if score is low,
  // IF the user has at least one related keyword (interest).
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
     // use the matched required skill name if possible for cleaner labels, or user text
     // Here we stick to user text for simplicity, or we could normalize.
     // Let's use user text but dedupe by checking against existing keys.
     const key = item.text;
     if (!uniqueMonetizableSkills.has(key) || uniqueMonetizableSkills.get(key)! < item.level) {
       uniqueMonetizableSkills.set(key, item.level);
     }
  });

  // Limit to top 5-6 for Radar chart legibility
  const topMonetizable = Array.from(uniqueMonetizableSkills.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  // If we don't have enough monetizable skills, maybe fill with top skills?
  // Or just show what we have.

  const radarChartData = {
    labels: topMonetizable.length > 0 ? topMonetizable.map(x => x[0]) : ['No Data'],
    data: topMonetizable.length > 0 ? topMonetizable.map(x => x[1]) : [0]
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
