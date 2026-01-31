
export interface SkillChecklistGroup {
  category: string;
  items: string[];
}

export type SkillDetail = SkillChecklistGroup[];

export const SCORE_THRESHOLDS = {
  BEGINNER: 25,
  INTERMEDIATE: 50,
  ADVANCED: 75,
  EXPERT: 100
};

export const getSkillLevel = (score: number, totalItems: number, selectedItems: string[] = [], details: SkillDetail = []): { level: number, label: string, percentage: number } => {
  const percentage = totalItems > 0 ? Math.round((score / totalItems) * 100) : 0;

  let baseLabel = 'Beginner';
  let level = 1;

  if (percentage <= 25) {
    baseLabel = 'Beginner';
    level = 1;
  } else if (percentage <= 50) {
    baseLabel = 'Intermediate';
    level = 2;
  } else if (percentage <= 75) {
    baseLabel = 'Advanced';
    level = 3;
  } else {
    baseLabel = 'Expert';
    level = 4;
  }

  // Hybrid Naming Logic
  // Identify if user has selected items from 'Advanced' or 'Expert' categories
  const advancedKeywords = ['advanced', 'expert', 'complex', 'innovation', 'strategy'];
  const advancedItems = new Set<string>();

  details.forEach(group => {
    if (advancedKeywords.some(kw => group.category.toLowerCase().includes(kw))) {
      group.items.forEach(item => advancedItems.add(item));
    }
  });

  const hasAdvancedSelection = selectedItems.some(item => advancedItems.has(item));

  // Apply hybrid labels based on base level and advanced selections
  if (level === 1 && hasAdvancedSelection) {
    baseLabel = 'Emerging Learner';
  } else if (level === 2 && hasAdvancedSelection) {
    baseLabel = 'Developing Practitioner';
  } else if (level === 3 && percentage < 76) {
    // "Advanced but missing expert coverage" - inherently captured by being in level 3 range
    // but we can give it the specific name if it's high-advanced
    baseLabel = 'Specialist-in-Progress';
  }

  return { level, label: baseLabel, percentage };
};

export const SKILL_DETAILS: Record<string, SkillDetail> = {
  // --- Web Development ---
  'html': [
    {
      category: 'Editors (Tools)',
      items: ['Notepad', 'VS Code', 'Sublime Text', 'Atom', 'Brackets', 'IntelliJ/WebStorm']
    },
    {
      category: 'Devices (Environment)',
      items: ['PC/Laptop', 'Mobile Browser', 'Tablet', 'Cross-Browser Testing']
    },
    {
      category: 'Code (Tags & Syntax)',
      items: ['<html>', '<head>/<body>', '<div>/<span>', '<form>/<input>', '<table>', 'Semantic Tags (<header>, <footer>)', 'Meta Tags', 'Audio/Video Tags', 'Canvas/SVG', 'Accessibility (ARIA)']
    }
  ],
  'css': [
    {
      category: 'Tools & Preprocessors',
      items: ['VS Code', 'Chrome DevTools', 'Sass/SCSS', 'PostCSS', 'Tailwind/Bootstrap']
    },
    {
      category: 'Core Concepts',
      items: ['Selectors (Class/ID)', 'Box Model', 'Positioning (Absolute/Relative)', 'Flexbox', 'Grid', 'Media Queries (Responsive)', 'Transitions/Animations', 'Variables (Custom Properties)']
    },
    {
      category: 'Advanced',
      items: ['Keyframes', 'Pseudo-classes', 'Pseudo-elements', 'Z-Index Context', 'CSS Modules', 'BEM Naming']
    }
  ],
  'javascript': [
    {
      category: 'Environment',
      items: ['Browser Console', 'Node.js', 'VS Code', 'NPM/Yarn']
    },
    {
      category: 'Syntax & Basics',
      items: ['Variables (let/const)', 'Functions (Arrow fns)', 'Loops/Conditionals', 'Arrays/Objects', 'DOM Manipulation', 'Events (click, submit)']
    },
    {
      category: 'Advanced Concepts',
      items: ['Promises/Async/Await', 'Fetch API / AJAX', 'ES6+ Features', 'Closures', 'This Keyword', 'Local Storage', 'Modules (Import/Export)', 'Error Handling']
    }
  ],
  'react': [
    {
      category: 'Core Concepts',
      items: ['JSX', 'Components (Class/Functional)', 'Props', 'State (useState)', 'Effects (useEffect)', 'Lists & Keys', 'Event Handling']
    },
    {
      category: 'Advanced & Ecosystem',
      items: ['Context API', 'Custom Hooks', 'React Router', 'Redux/Zustand', 'Refs', 'Performance Optimization (Memo)', 'Next.js Basics']
    },
    {
      category: 'Tools',
      items: ['Create React App / Vite', 'React DevTools', 'ESLint', 'Jest/Testing Library']
    }
  ],

  // --- Data Science ---
  'python': [
    {
      category: 'Environment',
      items: ['IDLE', 'VS Code', 'PyCharm', 'Jupyter Notebook', 'Anaconda']
    },
    {
      category: 'Core Syntax',
      items: ['Variables & Types', 'Lists/Dictionaries/Tuples', 'Loops (for/while)', 'Functions', 'File I/O', 'Exception Handling']
    },
    {
      category: 'Libraries & Usage',
      items: ['NumPy', 'Pandas', 'Matplotlib/Seaborn', 'Requests', 'BeautifulSoup (Scraping)', 'Flask/Django', 'OOP Concepts', 'Virtual Environments']
    }
  ],

  // --- Design ---
  'photoshop': [
    {
      category: 'Interface & Tools',
      items: ['Layers Panel', 'Selection Tools', 'Brush/Pen Tool', 'Crop/Slice', 'Gradient/Paint Bucket', 'Text Tool']
    },
    {
      category: 'Adjustments',
      items: ['Brightness/Contrast', 'Hue/Saturation', 'Levels/Curves', 'Color Balance', 'Masking']
    },
    {
      category: 'Advanced',
      items: ['Smart Objects', 'Filters/Effects', 'Actions/Automation', 'Blending Modes', 'Retouching (Healing Brush)', 'RAW Editing']
    }
  ],
  'figma': [
    {
      category: 'Basics',
      items: ['Frames & Groups', 'Vector Networks', 'Text & Styles', 'Constraints', 'Exporting Assets']
    },
    {
      category: 'Prototyping',
      items: ['Interactions', 'Smart Animate', 'Transitions', 'Device Frames', 'Flows']
    },
    {
      category: 'Advanced Systems',
      items: ['Auto Layout', 'Components', 'Variants', 'Interactive Components', 'Plugins', 'Team Libraries']
    }
  ],

  // --- Marketing ---
  'seo': [
    {
      category: 'On-Page',
      items: ['Keyword Research', 'Title Tags & Meta Desc', 'Headings (H1-H6)', 'Internal Linking', 'Image Alt Text', 'Content Quality']
    },
    {
      category: 'Off-Page & Tech',
      items: ['Backlinks', 'Social Signals', 'Site Speed', 'Mobile Friendliness', 'Sitemaps', 'Robots.txt', 'Google Search Console']
    },
    {
      category: 'Tools',
      items: ['Google Analytics', 'Ahrefs/SEMrush', 'Ubersuggest', 'Yoast SEO']
    }
  ],

  // --- Video Editing ---
  'premiere': [
    {
      category: 'Basics',
      items: ['Importing Footage', 'Timeline Editing', 'Cutting/Trimming', 'Transitions', 'Exporting']
    },
    {
      category: 'Audio & Color',
      items: ['Audio Levels', 'Noise Reduction', 'Lumetri Color Basics', 'Color Correction']
    },
    {
      category: 'Advanced',
      items: ['Keyframes', 'Masking', 'Multi-cam Editing', 'Motion Graphics Templates', 'Proxy Workflow']
    }
  ]
};

