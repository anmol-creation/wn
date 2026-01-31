
export const HOBBY_MONETIZATION: Record<string, number> = {
  // Creative
  'sketching': 60,
  'watercolor': 70,
  'oil_painting': 80,
  'digital_art': 90,
  'knitting': 50,
  'origami': 30,
  'woodworking': 85,
  'nature_photo': 75,
  'portrait_photo': 95,
  'street_photo': 65,
  'poetry': 40,
  'journaling': 30,
  'short_stories': 60,

  // Performance
  'singing': 80,
  'guitar': 75,
  'piano': 75,
  'drums': 70,
  'dj': 85,
  'hiphop': 70,
  'classical_dance': 65,
  'salsa': 60,
  'drama': 65,
  'comedy': 90,
  'mimicry': 80,
  'pc_gaming': 85,
  'console_gaming': 80,
  'mobile_gaming': 75,

  // Outdoor
  'backpacking': 50,
  'road_trips': 55,
  'solo_travel': 60,
  'mountain_trek': 45,
  'forest_hike': 40,
  'camping': 40,
  'cricket': 50,
  'football': 50,
  'badminton': 45,
  'basketball': 45,
  'athletics': 40,

  // Lifestyle
  'baking': 85,
  'indian_cuisine': 80,
  'continental': 80,
  'street_food': 75,
  'gardening': 50,
  'reading': 30,
  'collecting': 40,

  // Tech
  'personal_blog': 70,
  'tech_blog': 85,
  'travel_blog': 80,
  'social_media': 90,
  'coding_fun': 95,
  'video_creation': 95,

  // Wellness
  'asanas': 70,
  'breathing': 60,
  'mindfulness': 65,
  'fitness_hobby': 75,
  'puzzles': 20,
  'board_games': 30
};

export const getHobbyPotential = (hobbyValue: string): number => {
  return HOBBY_MONETIZATION[hobbyValue] || 40; // Default low-medium potential
};
