export interface HierarchicalOption {
  label: string;
  value: string;
  subOptions?: HierarchicalOption[];
  isContainer?: boolean; // If true, cannot be selected directly, only used for grouping
}

// Kept for backward compatibility if any imports exist, but aliased
export type EducationOption = HierarchicalOption;

export const EDUCATION_LEVELS: HierarchicalOption[] = [
  {
    label: 'Schooling (Up to 10th)',
    value: 'schooling',
    isContainer: true,
    subOptions: [
      { label: '10th Pass', value: '10th_pass' },
      { label: '9th Pass', value: '9th_pass' },
      { label: '8th Pass', value: '8th_pass' },
      { label: '7th Pass', value: '7th_pass' },
      { label: '6th Pass', value: '6th_pass' },
      { label: '5th Pass', value: '5th_pass' },
      { label: 'Below 5th', value: 'below_5th' },
      { label: 'None', value: 'none' }
    ]
  },
  {
    label: 'Higher Secondary (12th)',
    value: 'higher_secondary',
    isContainer: true,
    subOptions: [
      {
        label: 'Science',
        value: 'stream_science',
        subOptions: [
          { label: 'PCM (Physics, Chemistry, Math)', value: 'science_pcm' },
          { label: 'PCB (Physics, Chemistry, Biology)', value: 'science_pcb' },
          { label: 'PCMB (Physics, Chemistry, Math, Biology)', value: 'science_pcmb' }
        ]
      },
      {
        label: 'Commerce',
        value: 'stream_commerce',
        subOptions: [
          { label: 'With Math', value: 'commerce_math' },
          { label: 'Without Math', value: 'commerce_no_math' }
        ]
      },
      {
        label: 'Arts/Humanities',
        value: 'stream_arts',
        subOptions: [
          { label: 'Arts', value: 'arts' }
        ]
      },
      {
        label: 'Vocational',
        value: 'stream_vocational',
        subOptions: [
          { label: 'Vocational', value: 'vocational' }
        ]
      }
    ]
  },
  {
    label: 'Diploma / Vocational / ITI',
    value: 'diploma_vocational',
    isContainer: true,
    subOptions: [
      { label: 'ITI', value: 'iti' },
      { label: 'Polytechnic Diploma', value: 'polytechnic' },
      { label: 'Paramedical Diploma', value: 'paramedical_diploma' },
      { label: 'Computer Application Diploma', value: 'dca' },
      { label: 'Other Diploma', value: 'other_diploma' }
    ]
  },
  {
    label: 'Undergraduate (UG) / Graduation',
    value: 'undergraduate',
    isContainer: true,
    subOptions: [
      {
        label: 'Engineering & Technology',
        value: 'ug_engineering',
        subOptions: [
          { label: 'B.Tech / B.E.', value: 'btech' },
          { label: 'BCA', value: 'bca' },
          { label: 'B.Sc IT / CS', value: 'bsc_it_cs' }
        ]
      },
      {
        label: 'Science & Agriculture',
        value: 'ug_science',
        subOptions: [
          { label: 'B.Sc (General)', value: 'bsc_gen' },
          { label: 'B.Sc (Agriculture)', value: 'bsc_agri' }
        ]
      },
      {
        label: 'Commerce & Management',
        value: 'ug_commerce',
        subOptions: [
          { label: 'B.Com', value: 'bcom' },
          { label: 'BBA', value: 'bba' },
          { label: 'BMS', value: 'bms' }
        ]
      },
      {
        label: 'Arts, Humanities & Law',
        value: 'ug_arts_law',
        subOptions: [
          { label: 'B.A.', value: 'ba' },
          { label: 'BFA (Fine Arts)', value: 'bfa' },
          { label: 'LLB', value: 'llb' },
          { label: 'BA LLB (Integrated)', value: 'ba_llb' }
        ]
      },
      {
        label: 'Medical & Health Sciences',
        value: 'ug_medical',
        subOptions: [
          { label: 'MBBS', value: 'mbbs' },
          { label: 'BDS', value: 'bds' },
          { label: 'BAMS / BHMS', value: 'ayush' },
          { label: 'B.Pharma', value: 'bpharma' },
          { label: 'B.Sc Nursing', value: 'bsc_nursing' }
        ]
      },
      {
        label: 'Education & Others',
        value: 'ug_others',
        subOptions: [
          { label: 'B.Ed', value: 'bed' },
          { label: 'B.Des (Design)', value: 'bdes' },
          { label: 'B.Arch', value: 'barch' },
          { label: 'Hotel Management', value: 'bhm' }
        ]
      }
    ]
  },
  {
    label: 'Postgraduate (PG) / Post-Graduation',
    value: 'postgraduate',
    isContainer: true,
    subOptions: [
      {
        label: 'Engineering & Technology',
        value: 'pg_engineering',
        subOptions: [
          { label: 'M.Tech / M.E.', value: 'mtech' },
          { label: 'MCA', value: 'mca' },
          { label: 'M.Sc IT / CS', value: 'msc_it_cs' }
        ]
      },
      {
        label: 'Science & Agriculture',
        value: 'pg_science',
        subOptions: [
          { label: 'M.Sc', value: 'msc' },
          { label: 'M.Sc (Agriculture)', value: 'msc_agri' }
        ]
      },
      {
        label: 'Commerce & Management',
        value: 'pg_commerce',
        subOptions: [
          { label: 'M.Com', value: 'mcom' },
          { label: 'MBA', value: 'mba' },
          { label: 'PGDM', value: 'pgdm' },
          { label: 'CA / CS / CMA', value: 'ca_cs_cma' }
        ]
      },
      {
        label: 'Arts, Humanities & Law',
        value: 'pg_arts_law',
        subOptions: [
          { label: 'M.A.', value: 'ma' },
          { label: 'MFA', value: 'mfa' },
          { label: 'LLM', value: 'llm' }
        ]
      },
      {
        label: 'Medical & Health Sciences',
        value: 'pg_medical',
        subOptions: [
          { label: 'MD / MS', value: 'md_ms' },
          { label: 'MDS', value: 'mds' },
          { label: 'M.Pharma', value: 'mpharma' },
          { label: 'M.Sc Nursing', value: 'msc_nursing' }
        ]
      },
      {
        label: 'Education & Others',
        value: 'pg_others',
        subOptions: [
          { label: 'M.Ed', value: 'med' },
          { label: 'M.Des', value: 'mdes' },
          { label: 'M.Arch', value: 'march' }
        ]
      }
    ]
  },
  {
    label: 'Doctorate / Research Level',
    value: 'doctorate_level',
    isContainer: true,
    subOptions: [
      { label: 'Ph.D.', value: 'phd' },
      { label: 'Post-Doctorate', value: 'post_doc' },
      { label: 'M.Phil', value: 'mphil' }
    ]
  }
];