// Fallback templates for skills not explicitly defined
export const GENERIC_TEMPLATES: Record<string, SkillDetail> = {
  'coding': [
    {
      category: 'Tools & Environment',
      items: ['IDE / Text Editor', 'Command Line / Terminal', 'Version Control (Git)', 'Debugging Tools', 'Package Managers']
    },
    {
      category: 'Core Concepts',
      items: ['Syntax & Data Types', 'Control Structures', 'Functions/Methods', 'Error Handling', 'Algorithms Basics']
    },
    {
      category: 'Application',
      items: ['Building Projects', 'Code Review', 'Testing', 'Deployment', 'Documentation']
    }
  ],
  'design': [
    {
      category: 'Tools',
      items: ['Software Interface', 'File Formats (Exporting)', 'Shortcuts', 'Asset Management', 'Layers/Organization']
    },
    {
      category: 'Design Principles',
      items: ['Color Theory', 'Typography', 'Layout/Composition', 'Contrast & Balance', 'Visual Hierarchy']
    },
    {
      category: 'Workflow',
      items: ['Concepting/Sketching', 'Revisions/Feedback', 'Final Polish', 'Preparing for Print/Web']
    }
  ],
  'business': [
    {
      category: 'Knowledge Base',
      items: ['Industry Terminology', 'Market Research', 'Competitor Analysis', 'Business Models', 'Regulations/Compliance']
    },
    {
      category: 'Tools & Skills',
      items: ['Spreadsheets (Excel)', 'Presentation Software', 'Communication', 'Project Management Tools', 'Negotiation']
    },
    {
      category: 'Execution',
      items: ['Strategy Planning', 'Financial Budgeting', 'Team Collaboration', 'Sales/Marketing Basics', 'Problem Solving']
    }
  ],
  'general': [
    {
      category: 'Basics',
      items: ['Fundamental Concepts', 'Terminology', 'Basic Tools/Equipment', 'Safety/Best Practices', 'Simple Tasks']
    },
    {
      category: 'Intermediate',
      items: ['Complex Tasks', 'Troubleshooting', 'Efficiency/Speed', 'Planning/Organization', 'Collaboration']
    },
    {
      category: 'Advanced',
      items: ['Expert Techniques', 'Teaching/Mentoring', 'Innovation', 'Strategy/Architecture', 'Professional Output']
    }
  ]
};

export const getSkillDetails = (skillValue: string, skillLabel: string): SkillDetail => {
  // 1. Check exact match
  if (SKILL_DETAILS[skillValue]) return SKILL_DETAILS[skillValue];

  // 2. Check by keywords in label or value to pick a template
  const text = (skillValue + ' ' + skillLabel).toLowerCase();

  if (text.includes('dev') || text.includes('script') || text.includes('lang') || text.includes('sql') || text.includes('cloud')) {
    return GENERIC_TEMPLATES['coding'];
  }
  if (text.includes('design') || text.includes('photo') || text.includes('video') || text.includes('art') || text.includes('anim')) {
    return GENERIC_TEMPLATES['design'];
  }
  if (text.includes('business') || text.includes('marketing') || text.includes('finance') || text.includes('manage')) {
    return GENERIC_TEMPLATES['business'];
  }

  // 3. Fallback
  return GENERIC_TEMPLATES['general'];
};
