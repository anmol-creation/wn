import React, { useState, useEffect, useMemo } from 'react';
import { getSkillDetails, getSkillLevel } from '../data/skillDetails';
import { Check, Star, Trophy, Award, Zap, ChevronDown, ChevronUp } from 'lucide-react';

interface Props {
  skillValue: string;
  skillLabel: string;
  initialSelectedItems?: string[];
  onUpdate: (score: number, level: number, selectedItems: string[]) => void;
}

const SkillDetailCard: React.FC<Props> = ({ skillValue, skillLabel, initialSelectedItems = [], onUpdate }) => {
  const details = useMemo(() => getSkillDetails(skillValue, skillLabel), [skillValue, skillLabel]);
  const [selectedItems, setSelectedItems] = useState<string[]>(initialSelectedItems);
  const [expandedGroups, setExpandedGroups] = useState<string[]>(details.map(g => g.category)); // All expanded by default
  const [isCardExpanded, setIsCardExpanded] = useState(false); // Card starts collapsed

  // Notify parent whenever selection changes
  useEffect(() => {
    const score = selectedItems.length;
    const totalItems = details.reduce((acc, group) => acc + group.items.length, 0);
    const { level } = getSkillLevel(score, totalItems, selectedItems, details);
    onUpdate(score, level, selectedItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItems, details]);

  const toggleItem = (item: string) => {
    setSelectedItems(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const toggleGroupExpand = (category: string) => {
    setExpandedGroups(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const toggleGroupSelect = (categoryItems: string[]) => {
    const allSelected = categoryItems.every(item => selectedItems.includes(item));

    if (allSelected) {
      // Uncheck all
      setSelectedItems(prev => prev.filter(item => !categoryItems.includes(item)));
    } else {
      // Check all (add missing ones)
      setSelectedItems(prev => {
        const newItems = [...prev];
        categoryItems.forEach(item => {
          if (!newItems.includes(item)) newItems.push(item);
        });
        return newItems;
      });
    }
  };

  const currentScore = selectedItems.length;
  const totalItems = details.reduce((acc, group) => acc + group.items.length, 0);
  const { label: levelLabel, level: levelNum, percentage } = getSkillLevel(currentScore, totalItems, selectedItems, details);

  const getLevelColor = (level: number) => {
    switch(level) {
      case 1: return 'bg-blue-100 text-blue-700 border-blue-200';
      case 2: return 'bg-green-100 text-green-700 border-green-200';
      case 3: return 'bg-purple-100 text-purple-700 border-purple-200';
      case 4: return 'bg-amber-100 text-amber-700 border-amber-200';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getLevelIcon = (level: number) => {
    switch(level) {
      case 1: return <Star size={14} />;
      case 2: return <Zap size={14} />;
      case 3: return <Award size={14} />;
      case 4: return <Trophy size={14} />;
      default: return <Star size={14} />;
    }
  };

  return (
    <div className="mt-3 bg-white rounded-lg border border-gray-200 shadow-sm w-full overflow-hidden transition-all duration-300">
      {/* Card Header - Click to Expand/Collapse */}
      <div
        className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors select-none bg-white"
        onClick={() => setIsCardExpanded(!isCardExpanded)}
      >
        <div className="flex items-center gap-4 flex-wrap">
           <h4 className="text-lg font-bold text-gray-800">{skillLabel}</h4>

           {/* Level Badge */}
           <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold border ${getLevelColor(levelNum)}`}>
             {getLevelIcon(levelNum)}
             <span>{levelLabel} ({percentage}%)</span>
           </div>
        </div>

        <div className="text-gray-400 p-1 rounded-full hover:bg-gray-100 transition-colors">
           {isCardExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </div>

      {/* Expandable Content (Checklist) */}
      {isCardExpanded && (
        <div className="p-4 border-t border-gray-100 bg-gray-50/50">
          <p className="text-xs text-gray-500 mb-4 font-medium uppercase tracking-wider">
            Proficiency Checklist
          </p>
          <div className="space-y-3">
            {details.map((group, idx) => {
              const isExpanded = expandedGroups.includes(group.category);
              const allChecked = group.items.length > 0 && group.items.every(i => selectedItems.includes(i));

              return (
                <div key={idx} className="border rounded-lg border-gray-200 bg-white overflow-hidden shadow-sm">
                  {/* Group Header - Dropdown Style */}
                  <div
                    className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50 transition-colors select-none border-b border-transparent hover:border-gray-100"
                    onClick={() => toggleGroupExpand(group.category)}
                  >
                    <div className="flex items-center gap-3">
                       {/* Group Select All Checkbox */}
                       <button
                         onClick={(e) => { e.stopPropagation(); toggleGroupSelect(group.items); }}
                         className={`
                           w-5 h-5 rounded border flex items-center justify-center transition-all duration-200
                           ${allChecked ? 'bg-blue-600 border-blue-600 text-white shadow-sm' : 'bg-gray-50 border-gray-300 text-transparent hover:border-blue-400'}
                         `}
                         title={allChecked ? "Uncheck all in group" : "Check all in group"}
                       >
                         <Check size={14} strokeWidth={3} />
                       </button>
                       <span className="font-semibold text-gray-700 text-sm">{group.category}</span>
                    </div>
                    <div className="text-gray-400">
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </div>

                  {/* Group Content */}
                  {isExpanded && (
                    <div className="p-3 bg-white border-t border-gray-100">
                      <div className="flex flex-wrap gap-2">
                        {group.items.map(item => {
                          const isChecked = selectedItems.includes(item);
                          return (
                            <label
                              key={item}
                              className={`
                                cursor-pointer px-3 py-1.5 rounded-md text-sm border transition-all select-none flex items-center gap-2 font-medium
                                ${isChecked
                                  ? 'bg-blue-50 text-blue-700 border-blue-200 shadow-sm'
                                  : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-white hover:border-gray-300'
                                }
                              `}
                            >
                              <input
                                type="checkbox"
                                className="hidden"
                                checked={isChecked}
                                onChange={() => toggleItem(item)}
                              />
                              {isChecked && <Check size={14} className="text-blue-600" />}
                              {item}
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillDetailCard;
