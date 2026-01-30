export interface HierarchicalOption {
  label: string;
  value: string;
  subOptions?: HierarchicalOption[];
}

// Kept for backward compatibility if any imports exist, but aliased
export type EducationOption = HierarchicalOption;

export const EDUCATION_LEVELS: HierarchicalOption[] = [
  {
    label: 'Below 12th',
    value: 'below_12th',
    subOptions: [
      { label: '11th Pass', value: '11th_pass' },
      { label: '10th Pass', value: '10th_pass' },
      { label: '9th Pass', value: '9th_pass' },
      { label: '8th Pass', value: '8th_pass' },
      { label: '7th Pass', value: '7th_pass' },
      { label: '6th Pass', value: '6th_pass' },
      { label: '5th Pass', value: '5th_pass' },
      { label: 'None', value: 'none' }
    ]
  },
  {
    label: '12th Pass',
    value: '12th_pass',
    subOptions: [
      {
        label: 'Stream',
        value: 'stream',
        subOptions: [
          { label: 'Science (PCM)', value: 'science_pcm' },
          { label: 'Science (PCB)', value: 'science_pcb' },
          { label: 'Commerce', value: 'commerce' },
          { label: 'Arts/Humanities', value: 'arts' },
          { label: 'Vocational', value: 'vocational' }
        ]
      },
      {
        label: 'Board / Medium',
        value: 'board_medium',
        subOptions: [
          { label: 'CBSE', value: 'cbse' },
          { label: 'ICSE', value: 'icse' },
          { label: 'State Board', value: 'state_board' },
          { label: 'UP Board', value: 'up_board' },
          { label: 'English Medium', value: 'english_medium' },
          { label: 'Hindi Medium', value: 'hindi_medium' }
        ]
      }
    ]
  },
  {
    label: 'Common Degrees',
    value: 'common_degrees',
    subOptions: [
      { label: 'Diploma', value: 'diploma' },
      { label: 'Certificate Courses', value: 'certificate' },
      { label: 'Associate Degree', value: 'associate' },
      { label: 'BA (Bachelor of Arts)', value: 'ba' },
      { label: 'B.Sc (Bachelor of Science)', value: 'bsc' },
      { label: 'B.Com (Bachelor of Commerce)', value: 'bcom' },
      { label: 'MA (Master of Arts)', value: 'ma' },
      { label: 'M.Sc (Master of Science)', value: 'msc' },
      { label: 'M.Com (Master of Commerce)', value: 'mcom' },
      { label: 'Doctorate (Ph.D., D.Litt., D.Sc.)', value: 'doctorate' }
    ]
  },
  {
    label: 'Main Categories (Fields of Study)',
    value: 'main_categories',
    subOptions: [
      {
        label: 'Engineering & Technology',
        value: 'engineering',
        subOptions: [
           { label: 'B.Tech / B.E.', value: 'btech' },
           { label: 'M.Tech / M.E.', value: 'mtech' },
           { label: 'Computer Science', value: 'cse' },
           { label: 'Mechanical', value: 'mechanical' },
           { label: 'Civil', value: 'civil' },
           { label: 'Electrical / Electronics', value: 'electrical' }
        ]
      },
      {
        label: 'Medical & Health Sciences',
        value: 'medical',
        subOptions: [
          { label: 'MBBS', value: 'mbbs' },
          { label: 'BDS (Dental)', value: 'bds' },
          { label: 'BAMS (Ayurveda)', value: 'bams' },
          { label: 'Nursing (B.Sc / GNM)', value: 'nursing' },
          { label: 'Pharmacy (B.Pharma / M.Pharma)', value: 'pharmacy' }
        ]
      },
      {
        label: 'Commerce & Management',
        value: 'management',
        subOptions: [
          { label: 'B.Com', value: 'bcom_gen' },
          { label: 'BBA', value: 'bba' },
          { label: 'MBA', value: 'mba' },
          { label: 'CA (Chartered Accountant)', value: 'ca' },
          { label: 'CS (Company Secretary)', value: 'cs' },
          { label: 'CMA (Cost Management Accountant)', value: 'cma' }
        ]
      },
      {
        label: 'Arts, Humanities & Social Sciences',
        value: 'humanities',
        subOptions: [
          { label: 'BA Specializations', value: 'ba_spec' },
          { label: 'Fine Arts (BFA)', value: 'bfa' },
          { label: 'Performing Arts', value: 'performing_arts' },
          { label: 'Social Work (BSW / MSW)', value: 'social_work' }
        ]
      },
      {
        label: 'Science',
        value: 'science_field',
        subOptions: [
          { label: 'B.Sc Specializations', value: 'bsc_spec' },
          { label: 'M.Sc Specializations', value: 'msc_spec' }
        ]
      },
      {
        label: 'Law',
        value: 'law',
        subOptions: [
          { label: 'LLB', value: 'llb' },
          { label: 'LLM', value: 'llm' },
          { label: 'Legal Diplomas', value: 'law_diploma' }
        ]
      },
      {
        label: 'Education',
        value: 'education_field',
        subOptions: [
          { label: 'B.Ed', value: 'bed' },
          { label: 'M.Ed', value: 'med' },
          { label: 'D.Ed', value: 'ded' }
        ]
      },
      {
        label: 'Agriculture & Allied',
        value: 'agriculture',
        subOptions: [
          { label: 'B.Sc Agriculture', value: 'bsc_agri' },
          { label: 'Veterinary Science', value: 'veterinary' },
          { label: 'Forestry', value: 'forestry' },
          { label: 'Food Technology', value: 'food_tech' }
        ]
      },
      {
        label: 'Design, Fashion & Architecture',
        value: 'design',
        subOptions: [
          { label: 'B.Arch', value: 'barch' },
          { label: 'B.Des', value: 'bdes' },
          { label: 'Fashion Design', value: 'fashion_design' },
          { label: 'Interior Design', value: 'interior_design' }
        ]
      },
      {
        label: 'Computer Applications & IT',
        value: 'it',
        subOptions: [
          { label: 'BCA', value: 'bca' },
          { label: 'MCA', value: 'mca' },
          { label: 'B.Sc IT', value: 'bsc_it' },
          { label: 'M.Sc IT', value: 'msc_it' }
        ]
      },
      {
        label: 'Hospitality, Tourism & Culinary',
        value: 'hospitality',
        subOptions: [
          { label: 'Hotel Management', value: 'hotel_mgmt' },
          { label: 'Travel & Tourism', value: 'tourism' },
          { label: 'Culinary Arts', value: 'culinary' }
        ]
      },
      {
        label: 'Mass Communication & Media',
        value: 'media',
        subOptions: [
          { label: 'Journalism', value: 'journalism' },
          { label: 'Mass Communication', value: 'mass_comm' },
          { label: 'Film Studies', value: 'film' },
          { label: 'Animation & VFX', value: 'animation' },
          { label: 'Digital Media', value: 'digital_media' }
        ]
      }
    ]
  }
];

