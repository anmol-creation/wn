export interface EducationOption {
  label: string;
  value: string;
  subOptions?: EducationOption[];
}

export const EDUCATION_LEVELS: EducationOption[] = [
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

// Re-export this for backward compatibility if needed, though we will remove usage
export const EDUCATION_SUB_OPTIONS = [];

export const CATEGORY_OPTIONS: Record<string, string[]> = {
  Skills: [
    'Coding', 'Programming', 'Web Design', 'JavaScript', 'React', 'HTML', 'CSS',
    'Video Editing', 'Storytelling', 'Public Speaking', 'Content Creation', 'Filmmaking',
    'Writing', 'Creative Writing', 'Copywriting', 'Marketing', 'English', 'Blogging',
    'Teaching', 'Math', 'Science', 'Languages', 'Academic Tutoring',
    'Drawing', 'Art', 'Graphic Design', 'Photoshop', 'Illustrator', 'Canva',
    'Social Media Management', 'SEO', 'Data Analytics', 'Facebook Ads',
    'Fitness Training', 'Sports Coaching', 'Nutrition Planning',
    'Photography', 'Photo Editing', 'Project Management', 'Communication',
    'Problem Solving', 'Teamwork', 'Leadership', 'Time Management', 'Sales',
    'Customer Service', 'Accounting', 'Financial Analysis'
  ],
  Hobbies: [
    'Playing Guitar', 'Playing Piano', 'Singing', 'Music Production',
    'Drawing', 'Painting', 'Sketching', 'Digital Art',
    'Photography', 'Videography', 'Travel', 'Blogging',
    'Reading', 'Writing', 'Gaming', 'Cooking', 'Baking',
    'Gardening', 'DIY & Crafts', 'Knitting', 'Sewing',
    'Hiking', 'Camping', 'Fishing', 'Cycling', 'Running',
    'Yoga', 'Meditation', 'Dancing', 'Acting',
    'Volunteering', 'Mentoring', 'Collecting', 'Chess',
    'Puzzle Solving', 'Learning Languages', 'Coding for Fun'
  ],
  Interests: [
    'Artificial Intelligence', 'Machine Learning', 'Blockchain', 'Crypto',
    'Web Development', 'Software Engineering', 'Game Development',
    'Digital Marketing', 'Entrepreneurship', 'Startups', 'Business',
    'Finance', 'Investing', 'Stock Market', 'Economics',
    'Psychology', 'Philosophy', 'History', 'Politics',
    'Science', 'Astronomy', 'Physics', 'Biology', 'Chemistry',
    'Environmental Science', 'Sustainability', 'Climate Change',
    'Health & Wellness', 'Fitness', 'Nutrition', 'Mental Health',
    'Fashion', 'Design', 'Architecture', 'Interior Design',
    'Film', 'Music', 'Literature', 'Art History'
  ],
  Activities: [
    'Volunteering', 'Community Service', 'Charity Work',
    'Team Sports', 'Individual Sports', 'Gym', 'Fitness Classes',
    'Gaming', 'Esports', 'Streaming',
    'Reading', 'Book Clubs', 'Library Visits',
    'Traveling', 'Backpacking', 'Road Trips',
    'Socializing', 'Networking', 'Attending Events', 'Conferences',
    'Workshops', 'Seminars', 'Hackathons',
    'Mentoring', 'Teaching', 'Tutoring',
    'Organizing Events', 'Planning Trips', 'Photography Walks'
  ],
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
