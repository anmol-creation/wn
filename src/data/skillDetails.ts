
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
  const advancedKeywords = ['advanced', 'expert', 'complex', 'innovation', 'strategy', 'meta & seo', 'security'];
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
    baseLabel = 'Specialist-in-Progress';
  }

  return { level, label: baseLabel, percentage };
};

export const SKILL_DETAILS: Record<string, SkillDetail> = {
  // --- Web Development ---
  'html': [
    {
      category: 'Editors (Tools)',
      items: ['Notepad', 'VS Code', 'Sublime Text', 'Atom', 'Brackets', 'IntelliJ/WebStorm', 'Acode (Mobile)', 'Spck Editor', 'Dcoder', 'Quoda']
    },
    {
      category: 'Devices (Environment)',
      items: ['PC/Laptop', 'Mobile Browser', 'Tablet', 'Cross-Browser Testing']
    },
    {
      category: 'Basic Structure',
      items: ['<html>', '<head>', '<body>', '<!DOCTYPE html>']
    },
    {
      category: 'Text Formatting',
      items: ['<h1> to <h6>', '<p>', '<b> / <strong>', '<i> / <em>', '<br>', '<hr>']
    },
    {
      category: 'Media Tags',
      items: ['<img>', '<audio>', '<video>', '<source>', '<track>']
    },
    {
      category: 'Links & Navigation',
      items: ['<a>', '<nav>', '<link>', 'target="_blank"']
    },
    {
      category: 'Forms',
      items: ['<form>', '<input>', '<textarea>', '<button>', '<select>/<option>', '<label>', 'Input Types (text, email, password)']
    },
    {
      category: 'Layout & Semantics',
      items: ['<div>', '<span>', '<section>', '<article>', '<header>', '<footer>', '<main>', '<aside>']
    },
    {
      category: 'Tables & Lists',
      items: ['<table>', '<tr>', '<td>', '<th>', '<ul>', '<ol>', '<li>']
    },
    {
      category: 'Meta & SEO',
      items: ['<meta>', '<title>', 'Meta Description', 'Viewport Settings', 'Favicon']
    }
  ],
  'css': [
    {
      category: 'Tools & Preprocessors',
      items: ['VS Code', 'Chrome DevTools', 'Sass/SCSS', 'PostCSS', 'Tailwind', 'Bootstrap']
    },
    {
      category: 'Selectors & Specificity',
      items: ['Class (.)', 'ID (#)', 'Element', 'Group Selectors', 'Descendant Selectors', 'Pseudo-classes (:hover)', 'Pseudo-elements (::before)']
    },
    {
      category: 'Box Model & Layout',
      items: ['Margin/Padding', 'Border', 'Width/Height', 'Box-Sizing', 'Display (block/inline)', 'Positioning (absolute/relative)', 'Z-Index']
    },
    {
      category: 'Flexbox & Grid',
      items: ['justify-content', 'align-items', 'flex-direction', 'flex-wrap', 'grid-template-columns', 'gap', 'grid-area']
    },
    {
      category: 'Typography & Colors',
      items: ['font-family', 'font-size', 'font-weight', 'line-height', 'color', 'background-color', 'gradients']
    },
    {
      category: 'Responsive Design',
      items: ['Media Queries (@media)', 'Rem/Em Units', 'Viewport Units (vw/vh)', 'Mobile-First Workflow']
    },
    {
      category: 'Animations & Transitions',
      items: ['transition', 'transform (scale/rotate)', '@keyframes', 'animation-duration', 'animation-delay']
    }
  ],
  'javascript': [
    {
      category: 'Environment',
      items: ['Browser Console', 'Node.js', 'VS Code', 'NPM/Yarn', 'Dcoder (Mobile)', 'Acode']
    },
    {
      category: 'Syntax & Variables',
      items: ['var/let/const', 'Data Types (String, Number, Boolean)', 'Operators (+, -, *, /)', 'Comments']
    },
    {
      category: 'Control Flow',
      items: ['if/else', 'switch', 'for loop', 'while loop', 'Ternary Operator']
    },
    {
      category: 'Functions',
      items: ['Function Declaration', 'Arrow Functions', 'Parameters/Arguments', 'Return Statement', 'Scope']
    },
    {
      category: 'Data Structures',
      items: ['Arrays (push, pop, map, filter)', 'Objects (Keys/Values)', 'JSON Parsing']
    },
    {
      category: 'DOM Manipulation',
      items: ['getElementById', 'querySelector', 'addEventListener', 'innerHTML vs textContent', 'classList (add/remove)']
    },
    {
      category: 'Async & Advanced',
      items: ['Promises', 'Async/Await', 'Fetch API', 'Callbacks', 'Local Storage', 'ES6 Modules', 'Error Handling (try/catch)']
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