export const SKILL_LEVELS: HierarchicalOption[] = [
  {
    label: 'Digital & Tech Skills',
    value: 'digital_tech',
    isContainer: true,
    subOptions: [
      {
        label: 'Web Development',
        value: 'web_dev',
        isContainer: true,
        subOptions: [
          { label: 'HTML', value: 'html' },
          { label: 'CSS', value: 'css' },
          { label: 'JavaScript', value: 'javascript' },
          { label: 'React', value: 'react' },
          { label: 'Angular', value: 'angular' },
          { label: 'Vue.js', value: 'vue' },
          { label: 'PHP', value: 'php' },
          { label: 'Node.js', value: 'node' }
        ]
      },
      {
        label: 'App Development',
        value: 'app_dev',
        isContainer: true,
        subOptions: [
          { label: 'Flutter', value: 'flutter' },
          { label: 'React Native', value: 'react_native' },
          { label: 'Swift (iOS)', value: 'swift' },
          { label: 'Kotlin (Android)', value: 'kotlin' }
        ]
      },
      {
        label: 'Data Science & Analytics',
        value: 'data_science',
        isContainer: true,
        subOptions: [
          { label: 'Python', value: 'python' },
          { label: 'R', value: 'r_lang' },
          { label: 'SQL', value: 'sql' },
          { label: 'Tableau', value: 'tableau' },
          { label: 'Power BI', value: 'powerbi' },
          { label: 'Machine Learning', value: 'ml' }
        ]
      },
      { label: 'Cybersecurity', value: 'cybersecurity', isContainer: true, subOptions: [
          { label: 'Ethical Hacking', value: 'ethical_hacking' },
          { label: 'Network Security', value: 'network_sec' }
      ]},
      { label: 'Cloud Computing', value: 'cloud', isContainer: true, subOptions: [
          { label: 'AWS', value: 'aws' },
          { label: 'Azure', value: 'azure' },
          { label: 'Google Cloud', value: 'gcp' }
      ]}
    ]
  },
  {
    label: 'Creative & Media Skills',
    value: 'creative_media',
    isContainer: true,
    subOptions: [
      {
        label: 'Video Editing',
        value: 'video_editing',
        isContainer: true,
        subOptions: [
          { label: 'Premiere Pro', value: 'premiere' },
          { label: 'Final Cut Pro', value: 'fcp' },
          { label: 'DaVinci Resolve', value: 'davinci' },
          { label: 'CapCut', value: 'capcut' },
          { label: 'Kinemaster', value: 'kinemaster' },
          { label: 'VN Editor', value: 'vn' },
          { label: 'Alight Motion', value: 'alight_motion' }
        ]
      },
      {
        label: 'Graphic Design',
        value: 'graphic_design',
        isContainer: true,
        subOptions: [
          { label: 'Photoshop', value: 'photoshop' },
          { label: 'Illustrator', value: 'illustrator' },
          { label: 'CorelDRAW', value: 'coreldraw' },
          { label: 'Canva', value: 'canva' },
          { label: 'Figma', value: 'figma' }
        ]
      },
      {
        label: 'Content Creation',
        value: 'content_creation',
        isContainer: true,
        subOptions: [
          { label: 'Copywriting', value: 'copywriting' },
          { label: 'Storytelling', value: 'storytelling' },
          { label: 'Scriptwriting', value: 'scriptwriting' },
          { label: 'Blogging', value: 'blogging' }
        ]
      },
      { label: 'Animation', value: 'animation', isContainer: true, subOptions: [
          { label: 'After Effects', value: 'after_effects' },
          { label: 'Blender', value: 'blender' },
          { label: 'Maya', value: 'maya' }
      ]}
    ]
  },
  {
    label: 'Business & Management Skills',
    value: 'business',
    isContainer: true,
    subOptions: [
      {
        label: 'Marketing',
        value: 'marketing',
        isContainer: true,
        subOptions: [
          { label: 'SEO', value: 'seo' },
          { label: 'Social Media Marketing', value: 'smm' },
          { label: 'Google Ads (SEM)', value: 'sem' },
          { label: 'Email Marketing', value: 'email_marketing' },
          { label: 'Affiliate Marketing', value: 'affiliate' }
        ]
      },
      {
        label: 'Finance',
        value: 'finance',
        isContainer: true,
        subOptions: [
          { label: 'Accounting', value: 'accounting' },
          { label: 'Bookkeeping', value: 'bookkeeping' },
          { label: 'Investing', value: 'investing' },
          { label: 'Stock Trading', value: 'trading' }
        ]
      },
      { label: 'Project Management', value: 'pm', isContainer: true, subOptions: [
          { label: 'Agile/Scrum', value: 'agile' },
          { label: 'Jira', value: 'jira' },
          { label: 'Trello', value: 'trello' }
      ]},
      { label: 'Entrepreneurship', value: 'entrepreneurship' }
    ]
  },
  {
    label: 'Communication & Language Skills',
    value: 'communication',
    isContainer: true,
    subOptions: [
      { label: 'Public Speaking', value: 'public_speaking' },
      { label: 'Debating', value: 'debating' },
      { label: 'Translation', value: 'translation' },
      { label: 'Creative Writing', value: 'creative_writing' },
      { label: 'Technical Writing', value: 'technical_writing' }
    ]
  },
  {
    label: 'Technical & Mechanical Skills',
    value: 'technical_mechanical',
    isContainer: true,
    subOptions: [
      { label: 'Electronics Repair', value: 'electronics_repair' },
      { label: 'Automotive Repair', value: 'auto_repair' },
      { label: 'Welding', value: 'welding' },
      { label: 'Carpentry', value: 'carpentry' },
      { label: 'Plumbing', value: 'plumbing' }
    ]
  },
  {
    label: 'Education & Academic Skills',
    value: 'academic',
    isContainer: true,
    subOptions: [
      { label: 'Teaching / Tutoring', value: 'teaching' },
      { label: 'Curriculum Design', value: 'curriculum' },
      { label: 'Research', value: 'research' },
      { label: 'Academic Writing', value: 'academic_writing' }
    ]
  },
  {
    label: 'Health & Wellness Skills',
    value: 'health',
    isContainer: true,
    subOptions: [
      { label: 'Yoga Instruction', value: 'yoga' },
      { label: 'Personal Training', value: 'personal_training' },
      { label: 'Nutrition Planning', value: 'nutrition' },
      { label: 'Meditation Guide', value: 'meditation' },
      { label: 'First Aid', value: 'first_aid' }
    ]
  },
  {
    label: 'Art, Design & Performance Skills',
    value: 'arts_performance',
    isContainer: true,
    subOptions: [
      { label: 'Drawing / Sketching', value: 'drawing' },
      { label: 'Painting', value: 'painting' },
      { label: 'Music Production', value: 'music_prod' },
      { label: 'Playing Instruments', value: 'instruments' },
      { label: 'Singing', value: 'singing' },
      { label: 'Acting', value: 'acting' },
      { label: 'Dancing', value: 'dancing' }
    ]
  },
  {
    label: 'Lifestyle & Personal Skills',
    value: 'lifestyle',
    isContainer: true,
    subOptions: [
      { label: 'Cooking / Culinary Arts', value: 'cooking' },
      { label: 'Baking', value: 'baking' },
      { label: 'Gardening', value: 'gardening' },
      { label: 'Interior Decorating', value: 'decorating' },
      { label: 'Fashion Styling', value: 'styling' }
    ]
  },
  {
    label: 'Agriculture & Allied Skills',
    value: 'agri_skills',
    isContainer: true,
    subOptions: [
      { label: 'Organic Farming', value: 'organic_farming' },
      { label: 'Animal Husbandry', value: 'animal_husbandry' },
      { label: 'Horticulture', value: 'horticulture' }
    ]
  }
];

