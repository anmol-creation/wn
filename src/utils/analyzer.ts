
import { EARNING_PATHWAYS, type Pathway } from '../data/rules';

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

export interface AnalysisResult {
  scorecard: SkillScorecard;
  topPathways: MatchedPathway[];
  totalSkillPoints: number;
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

  return {
    scorecard: {
      labels: scorecardLabels,
      data: scorecardData
    },
    topPathways: relevantPathways,
    totalSkillPoints
  };
};
