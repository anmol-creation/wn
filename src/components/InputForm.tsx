import React, { useState } from 'react';
import { CATEGORIES } from '../data/rules';
import { CATEGORY_OPTIONS, EDUCATION_LEVELS, SKILL_LEVELS, HOBBY_LEVELS, INTEREST_LEVELS, type HierarchicalOption } from '../data/options';
import { type UserProfile } from '../utils/analyzer';
import { Search, ArrowRight, ChevronLeft, Check, ChevronDown, ChevronUp } from 'lucide-react';

interface Props {
  onAnalyze: (profile: UserProfile) => void;
}

const InputForm: React.FC<Props> = ({ onAnalyze }) => {
  const [userName, setUserName] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  // Store expanded item labels (unique enough for UI state)
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  // Initialize empty profile
  const [profile, setProfile] = useState<UserProfile>(
    CATEGORIES.reduce((acc, cat) => ({
      ...acc,
      [cat]: []
    }), {} as UserProfile)
  );

  const currentCategory = CATEGORIES[currentCategoryIndex];

  // Logic to toggle items
  const toggleItem = (text: string, level: number = 1) => {
    setProfile(prev => {
      const currentList = prev[currentCategory];
      const exists = currentList.find(item => item.text === text);
      if (exists) {
        return {
          ...prev,
          [currentCategory]: currentList.filter(item => item.text !== text)
        };
      } else {
        return {
          ...prev,
          [currentCategory]: [
            ...currentList,
            { id: `${currentCategory}-${text}`, text, level }
          ]
        };
      }
    });
  };

  const isSelected = (text: string) => {
    return profile[currentCategory].some(item => item.text === text);
  };

  const toggleExpand = (label: string) => {
    setExpandedItems(prev =>
      prev.includes(label)
        ? prev.filter(l => l !== label)
        : [...prev, label]
    );
  };

  const handleNext = () => {
    if (currentCategoryIndex < CATEGORIES.length - 1) {
      setCurrentCategoryIndex(prev => prev + 1);
      setSearchTerm('');
      setExpandedItems([]); // Reset expansion on next step
    } else {
      onAnalyze(profile);
    }
  };

  const handleBack = () => {
    if (currentCategoryIndex > 0) {
      setCurrentCategoryIndex(prev => prev - 1);
      setSearchTerm('');
      setExpandedItems([]);
    }
  };

  const handleStart = () => {
    if (userName.trim()) {
      setHasStarted(true);
    }
  };

  // Helper to check if an option or its children match the search term
  const matchesSearch = (option: HierarchicalOption): boolean => {
    if (!searchTerm) return true;
    if (option.label.toLowerCase().includes(searchTerm.toLowerCase())) return true;
    return option.subOptions?.some(sub => matchesSearch(sub)) || false;
  };

  // Recursive renderer for Hierarchical options
  const renderHierarchicalOption = (option: HierarchicalOption, depth = 0) => {
    // If searching, only render if it matches or has matching children
    if (!matchesSearch(option)) return null;

    const hasSub = option.subOptions && option.subOptions.length > 0;
    const isExpanded = expandedItems.includes(option.label) || searchTerm.length > 0; // Auto-expand on search
    const selected = isSelected(option.label);

    return (
      <div key={option.value} className={`mb-2 ${depth > 0 ? 'ml-6 border-l-2 border-gray-100 pl-4' : ''}`}>
        <div className={`
            flex items-center justify-between p-3 rounded-lg border transition-all
            ${selected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:border-blue-300'}
        `}>
           <label className="flex items-center gap-3 cursor-pointer flex-grow">
              <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${selected ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}>
                 {selected && <Check size={14} className="text-white" />}
              </div>
              <input
                type="checkbox"
                className="hidden"
                checked={selected}
                onChange={() => toggleItem(option.label)}
              />
              <span className="text-gray-700 font-medium">{option.label}</span>
           </label>

           {hasSub && (
             <button
               onClick={(e) => {
                 e.preventDefault(); // Prevent checkbox toggle
                 toggleExpand(option.label);
               }}
               className="p-1 hover:bg-gray-100 rounded text-gray-500"
             >
               {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
             </button>
           )}
        </div>

        {/* Render Children */}
        {hasSub && isExpanded && (
          <div className="mt-2">
            {option.subOptions!.map(sub => renderHierarchicalOption(sub, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  // Welcome Screen
  if (!hasStarted) {
    return (
      <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg text-center mt-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Welcome to WhatNext</h2>
        <p className="text-gray-600 mb-8">
          Let's find your path to success. First, what should we call you?
        </p>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Your Full Name"
          className="w-full p-4 mb-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-lg text-center"
          onKeyDown={(e) => e.key === 'Enter' && handleStart()}
        />
        <button
          onClick={handleStart}
          disabled={!userName.trim()}
          className="w-full py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Get Started
        </button>
      </div>
    );
  }

  // Render Category Options
  const renderOptions = () => {
    // Check for hierarchical data
    let hierarchicalData: HierarchicalOption[] | null = null;

    if (currentCategory === 'Education') {
      hierarchicalData = EDUCATION_LEVELS;
    } else if (currentCategory === 'Skills') {
      hierarchicalData = SKILL_LEVELS;
    } else if (currentCategory === 'Hobbies') {
      hierarchicalData = HOBBY_LEVELS;
    } else if (currentCategory === 'Interests') {
      hierarchicalData = INTEREST_LEVELS;
    }

    if (hierarchicalData) {
      return (
        <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
          {hierarchicalData.map(level => renderHierarchicalOption(level))}
          {/* Show message if search yields no results */}
          {searchTerm && !hierarchicalData.some(matchesSearch) && (
             <p className="text-center text-gray-500 py-4">No options found.</p>
          )}
        </div>
      );
    }

    // Generic Categories
    const options = CATEGORY_OPTIONS[currentCategory] || [];
    const filteredOptions = options.filter(opt =>
      opt.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-96 overflow-y-auto p-1 custom-scrollbar">
        {filteredOptions.length > 0 ? (
          filteredOptions.map(opt => (
            <label key={opt} className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all ${isSelected(opt) ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300 hover:shadow-sm'}`}>
              <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${isSelected(opt) ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}>
                 {isSelected(opt) && <Check size={14} className="text-white" />}
              </div>
              <input
                type="checkbox"
                className="hidden"
                checked={isSelected(opt)}
                onChange={() => toggleItem(opt)}
              />
              <span className="text-gray-700">{opt}</span>
            </label>
          ))
        ) : (
          <p className="col-span-2 text-center text-gray-500 py-4">No options found. Try searching for something else.</p>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg min-h-[600px] flex flex-col">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-500 mb-2 font-medium">
          <span>Step {currentCategoryIndex + 1} of {CATEGORIES.length}</span>
          <span>{Math.round(((currentCategoryIndex + 1) / CATEGORIES.length) * 100)}% Completed</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((currentCategoryIndex + 1) / CATEGORIES.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
           {currentCategory === 'Education' ? `Hi ${userName}, let's start with your Education` : currentCategory}
        </h2>
        <p className="text-gray-600">
          Select all that apply to you.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={`Search ${currentCategory}...`}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Options List */}
      <div className="flex-grow mb-8 overflow-hidden flex flex-col">
        {renderOptions()}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-auto pt-6 border-t border-gray-100">
        <button
          onClick={handleBack}
          disabled={currentCategoryIndex === 0}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
            currentCategoryIndex === 0
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <ChevronLeft size={20} />
          Back
        </button>

        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg font-medium"
        >
          {currentCategoryIndex === CATEGORIES.length - 1 ? 'Analyze Profile' : 'Next Step'}
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default InputForm;