export const HOBBY_LEVELS: HierarchicalOption[] = [
  {
    label: 'Creative & Artistic Hobbies',
    value: 'creative_hobbies',
    isContainer: true,
    subOptions: [
      {
        label: 'Drawing / Painting',
        value: 'drawing_painting',
        isContainer: true,
        subOptions: [
          { label: 'Sketching', value: 'sketching' },
          { label: 'Watercolor', value: 'watercolor' },
          { label: 'Oil Painting', value: 'oil_painting' },
          { label: 'Digital Art', value: 'digital_art' }
        ]
      },
      {
        label: 'Crafting / DIY',
        value: 'crafting',
        isContainer: true,
        subOptions: [
          { label: 'Knitting/Sewing', value: 'knitting' },
          { label: 'Origami', value: 'origami' },
          { label: 'Woodworking', value: 'woodworking' }
        ]
      },
      {
        label: 'Photography',
        value: 'photography',
        isContainer: true,
        subOptions: [
          { label: 'Nature Photography', value: 'nature_photo' },
          { label: 'Portrait Photography', value: 'portrait_photo' },
          { label: 'Street Photography', value: 'street_photo' }
        ]
      },
      {
        label: 'Writing',
        value: 'writing_hobby',
        isContainer: true,
        subOptions: [
          { label: 'Poetry', value: 'poetry' },
          { label: 'Journaling', value: 'journaling' },
          { label: 'Short Stories', value: 'short_stories' }
        ]
      }
    ]
  },
  {
    label: 'Performance & Entertainment Hobbies',
    value: 'performance_hobbies',
    isContainer: true,
    subOptions: [
      {
        label: 'Music',
        value: 'music_hobby',
        isContainer: true,
        subOptions: [
          { label: 'Singing', value: 'singing' },
          { label: 'Guitar', value: 'guitar' },
          { label: 'Piano', value: 'piano' },
          { label: 'Drums', value: 'drums' },
          { label: 'DJing', value: 'dj' }
        ]
      },
      {
        label: 'Dance',
        value: 'dance_hobby',
        isContainer: true,
        subOptions: [
          { label: 'Hip Hop', value: 'hiphop' },
          { label: 'Classical', value: 'classical_dance' },
          { label: 'Salsa', value: 'salsa' }
        ]
      },
      {
        label: 'Acting / Theatre',
        value: 'acting_hobby',
        isContainer: true,
        subOptions: [
          { label: 'Drama', value: 'drama' },
          { label: 'Stand-up Comedy', value: 'comedy' },
          { label: 'Mimicry', value: 'mimicry' }
        ]
      },
      {
        label: 'Gaming',
        value: 'gaming',
        isContainer: true,
        subOptions: [
          { label: 'PC Gaming', value: 'pc_gaming' },
          { label: 'Console Gaming', value: 'console_gaming' },
          { label: 'Mobile Gaming', value: 'mobile_gaming' }
        ]
      }
    ]
  },
  {
    label: 'Outdoor & Adventure Hobbies',
    value: 'outdoor_hobbies',
    isContainer: true,
    subOptions: [
      {
        label: 'Traveling',
        value: 'traveling',
        isContainer: true,
        subOptions: [
          { label: 'Backpacking', value: 'backpacking' },
          { label: 'Road Trips', value: 'road_trips' },
          { label: 'Solo Travel', value: 'solo_travel' }
        ]
      },
      {
        label: 'Trekking / Hiking',
        value: 'trekking',
        isContainer: true,
        subOptions: [
          { label: 'Mountain Trekking', value: 'mountain_trek' },
          { label: 'Forest Hiking', value: 'forest_hike' }
        ]
      },
      { label: 'Camping', value: 'camping' },
      {
        label: 'Sports',
        value: 'sports_hobby',
        isContainer: true,
        subOptions: [
          { label: 'Cricket', value: 'cricket' },
          { label: 'Football', value: 'football' },
          { label: 'Badminton', value: 'badminton' },
          { label: 'Basketball', value: 'basketball' },
          { label: 'Athletics', value: 'athletics' }
        ]
      }
    ]
  },
  {
    label: 'Lifestyle & Leisure Hobbies',
    value: 'lifestyle_hobbies',
    isContainer: true,
    subOptions: [
      {
        label: 'Cooking',
        value: 'cooking_hobby',
        isContainer: true,
        subOptions: [
          { label: 'Baking', value: 'baking' },
          { label: 'Indian Cuisine', value: 'indian_cuisine' },
          { label: 'Continental Cuisine', value: 'continental' },
          { label: 'Street Food Experiments', value: 'street_food' }
        ]
      },
      { label: 'Gardening', value: 'gardening' },
      { label: 'Reading', value: 'reading' },
      { label: 'Collecting', value: 'collecting' }
    ]
  },
  {
    label: 'Technology & Digital Hobbies',
    value: 'tech_hobbies',
    isContainer: true,
    subOptions: [
      {
        label: 'Blogging',
        value: 'blogging_hobby',
        isContainer: true,
        subOptions: [
          { label: 'Personal Blog', value: 'personal_blog' },
          { label: 'Tech Blog', value: 'tech_blog' },
          { label: 'Travel Blog', value: 'travel_blog' }
        ]
      },
      { label: 'Social Media Content', value: 'social_media' },
      { label: 'Coding for Fun', value: 'coding_fun' },
      { label: 'Video Creation', value: 'video_creation' }
    ]
  },
  {
    label: 'Mind & Wellness Hobbies',
    value: 'wellness_hobbies',
    isContainer: true,
    subOptions: [
      {
        label: 'Yoga & Meditation',
        value: 'yoga_hobby',
        isContainer: true,
        subOptions: [
          { label: 'Asanas', value: 'asanas' },
          { label: 'Breathing Exercises', value: 'breathing' },
          { label: 'Mindfulness', value: 'mindfulness' }
        ]
      },
      { label: 'Fitness', value: 'fitness_hobby' },
      { label: 'Puzzle Solving', value: 'puzzles' },
      { label: 'Chess / Board Games', value: 'board_games' }
    ]
  }
];

