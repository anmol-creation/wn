
import React, { useState } from 'react';
import { CATEGORIES, type Category, SKILL_LEVELS } from '../data/rules';
import { type UserProfile, type UserInputItem } from '../utils/analyzer';
import { Plus, Trash2, ArrowRight } from 'lucide-react';

interface Props {
  onAnalyze: (profile: UserProfile) => void;
}

const InputForm: React.FC<Props> = ({ onAnalyze }) => {
  // Initialize state with one empty item for each category
  const [profile, setProfile] = useState<UserProfile>(
    CATEGORIES.reduce((acc, cat) => ({
      ...acc,
      [cat]: [{ id: `init-${cat}`, text: '', level: 1 }]
    }), {} as UserProfile)
  );

  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const currentCategory = CATEGORIES[currentCategoryIndex];

  // Helper to add a new item to the current category
  const addItem = () => {
    const newItem: UserInputItem = {
      id: Date.now().toString(),
      text: '',
      level: 1
    };
    setProfile(prev => ({
      ...prev,
      [currentCategory]: [...prev[currentCategory], newItem]
    }));
  };

  // Helper to update an item
  const updateItem = (id: string, field: keyof UserInputItem, value: any) => {
    setProfile(prev => ({
      ...prev,
      [currentCategory]: prev[currentCategory].map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    }));
  };

  // Helper to remove an item
  const removeItem = (id: string) => {
    setProfile(prev => ({
      ...prev,
      [currentCategory]: prev[currentCategory].filter(item => item.id !== id)
    }));
  };

  const handleNext = () => {
    if (currentCategoryIndex < CATEGORIES.length - 1) {
      setCurrentCategoryIndex(prev => prev + 1);
    } else {
      onAnalyze(profile);
    }
  };

  const handleBack = () => {
    if (currentCategoryIndex > 0) {
      setCurrentCategoryIndex(prev => prev - 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Step {currentCategoryIndex + 1} of {CATEGORIES.length}</span>
          <span>{Math.round(((currentCategoryIndex + 1) / CATEGORIES.length) * 100)}% Completed</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${((currentCategoryIndex + 1) / CATEGORIES.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-2 text-gray-800">{currentCategory}</h2>
      <p className="text-gray-600 mb-6">
        List your {currentCategory.toLowerCase()}. Be specific!
      </p>

      <div className="space-y-4 mb-8">
        {profile[currentCategory].map((item, index) => (
          <div key={item.id} className="flex gap-2 items-center">
            <input
              type="text"
              value={item.text}
              onChange={(e) => updateItem(item.id, 'text', e.target.value)}
              placeholder={`e.g., ${getPlaceholder(currentCategory)}`}
              className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              autoFocus={index === profile[currentCategory].length - 1}
            />

            {/* Show level selector for relevant categories */}
            {['Skills', 'Hobbies', 'Education'].includes(currentCategory) && (
              <select
                value={item.level}
                onChange={(e) => updateItem(item.id, 'level', parseInt(e.target.value))}
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value={SKILL_LEVELS.Beginner}>Beginner</option>
                <option value={SKILL_LEVELS.Intermediate}>Intermediate</option>
                <option value={SKILL_LEVELS.Advanced}>Advanced</option>
              </select>
            )}

            <button
              onClick={() => removeItem(item.id)}
              className="p-2 text-red-500 hover:bg-red-50 rounded-full"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}

        <button
          onClick={addItem}
          className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors"
        >
          <Plus size={20} />
          Add Item
        </button>
      </div>

      <div className="flex justify-between mt-8 pt-4 border-t">
        <button
          onClick={handleBack}
          disabled={currentCategoryIndex === 0}
          className={`px-4 py-2 rounded-lg font-medium ${
            currentCategoryIndex === 0
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Back
        </button>

        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
        >
          {currentCategoryIndex === CATEGORIES.length - 1 ? 'Analyze Profile' : 'Next'}
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

function getPlaceholder(category: Category): string {
  switch (category) {
    case 'Education': return 'BSc Computer Science';
    case 'Skills': return 'Python Programming';
    case 'Hobbies': return 'Playing Guitar';
    case 'Interests': return 'Artificial Intelligence';
    case 'Activities': return 'Volunteering';
    case 'Spending': return 'Online Courses';
    case 'Resources': return 'High-end PC';
    default: return '';
  }
}

export default InputForm;
