
export interface Pathway {
  id: string;
  title: string;
  category: 'Career' | 'Freelance' | 'Business' | 'Side Hustle' | 'Content';
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

// Learning resources for improvement
export const IMPROVEMENT_RESOURCES: Record<string, string[]> = {
  'coding': ['FreeCodeCamp', 'Codecademy', 'LeetCode'],
  'design': ['Canva Design School', 'Behance (Inspiration)', 'Udemy Graphic Design'],
  'marketing': ['Google Digital Garage', 'HubSpot Academy', 'Meta Blueprint'],
  'finance': ['Investopedia', 'Coursera Finance Courses', 'Zerodha Varsity'],
  'writing': ['Grammarly Blog', 'Medium (Reading)', 'Copyblogger'],
  'video': ['YouTube Creator Academy', 'Skillshare Video Editing', 'DaVinci Resolve Training'],
  'business': ['Y Combinator Startup School', 'Harvard Business Review', 'Lean Startup'],
  'fitness': ['ACE Fitness', 'NASM Resources', 'Bodybuilding.com'],
  'music': ['JustinGuitar', 'Ableton Learning Music', 'MasterClass'],
  'photography': ['Digital Photography School', 'YouTube Photography Tutorials']
};

// Predefined pathways mapped to keywords found in user input
export const EARNING_PATHWAYS: Pathway[] = [
  // --- TECH & CODING ---
  {
    id: 'freelance_web_dev',
    title: 'Freelance Web Developer',
    category: 'Freelance',
    description: 'Build websites for clients using your coding skills.',
    requiredSkills: ['coding', 'programming', 'web design', 'javascript', 'react', 'html', 'css', 'web development'],
    difficulty: 'Intermediate',
    timeframe: 'Short-term',
    earningPotential: '$500 - $5000+ / month',
    roadmap: [
      'Build a portfolio website showcasing 3-5 projects.',
      'Create profiles on Upwork, Fiverr, and LinkedIn.',
      'Reach out to local businesses offering website upgrades.'
    ]
  },
  {
    id: 'app_developer',
    title: 'Mobile App Developer',
    category: 'Career',
    description: 'Create mobile applications for iOS or Android.',
    requiredSkills: ['app development', 'flutter', 'react native', 'swift', 'kotlin', 'java', 'mobile'],
    difficulty: 'Advanced',
    timeframe: 'Medium-term',
    earningPotential: '$1000 - $8000+ / month',
    roadmap: [
      'Publish a simple app to the Play Store/App Store.',
      'Learn state management and API integration.',
      'Apply for junior developer roles or freelance projects.'
    ]
  },
  {
    id: 'saas_founder',
    title: 'SaaS Founder (Micro-Startup)',
    category: 'Business',
    description: 'Build and sell a software tool to solve a specific problem.',
    requiredSkills: ['coding', 'product management', 'entrepreneurship', 'marketing', 'software'],
    difficulty: 'Advanced',
    timeframe: 'Long-term',
    earningPotential: '$0 - Unlimited (High Risk/High Reward)',
    roadmap: [
      'Identify a niche problem people pay to solve.',
      'Build a Minimum Viable Product (MVP).',
      'Launch on Product Hunt and cold email potential users.'
    ]
  },

  // --- CONTENT & MEDIA ---
  {
    id: 'youtube_creator',
    title: 'YouTube Content Creator',
    category: 'Content',
    description: 'Create and monetize video content based on your hobbies or expertise.',
    requiredSkills: ['video editing', 'storytelling', 'public speaking', 'content creation', 'filmmaking', 'youtube'],
    difficulty: 'Intermediate',
    timeframe: 'Medium-term',
    earningPotential: '$100 - $10,000+ / month (Ads + Sponsors)',
    roadmap: [
      'Pick a niche based on your interests (e.g., Tech, Gaming, Vlog).',
      'Learn basic video editing (DaVinci Resolve/Premiere/CapCut).',
      'Upload consistently (1 video/week) for at least 6 months.'
    ]
  },
  {
    id: 'video_editor',
    title: 'Freelance Video Editor',
    category: 'Freelance',
    description: 'Edit videos for YouTubers, businesses, and social media.',
    requiredSkills: ['video editing', 'premiere pro', 'final cut', 'davinci', 'capcut', 'after effects'],
    difficulty: 'Intermediate',
    timeframe: 'Short-term',
    earningPotential: '$500 - $4000 / month',
    roadmap: [
      'Create a showreel of your best edits.',
      'DM YouTubers or businesses offering to edit one video for free/discount.',
      'List services on Fiverr or Upwork.'
    ]
  },
  {
    id: 'social_media_manager',
    title: 'Social Media Manager',
    category: 'Freelance',
    description: 'Manage and grow social media accounts for brands.',
    requiredSkills: ['social media', 'marketing', 'instagram', 'content creation', 'canva', 'copywriting'],
    difficulty: 'Beginner',
    timeframe: 'Short-term',
    earningPotential: '$300 - $2000 / month per client',
    roadmap: [
      'Grow a theme page or your own personal brand as a case study.',
      'Create content calendars and designs using Canva.',
      'Pitch to small businesses needing online presence.'
    ]
  },

  // --- WRITING & MARKETING ---
  {
    id: 'copywriter',
    title: 'Freelance Copywriter',
    category: 'Freelance',
    description: 'Write persuasive text for marketing materials, blogs, and websites.',
    requiredSkills: ['writing', 'creative writing', 'marketing', 'english', 'blogging', 'sales'],
    difficulty: 'Beginner',
    timeframe: 'Short-term',
    earningPotential: '$500 - $3000 / month',
    roadmap: [
      'Study basic copywriting formulas (AIDA, PAS).',
      'Write sample pieces (mock emails, landing pages).',
      'Pitch to marketing agencies or e-commerce brands.'
    ]
  },
  {
    id: 'blogger',
    title: 'Niche Blogger / Affiliate Marketer',
    category: 'Content',
    description: 'Write articles and earn through ads and affiliate links.',
    requiredSkills: ['writing', 'seo', 'blogging', 'wordpress', 'marketing'],
    difficulty: 'Intermediate',
    timeframe: 'Medium-term',
    earningPotential: '$100 - $5000+ / month (Passive)',
    roadmap: [
      'Choose a low-competition niche (e.g., "Best Hiking Gear").',
      'Set up a WordPress site and write SEO-optimized articles.',
      'Apply for Amazon Associates or other affiliate programs.'
    ]
  },

  // --- CREATIVE & DESIGN ---
  {
    id: 'graphic_designer',
    title: 'Graphic Designer',
    category: 'Freelance',
    description: 'Create visual concepts for brands, social media, and products.',
    requiredSkills: ['drawing', 'art', 'design', 'photoshop', 'illustrator', 'canva', 'graphic design'],
    difficulty: 'Intermediate',
    timeframe: 'Short-term',
    earningPotential: '$500 - $4000 / month',
    roadmap: [
      'Build a portfolio on Behance or Dribbble.',
      'Master tools like Adobe Creative Suite or Figma.',
      'Offer logo design or social media branding services.'
    ]
  },
  {
    id: 'photographer',
    title: 'Freelance / Event Photographer',
    category: 'Freelance',
    description: 'Take professional photos for events, portraits, or products.',
    requiredSkills: ['photography', 'camera', 'photo editing', 'lightroom', 'lighting'],
    difficulty: 'Intermediate',
    timeframe: 'Short-term',
    earningPotential: '$200 - $1000 per event',
    roadmap: [
      'Build a portfolio (shoot friends/family for free).',
      'Post work on Instagram and local groups.',
      'Network with event planners and wedding organizers.'
    ]
  },
  {
    id: 'stock_photographer',
    title: 'Stock Asset Creator',
    category: 'Side Hustle',
    description: 'Sell photos, videos, or digital assets online.',
    requiredSkills: ['photography', 'camera', 'design', 'digital art'],
    difficulty: 'Beginner',
    timeframe: 'Long-term',
    earningPotential: 'Passive Income (Variable)',
    roadmap: [
      'Take high-quality generic photos/videos.',
      'Upload to Shutterstock, Adobe Stock, Freepik.',
      'Focus on trending topics and high-quality keywords.'
    ]
  },

  // --- EDUCATION & COACHING ---
  {
    id: 'online_tutor',
    title: 'Online Tutor',
    category: 'Freelance',
    description: 'Teach subjects you are knowledgeable in to students online.',
    requiredSkills: ['teaching', 'math', 'science', 'english', 'languages', 'academic', 'tutoring'],
    difficulty: 'Beginner',
    timeframe: 'Short-term',
    earningPotential: '$15 - $50 / hour',
    roadmap: [
      'Identify your strongest subjects.',
      'Register on platforms like Chegg, Tutor.com, or Preply.',
      'Create a compelling profile highlighting your expertise.'
    ]
  },
  {
    id: 'fitness_coach',
    title: 'Fitness Coach / Personal Trainer',
    category: 'Career',
    description: 'Train others to achieve their health and fitness goals.',
    requiredSkills: ['fitness', 'gym', 'sports', 'health', 'nutrition', 'yoga'],
    difficulty: 'Advanced',
    timeframe: 'Medium-term',
    earningPotential: '$30 - $100 / hour',
    roadmap: [
      'Get a personal training certification (NASM/ACE).',
      'Train friends/family for free to build testimonials.',
      'Start an online coaching page or apply to local gyms.'
    ]
  },

  // --- BUSINESS & FINANCE ---
  {
    id: 'digital_marketing',
    title: 'Digital Marketer',
    category: 'Career',
    description: 'Help businesses grow their online presence through SEO, social media, and ads.',
    requiredSkills: ['marketing', 'social media', 'seo', 'analytics', 'facebook ads', 'google ads'],
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
    id: 'investment_advisor',
    title: 'Financial Consultant / Advisor',
    category: 'Career',
    description: 'Advise individuals or businesses on financial planning.',
    requiredSkills: ['finance', 'investing', 'economics', 'accounting', 'stock market'],
    difficulty: 'Advanced',
    timeframe: 'Long-term',
    earningPotential: 'Commission / Fee-based (High)',
    roadmap: [
      'Complete relevant education (Degree/Certifications like CFP/CFA).',
      'Gain experience in a financial firm.',
      'Build a client base through networking.'
    ]
  },
  {
    id: 'reselling',
    title: 'Reseller / Dropshipper',
    category: 'Side Hustle',
    description: 'Buy and sell products for profit or run a dropshipping store.',
    requiredSkills: ['sales', 'marketing', 'e-commerce', 'social media', 'negotiation'],
    difficulty: 'Beginner',
    timeframe: 'Short-term',
    earningPotential: '$200 - $2000+ / month',
    roadmap: [
      'Find a niche product or source (thrift, wholesale).',
      'Set up a store on Instagram, eBay, or Shopify.',
      'Market products through social media content.'
    ]
  },

  // --- LIFESTYLE & OTHERS ---
  {
    id: 'event_planner',
    title: 'Event Planner',
    category: 'Business',
    description: 'Organize and manage events like parties, weddings, or corporate meets.',
    requiredSkills: ['planning', 'organization', 'communication', 'management', 'socializing'],
    difficulty: 'Intermediate',
    timeframe: 'Medium-term',
    earningPotential: 'Project-based Fees',
    roadmap: [
      'Volunteer to organize local or family events.',
      'Build a portfolio of events managed.',
      'Network with vendors (caterers, venues) and market services.'
    ]
  },
  {
    id: 'travel_consultant',
    title: 'Travel Consultant / Guide',
    category: 'Freelance',
    description: 'Plan trips for others or guide tourists.',
    requiredSkills: ['travel', 'planning', 'geography', 'communication', 'languages'],
    difficulty: 'Intermediate',
    timeframe: 'Short-term',
    earningPotential: 'Commission / Tips',
    roadmap: [
      'Start a travel blog or Instagram to show expertise.',
      'Offer itinerary planning services online.',
      'Partner with local travel agencies.'
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