export const INTEREST_LEVELS: HierarchicalOption[] = [
  {
    label: 'Academic & Knowledge Interests',
    value: 'academic_interests',
    isContainer: true,
    subOptions: [
      {
        label: 'Science',
        value: 'science_interest',
        isContainer: true,
        subOptions: [
          { label: 'Physics', value: 'physics' },
          { label: 'Chemistry', value: 'chemistry' },
          { label: 'Biology', value: 'biology' },
          { label: 'Astronomy', value: 'astronomy' },
          { label: 'Environmental Science', value: 'env_science' }
        ]
      },
      { label: 'Mathematics', value: 'math_interest' },
      { label: 'History', value: 'history_interest' },
      { label: 'Literature', value: 'literature_interest' },
      { label: 'Philosophy', value: 'philosophy_interest' }
    ]
  },
  {
    label: 'Technology & Innovation Interests',
    value: 'tech_innovation',
    isContainer: true,
    subOptions: [
      {
        label: 'Computers & IT',
        value: 'computers_it',
        isContainer: true,
        subOptions: [
          { label: 'AI/ML', value: 'ai_ml' },
          { label: 'Cybersecurity', value: 'cybersec_interest' },
          { label: 'Blockchain', value: 'blockchain_interest' },
          { label: 'Cloud Computing', value: 'cloud_interest' }
        ]
      },
      { label: 'Gadgets', value: 'gadgets' },
      { label: 'Robotics', value: 'robotics' },
      {
        label: 'Emerging Tech',
        value: 'emerging_tech',
        isContainer: true,
        subOptions: [
          { label: 'AR/VR', value: 'ar_vr' },
          { label: 'IoT', value: 'iot' }
        ]
      }
    ]
  },
  {
    label: 'Business & Finance Interests',
    value: 'business_finance',
    isContainer: true,
    subOptions: [
      { label: 'Entrepreneurship', value: 'entrepreneurship_interest' },
      { label: 'Marketing', value: 'marketing_interest' },
      {
        label: 'Finance',
        value: 'finance_interest',
        isContainer: true,
        subOptions: [
          { label: 'Stock Market', value: 'stock_market' },
          { label: 'Investments', value: 'investments' },
          { label: 'Personal Finance', value: 'personal_finance' },
          { label: 'Crypto', value: 'crypto' }
        ]
      },
      { label: 'Economics', value: 'economics' }
    ]
  },
  {
    label: 'Creative & Artistic Interests',
    value: 'creative_interests',
    isContainer: true,
    subOptions: [
      {
        label: 'Visual Arts',
        value: 'visual_arts',
        isContainer: true,
        subOptions: [
          { label: 'Photography', value: 'photography_interest' },
          { label: 'Painting', value: 'painting_interest' },
          { label: 'Sculpture', value: 'sculpture' }
        ]
      },
      { label: 'Performing Arts', value: 'performing_arts_interest' },
      { label: 'Writing', value: 'writing_interest' },
      { label: 'Fashion & Design', value: 'fashion_design_interest' }
    ]
  },
  {
    label: 'Lifestyle & Personal Interests',
    value: 'lifestyle_interests',
    isContainer: true,
    subOptions: [
      {
        label: 'Food',
        value: 'food_interest',
        isContainer: true,
        subOptions: [
          { label: 'Baking', value: 'baking_interest' },
          { label: 'Indian Cuisine', value: 'indian_cuisine_interest' },
          { label: 'World Cuisine', value: 'world_cuisine' }
        ]
      },
      { label: 'Travel', value: 'travel_interest' },
      { label: 'Fitness', value: 'fitness_interest' },
      { label: 'Wellness', value: 'wellness_interest' }
    ]
  },
  {
    label: 'Social & Community Interests',
    value: 'social_interests',
    isContainer: true,
    subOptions: [
      {
        label: 'Volunteering',
        value: 'volunteering_interest',
        isContainer: true,
        subOptions: [
          { label: 'NGOs', value: 'ngos' },
          { label: 'Community Service', value: 'community_service' },
          { label: 'Awareness Campaigns', value: 'awareness' }
        ]
      },
      { label: 'Politics', value: 'politics' },
      { label: 'Environment', value: 'environment_interest' },
      { label: 'Education', value: 'education_interest' }
    ]
  },
  {
    label: 'Entertainment & Media Interests',
    value: 'entertainment_interests',
    isContainer: true,
    subOptions: [
      {
        label: 'Movies',
        value: 'movies_interest',
        isContainer: true,
        subOptions: [
          { label: 'Bollywood', value: 'bollywood' },
          { label: 'Hollywood', value: 'hollywood' },
          { label: 'Regional Cinema', value: 'regional_cinema' }
        ]
      },
      { label: 'TV Shows', value: 'tv_shows' },
      { label: 'Gaming', value: 'gaming_interest' },
      { label: 'Social Media', value: 'social_media_interest' }
    ]
  },
  {
    label: 'Sports & Outdoor Interests',
    value: 'sports_interests',
    isContainer: true,
    subOptions: [
      {
        label: 'Team Sports',
        value: 'team_sports',
        isContainer: true,
        subOptions: [
          { label: 'Cricket', value: 'cricket_interest' },
          { label: 'Football', value: 'football_interest' }
        ]
      },
      {
        label: 'Individual Sports',
        value: 'individual_sports',
        isContainer: true,
        subOptions: [
          { label: 'Badminton', value: 'badminton_interest' },
          { label: 'Swimming', value: 'swimming' }
        ]
      },
      {
        label: 'Adventure',
        value: 'adventure_sports',
        isContainer: true,
        subOptions: [
          { label: 'Trekking', value: 'trekking_interest' }
        ]
      },
      { label: 'Fitness Sports', value: 'fitness_sports' }
    ]
  }
];