export const SKILL_LEVELS: HierarchicalOption[] = [
  {
    label: 'Digital & Tech Skills',
    value: 'digital_tech',
    subOptions: [
      {
        label: 'Web Development',
        value: 'web_dev',
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
        subOptions: [
          { label: 'Python', value: 'python' },
          { label: 'R', value: 'r_lang' },
          { label: 'SQL', value: 'sql' },
          { label: 'Tableau', value: 'tableau' },
          { label: 'Power BI', value: 'powerbi' },
          { label: 'Machine Learning', value: 'ml' }
        ]
      },
      { label: 'Cybersecurity', value: 'cybersecurity', subOptions: [
          { label: 'Ethical Hacking', value: 'ethical_hacking' },
          { label: 'Network Security', value: 'network_sec' }
      ]},
      { label: 'Cloud Computing', value: 'cloud', subOptions: [
          { label: 'AWS', value: 'aws' },
          { label: 'Azure', value: 'azure' },
          { label: 'Google Cloud', value: 'gcp' }
      ]}
    ]
  },
  {
    label: 'Creative & Media Skills',
    value: 'creative_media',
    subOptions: [
      {
        label: 'Video Editing',
        value: 'video_editing',
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
        subOptions: [
          { label: 'Copywriting', value: 'copywriting' },
          { label: 'Storytelling', value: 'storytelling' },
          { label: 'Scriptwriting', value: 'scriptwriting' },
          { label: 'Blogging', value: 'blogging' }
        ]
      },
      { label: 'Animation', value: 'animation', subOptions: [
          { label: 'After Effects', value: 'after_effects' },
          { label: 'Blender', value: 'blender' },
          { label: 'Maya', value: 'maya' }
      ]}
    ]
  },
  {
    label: 'Business & Management Skills',
    value: 'business',
    subOptions: [
      {
        label: 'Marketing',
        value: 'marketing',
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
        subOptions: [
          { label: 'Accounting', value: 'accounting' },
          { label: 'Bookkeeping', value: 'bookkeeping' },
          { label: 'Investing', value: 'investing' },
          { label: 'Stock Trading', value: 'trading' }
        ]
      },
      { label: 'Project Management', value: 'pm', subOptions: [
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
    subOptions: [
      {
        label: 'Drawing / Painting',
        value: 'drawing_painting',
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
        subOptions: [
          { label: 'Knitting/Sewing', value: 'knitting' },
          { label: 'Origami', value: 'origami' },
          { label: 'Woodworking', value: 'woodworking' }
        ]
      },
      {
        label: 'Photography',
        value: 'photography',
        subOptions: [
          { label: 'Nature Photography', value: 'nature_photo' },
          { label: 'Portrait Photography', value: 'portrait_photo' },
          { label: 'Street Photography', value: 'street_photo' }
        ]
      },
      {
        label: 'Writing',
        value: 'writing_hobby',
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
    subOptions: [
      {
        label: 'Music',
        value: 'music_hobby',
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
        subOptions: [
          { label: 'Hip Hop', value: 'hiphop' },
          { label: 'Classical', value: 'classical_dance' },
          { label: 'Salsa', value: 'salsa' }
        ]
      },
      {
        label: 'Acting / Theatre',
        value: 'acting_hobby',
        subOptions: [
          { label: 'Drama', value: 'drama' },
          { label: 'Stand-up Comedy', value: 'comedy' },
          { label: 'Mimicry', value: 'mimicry' }
        ]
      },
      {
        label: 'Gaming',
        value: 'gaming',
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
    subOptions: [
      {
        label: 'Traveling',
        value: 'traveling',
        subOptions: [
          { label: 'Backpacking', value: 'backpacking' },
          { label: 'Road Trips', value: 'road_trips' },
          { label: 'Solo Travel', value: 'solo_travel' }
        ]
      },
      {
        label: 'Trekking / Hiking',
        value: 'trekking',
        subOptions: [
          { label: 'Mountain Trekking', value: 'mountain_trek' },
          { label: 'Forest Hiking', value: 'forest_hike' }
        ]
      },
      { label: 'Camping', value: 'camping' },
      {
        label: 'Sports',
        value: 'sports_hobby',
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
    subOptions: [
      {
        label: 'Cooking',
        value: 'cooking_hobby',
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
    subOptions: [
      {
        label: 'Blogging',
        value: 'blogging_hobby',
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
    subOptions: [
      {
        label: 'Yoga & Meditation',
        value: 'yoga_hobby',
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
    subOptions: [
      {
        label: 'Science',
        value: 'science_interest',
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
    subOptions: [
      {
        label: 'Computers & IT',
        value: 'computers_it',
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
    subOptions: [
      { label: 'Entrepreneurship', value: 'entrepreneurship_interest' },
      { label: 'Marketing', value: 'marketing_interest' },
      {
        label: 'Finance',
        value: 'finance_interest',
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
    subOptions: [
      {
        label: 'Visual Arts',
        value: 'visual_arts',
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
    subOptions: [
      {
        label: 'Food',
        value: 'food_interest',
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
    subOptions: [
      {
        label: 'Volunteering',
        value: 'volunteering_interest',
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
    subOptions: [
      {
        label: 'Movies',
        value: 'movies_interest',
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
    subOptions: [
      {
        label: 'Team Sports',
        value: 'team_sports',
        subOptions: [
          { label: 'Cricket', value: 'cricket_interest' },
          { label: 'Football', value: 'football_interest' }
        ]
      },
      {
        label: 'Individual Sports',
        value: 'individual_sports',
        subOptions: [
          { label: 'Badminton', value: 'badminton_interest' },
          { label: 'Swimming', value: 'swimming' }
        ]
      },
      {
        label: 'Adventure',
        value: 'adventure_sports',
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

// Re-export this for backward compatibility if needed, though we will remove usage
export const EDUCATION_SUB_OPTIONS = [];

export const CATEGORY_OPTIONS: Record<string, string[]> = {
  // Skills, Hobbies, Interests, and Activities are now handled by SKILL_LEVELS, HOBBY_LEVELS, INTEREST_LEVELS, and ACTIVITY_LEVELS
  Skills: [],
  Hobbies: [],
  Interests: [],
  Activities: [],

  Spending: [
    'Online Courses', 'Workshops', 'Seminars', 'Certifications',
    'Books', 'E-books', 'Audiobooks', 'Magazines',
    'Gadgets', 'Tech Gear', 'Software Subscriptions', 'Apps',
    'Travel', 'Flights', 'Accommodation', 'Experiences',
    'Food', 'Dining Out', 'Cooking Ingredients',
    'Entertainment', 'Movies', 'Concerts', 'Netflix', 'Spotify',
    'Gaming', 'In-game Purchases', 'Consoles', 'PC Parts',
    'Health', 'Gym Membership', 'Supplements', 'Sports Gear',
    'Fashion', 'Clothing', 'Accessories',
    'Art Supplies', 'Music Instruments', 'Camera Gear'
  ],
  Resources: [
    'Laptop', 'Desktop PC', 'High-end PC', 'MacBook',
    'Smartphone', 'Tablet', 'iPad',
    'Camera', 'DSLR', 'Mirrorless Camera', 'Action Camera',
    'Microphone', 'Studio Light', 'Green Screen',
    'Internet Connection', 'High-speed WiFi', 'Mobile Data',
    'Vehicle', 'Car', 'Bike', 'Bicycle',
    'Quiet Workspace', 'Home Office', 'Studio Space',
    'Tools', 'Workshop', 'Art Supplies',
    'Savings', 'Budget for Ads', 'Network of Contacts'
  ]
};
