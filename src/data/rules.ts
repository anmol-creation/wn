
export interface Pathway {
  id: string;
  title: string;
  description: string;
  requiredSkills: string[]; // Skills or Interests that trigger this
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  timeframe: 'Short-term' | 'Medium-term' | 'Long-term';
  earningPotential: string; // e.g., "$500 - $2000 / month"
  roadmap: string[]; // Steps to achieve this
}

export const CATEGORIES = [
  'Education',
  'Skills',
  'Hobbies',
  'Interests',
  'Activities',
  'Spending',
  'Resources'
] as const;

export type Category = typeof CATEGORIES[number];

export const SKILL_LEVELS = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3
};

// Predefined pathways mapped to keywords found in user input
export const EARNING_PATHWAYS: Pathway[] = [
  {
    id: 'freelance_web_dev',
    title: 'Freelance Web Developer',
    description: 'Build websites for clients using your coding skills.',
    requiredSkills: ['coding', 'programming', 'web design', 'javascript', 'react', 'html', 'css'],
    difficulty: 'Intermediate',
    timeframe: 'Short-term',
    earningPotential: '$1000 - $5000+ / month',
    roadmap: [
      'Build a portfolio website.',
      'Create profiles on Upwork/Fiverr.',
      'Reach out to local businesses.'
    ]
  },
  {
    id: 'youtube_creator',
    title: 'YouTube Content Creator',
    description: 'Create and monetize video content based on your hobbies or expertise.',
    requiredSkills: ['video editing', 'storytelling', 'public speaking', 'content creation', 'filmmaking'],
    difficulty: 'Intermediate',
    timeframe: 'Medium-term',
    earningPotential: '$100 - $10,000+ / month (ad revenue + sponsorships)',
    roadmap: [
      'Pick a niche based on your interests.',
      'Learn basic video editing (DaVinci Resolve/Premiere).',
      'Upload consistently (1 video/week).'
    ]
  },
  {
    id: 'copywriter',
    title: 'Freelance Copywriter',
    description: 'Write persuasive text for marketing materials, blogs, and websites.',
    requiredSkills: ['writing', 'creative writing', 'marketing', 'english', 'blogging'],
    difficulty: 'Beginner',
    timeframe: 'Short-term',
    earningPotential: '$500 - $3000 / month',
    roadmap: [
      'Study basic copywriting formulas (AIDA, PAS).',
      'Write sample pieces for a portfolio.',
      'Pitch to marketing agencies or small businesses.'
    ]
  },
  {
    id: 'online_tutor',
    title: 'Online Tutor',
    description: 'Teach subjects you are knowledgeable in to students online.',
    requiredSkills: ['teaching', 'math', 'science', 'english', 'languages', 'academic'],
    difficulty: 'Beginner',
    timeframe: 'Short-term',
    earningPotential: '$15 - $50 / hour',
    roadmap: [
      'Identify your strongest subjects.',
      'Register on platforms like Chegg, Tutor.com, or Preply.',
      'Create a compelling profile.'
    ]
  },
  {
    id: 'graphic_designer',
    title: 'Graphic Designer',
    description: 'Create visual concepts for brands, social media, and products.',
    requiredSkills: ['drawing', 'art', 'design', 'photoshop', 'illustrator', 'canva'],
    difficulty: 'Intermediate',
    timeframe: 'Short-term',
    earningPotential: '$500 - $4000 / month',
    roadmap: [
      'Build a portfolio on Behance or Dribbble.',
      'Learn tools like Adobe Creative Suite or Figma.',
      'Offer services on freelance marketplaces.'
    ]
  },
  {
    id: 'digital_marketing',
    title: 'Digital Marketer',
    description: 'Help businesses grow their online presence through SEO, social media, and ads.',
    requiredSkills: ['marketing', 'social media', 'seo', 'analytics', 'facebook ads'],
    difficulty: 'Intermediate',
    timeframe: 'Medium-term',
    earningPotential: '$1000 - $6000 / month',
    roadmap: [
      'Get certified (Google Ads, Hubspot).',
      'Start a blog or social page to practice.',
      'Take on free projects for testimonials.'
    ]
  },
  {
    id: 'fitness_coach',
    title: 'Fitness Coach / Personal Trainer',
    description: 'Train others to achieve their health and fitness goals.',
    requiredSkills: ['fitness', 'gym', 'sports', 'health', 'nutrition'],
    difficulty: 'Advanced',
    timeframe: 'Medium-term',
    earningPotential: '$30 - $100 / hour',
    roadmap: [
      'Get a personal training certification (NASM/ACE).',
      'Train friends/family for free to build experience.',
      'Apply to local gyms or start an online coaching business.'
    ]
  },
   {
    id: 'stock_photographer',
    title: 'Stock Photographer',
    description: 'Sell your photos to stock image websites.',
    requiredSkills: ['photography', 'camera', 'editing', 'travel'],
    difficulty: 'Beginner',
    timeframe: 'Long-term',
    earningPotential: 'Passive income (variable)',
    roadmap: [
      'Take high-quality photos of generic subjects (business, nature).',
      'Upload to Shutterstock, Adobe Stock, etc.',
      'Tag photos correctly for SEO.'
    ]
  }
];

// Helper to determine matches
export const checkMatch = (userInputs: string[], pathway: Pathway): number => {
  let matchCount = 0;
  const lowerInputs = userInputs.map(i => i.toLowerCase());

  pathway.requiredSkills.forEach(skill => {
    if (lowerInputs.some(input => input.includes(skill) || skill.includes(input))) {
      matchCount++;
    }
  });

  return matchCount;
};