export const ACTIVITY_LEVELS: HierarchicalOption[] = [
  {
    label: 'Academic & Learning Activities',
    value: 'academic_activities',
    subOptions: [
      {
        label: 'School / College Participation',
        value: 'school_participation',
        subOptions: [
          { label: 'Debate Competition', value: 'debate_comp' },
          { label: 'Science Fair Project', value: 'science_fair' },
          { label: 'Cultural Program', value: 'cultural_program' }
        ]
      },
      { label: 'Research Work', value: 'research_work' },
      { label: 'Tutoring / Teaching', value: 'tutoring_activity' }
    ]
  },
  {
    label: 'Professional & Work Activities',
    value: 'professional_activities',
    subOptions: [
      {
        label: 'Internships',
        value: 'internships',
        subOptions: [
          { label: 'Internship at Company', value: 'company_internship' }
        ]
      },
      {
        label: 'Freelancing',
        value: 'freelancing_activity',
        subOptions: [
          { label: 'Freelance Video Editing', value: 'freelance_video' },
          { label: 'Freelance Content Writing', value: 'freelance_content' }
        ]
      },
      {
        label: 'Entrepreneurship',
        value: 'entrepreneurship_activity',
        subOptions: [
          { label: 'Managed Online Shop', value: 'online_shop' }
        ]
      },
      { label: 'Volunteering', value: 'professional_volunteering' }
    ]
  },
  {
    label: 'Creative & Media Activities',
    value: 'creative_activities',
    subOptions: [
      {
        label: 'Content Creation',
        value: 'content_creation_activity',
        subOptions: [
          { label: 'Created YouTube Channel', value: 'youtube_channel' },
          { label: 'Started a Podcast', value: 'podcast_activity' }
        ]
      },
      {
        label: 'Media Management',
        value: 'media_management',
        subOptions: [
          { label: 'Managed 200k Social Media Page', value: 'social_media_mgmt' }
        ]
      },
      {
        label: 'Art & Performance',
        value: 'art_performance_activity',
        subOptions: [
          { label: 'Theatre Performance', value: 'theatre_perf' },
          { label: 'Dance Performance', value: 'dance_perf' }
        ]
      }
    ]
  },
  {
    label: 'Sports & Fitness Activities',
    value: 'sports_activities',
    subOptions: [
      {
        label: 'Team Sports',
        value: 'team_sports_activity',
        subOptions: [
          { label: 'District Cricket Tournament', value: 'cricket_tournament' },
          { label: 'College Football Match', value: 'football_match' }
        ]
      },
      { label: 'Individual Sports', value: 'individual_sports_activity' },
      {
        label: 'Fitness',
        value: 'fitness_activity',
        subOptions: [
          { label: 'Yoga Competition', value: 'yoga_comp' },
          { label: 'Marathon', value: 'marathon' }
        ]
      }
    ]
  },
  {
    label: 'Community & Social Activities',
    value: 'community_activities',
    subOptions: [
      {
        label: 'Volunteering',
        value: 'community_volunteering',
        subOptions: [
          { label: 'Tree Plantation Drive', value: 'tree_plantation' },
          { label: 'Blood Donation Camp', value: 'blood_donation' }
        ]
      },
      {
        label: 'Leadership',
        value: 'leadership_activity',
        subOptions: [
          { label: 'Led Student Council', value: 'student_council' },
          { label: 'Organized College Fest', value: 'college_fest' }
        ]
      },
      { label: 'Social Work', value: 'social_work_activity' }
    ]
  },
  {
    label: 'Technology & Innovation Activities',
    value: 'tech_activities',
    subOptions: [
      {
        label: 'Hackathons',
        value: 'hackathons',
        subOptions: [
          { label: 'Participated in Hackathon', value: 'hackathon_part' },
          { label: 'Won Hackathon', value: 'hackathon_won' }
        ]
      },
      {
        label: 'App / Website Development',
        value: 'dev_projects',
        subOptions: [
          { label: 'Built Mobile App', value: 'built_app' },
          { label: 'Built Website', value: 'built_website' }
        ]
      },
      {
        label: 'Tech Projects',
        value: 'tech_projects_activity',
        subOptions: [
          { label: 'Robotics Competition', value: 'robotics_comp' }
        ]
      }
    ]
  },
  {
    label: 'Lifestyle & Personal Activities',
    value: 'lifestyle_activities',
    subOptions: [
      {
        label: 'Events',
        value: 'events_activity',
        subOptions: [
          { label: 'Organized Family Event', value: 'family_event' },
          { label: 'Photography Exhibition', value: 'photo_exhibition' }
        ]
      },
      {
        label: 'Hobby Competitions',
        value: 'hobby_comps',
        subOptions: [
          { label: 'Cooking Contest', value: 'cooking_contest' }
        ]
      },
      {
        label: 'Travel',
        value: 'travel_activity',
        subOptions: [
          { label: 'Travel Blog Writing', value: 'travel_blogging' }
        ]
      }
    ]
  }
];

export const SPENDING_LEVELS: HierarchicalOption[] = [
  {
    label: 'Basic Living Expenses',
    value: 'living_expenses',
    subOptions: [
      {
        label: 'Housing',
        value: 'housing',
        subOptions: [
          { label: 'Rent', value: 'rent' },
          { label: 'EMI', value: 'housing_emi' },
          { label: 'Utilities (Electricity/Water)', value: 'utilities' }
        ]
      },
      {
        label: 'Food',
        value: 'food_expenses',
        subOptions: [
          { label: 'Groceries', value: 'groceries' },
          { label: 'Eating Out', value: 'eating_out' },
          { label: 'Monthly Ration', value: 'ration' }
        ]
      },
      { label: 'Transportation', value: 'transport_expense' }
    ]
  },
  {
    label: 'Education & Learning',
    value: 'education_expenses',
    subOptions: [
      { label: 'Tuition Fees', value: 'tuition_fees' },
      {
        label: 'Courses',
        value: 'courses_expense',
        subOptions: [
          { label: 'Online Course Subscription', value: 'online_courses' },
          { label: 'Coaching Fees', value: 'coaching_fees' }
        ]
      },
      {
        label: 'Books & Study Material',
        value: 'books_expense',
        subOptions: [
          { label: 'Exam Material', value: 'exam_material' },
          { label: 'Textbooks', value: 'textbooks' }
        ]
      }
    ]
  },
  {
    label: 'Health & Wellness',
    value: 'health_expenses',
    subOptions: [
      { label: 'Medical', value: 'medical_expense', subOptions: [
          { label: 'Medicine Expenses', value: 'medicines' },
          { label: 'Doctor Fees', value: 'doctor_fees' }
      ]},
      {
        label: 'Fitness',
        value: 'fitness_expense',
        subOptions: [
          { label: 'Gym Fee', value: 'gym_fee' },
          { label: 'Sports Equipment', value: 'sports_gear' }
        ]
      },
      { label: 'Health Insurance Premium', value: 'health_insurance' }
    ]
  },
  {
    label: 'Technology & Gadgets',
    value: 'tech_expenses',
    subOptions: [
      {
        label: 'Mobile',
        value: 'mobile_expense',
        subOptions: [
          { label: 'Mobile Recharge', value: 'mobile_recharge' },
          { label: 'New Phone Purchase', value: 'new_phone' }
        ]
      },
      {
        label: 'Laptop / PC',
        value: 'pc_expense',
        subOptions: [
          { label: 'Laptop Purchase', value: 'laptop_purchase' },
          { label: 'PC Parts', value: 'pc_parts' }
        ]
      },
      { label: 'Internet Bill', value: 'internet_bill' }
    ]
  },
  {
    label: 'Lifestyle & Entertainment',
    value: 'lifestyle_expenses',
    subOptions: [
      {
        label: 'Subscriptions',
        value: 'subscriptions',
        subOptions: [
          { label: 'Netflix Subscription', value: 'netflix' },
          { label: 'Spotify/Music', value: 'music_sub' }
        ]
      },
      {
        label: 'Shopping',
        value: 'shopping_expense',
        subOptions: [
          { label: 'Monthly Shopping Budget', value: 'monthly_shopping' }
        ]
      },
      {
        label: 'Outings',
        value: 'outings_expense',
        subOptions: [
          { label: 'Weekend Outing', value: 'weekend_outing' },
          { label: 'Movies', value: 'movie_tickets' }
        ]
      }
    ]
  },
  {
    label: 'Savings & Investments',
    value: 'savings_investments',
    subOptions: [
      { label: 'Bank Savings', value: 'bank_savings' },
      {
        label: 'Investments',
        value: 'investment_expense',
        subOptions: [
          { label: 'SIP Investment', value: 'sip' },
          { label: 'Stock Market', value: 'stocks' }
        ]
      },
      {
        label: 'Insurance',
        value: 'insurance_expense',
        subOptions: [
          { label: 'Insurance Premium', value: 'insurance_prem' }
        ]
      }
    ]
  },
  {
    label: 'Social & Community',
    value: 'social_expenses',
    subOptions: [
      {
        label: 'Donations',
        value: 'donations_expense',
        subOptions: [
          { label: 'Charity Donation', value: 'charity' }
        ]
      },
      {
        label: 'Events',
        value: 'social_events_expense',
        subOptions: [
          { label: 'Festival Shopping', value: 'festival_shopping' },
          { label: 'Wedding Contribution', value: 'wedding_contrib' }
        ]
      },
      { label: 'Gifts', value: 'gifts_expense' }
    ]
  }
];

export const RESOURCE_LEVELS: HierarchicalOption[] = [
  {
    label: 'Financial Resources',
    value: 'financial_resources',
    subOptions: [
      {
        label: 'Personal Savings',
        value: 'personal_savings',
        subOptions: [
          { label: 'Monthly Allowance', value: 'allowance' },
          { label: 'Bank Balance', value: 'bank_balance' }
        ]
      },
      {
        label: 'Family Support',
        value: 'family_support',
        subOptions: [
          { label: 'Family Financial Help', value: 'family_help' }
        ]
      },
      {
        label: 'External Funding',
        value: 'external_funding',
        subOptions: [
          { label: 'Education Loan', value: 'edu_loan' },
          { label: 'Scholarship Grant', value: 'scholarship' }
        ]
      }
    ]
  },
  {
    label: 'Educational Resources',
    value: 'educational_resources',
    subOptions: [
      {
        label: 'Institutions',
        value: 'institutions',
        subOptions: [
          { label: 'College Library Access', value: 'library_access' },
          { label: 'Research Lab Access', value: 'lab_access' }
        ]
      },
      {
        label: 'Online Platforms',
        value: 'online_platforms',
        subOptions: [
          { label: 'Online Course Subscription', value: 'course_sub' },
          { label: 'Research Journal Access', value: 'journal_access' }
        ]
      },
      {
        label: 'Study Material',
        value: 'study_material',
        subOptions: [
          { label: 'Coaching Notes', value: 'coaching_notes' },
          { label: 'Textbooks', value: 'textbooks_resource' }
        ]
      }
    ]
  },
  {
    label: 'Technology Resources',
    value: 'technology_resources',
    subOptions: [
      {
        label: 'Devices',
        value: 'devices',
        subOptions: [
          { label: 'Personal Laptop', value: 'laptop' },
          { label: 'Smartphone with Apps', value: 'smartphone' },
          { label: 'Tablet', value: 'tablet' }
        ]
      },
      {
        label: 'Internet Access',
        value: 'internet_access',
        subOptions: [
          { label: 'High-Speed Internet', value: 'high_speed_net' },
          { label: 'Mobile Data', value: 'mobile_data' }
        ]
      },
      {
        label: 'Software Tools',
        value: 'software_tools',
        subOptions: [
          { label: 'Licensed Software', value: 'licensed_soft' },
          { label: 'Cloud Storage', value: 'cloud_storage' }
        ]
      }
    ]
  },
  {
    label: 'Social & Community Resources',
    value: 'social_resources',
    subOptions: [
      {
        label: 'Family & Friends',
        value: 'family_friends',
        subOptions: [
          { label: 'Peer Group Support', value: 'peer_support' },
          { label: 'Family Guidance', value: 'family_guidance' }
        ]
      },
      {
        label: 'Mentors',
        value: 'mentors',
        subOptions: [
          { label: 'Mentor Guidance', value: 'mentor_guidance' },
          { label: 'Alumni Network', value: 'alumni_network' }
        ]
      },
      {
        label: 'Community',
        value: 'community_resource',
        subOptions: [
          { label: 'NGO Assistance', value: 'ngo_help' },
          { label: 'Online Communities', value: 'online_communities' }
        ]
      }
    ]
  },
  {
    label: 'Professional Resources',
    value: 'professional_resources',
    subOptions: [
      {
        label: 'Work Experience',
        value: 'work_exp_resource',
        subOptions: [
          { label: 'Internship Certificate', value: 'internship_cert' },
          { label: 'Freelance Clients', value: 'freelance_clients' }
        ]
      },
      {
        label: 'Industry Connections',
        value: 'industry_connections',
        subOptions: [
          { label: 'LinkedIn Network', value: 'linkedin_network' }
        ]
      },
      {
        label: 'Career Services',
        value: 'career_services',
        subOptions: [
          { label: 'College Placement Cell', value: 'placement_cell' }
        ]
      }
    ]
  },
  {
    label: 'Physical Resources',
    value: 'physical_resources',
    subOptions: [
      {
        label: 'Workspace',
        value: 'workspace',
        subOptions: [
          { label: 'Personal Study Room', value: 'study_room' },
          { label: 'Coworking Space', value: 'coworking' }
        ]
      },
      {
        label: 'Equipment',
        value: 'equipment',
        subOptions: [
          { label: 'DSLR Camera', value: 'dslr' },
          { label: 'Musical Instrument', value: 'instrument' }
        ]
      },
      {
        label: 'Transport',
        value: 'transport_resource',
        subOptions: [
          { label: 'Vehicle for Travel', value: 'vehicle' }
        ]
      }
    ]
  },
  {
    label: 'Health & Wellness Resources',
    value: 'health_resources',
    subOptions: [
      {
        label: 'Healthcare',
        value: 'healthcare_resource',
        subOptions: [
          { label: 'Health Insurance Card', value: 'health_card' }
        ]
      },
      {
        label: 'Fitness',
        value: 'fitness_resource',
        subOptions: [
          { label: 'Gym Membership', value: 'gym_mem' },
          { label: 'Sports Club Access', value: 'sports_club' },
          { label: 'Yoga Trainer', value: 'yoga_trainer' }
        ]
      },
      { label: 'Nutrition', value: 'nutrition_resource' }
    ]
  }
];

// Re-export this for backward compatibility if needed, though we will remove usage
export const EDUCATION_SUB_OPTIONS = [];

export const CATEGORY_OPTIONS: Record<string, string[]> = {
  // All categories are now handled by hierarchical levels
  Skills: [],
  Hobbies: [],
  Interests: [],
  Activities: [],
  Spending: [],
  Resources: []
};
