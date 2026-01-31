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
      case 1: return <Star size={16} />;
      case 2: return <Zap size={16} />;
      case 3: return <Award size={16} />;
      case 4: return <Trophy size={16} />;
      default: return <Star size={16} />;
    }
  };

  return (
    <div className="mt-3 bg-white rounded-lg border border-gray-200 p-4 shadow-sm w-full">
      <div className="flex justify-between items-center mb-4 border-b pb-2">
        <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide">
          Proficiency Checklist
        </h4>
        <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border ${getLevelColor(levelNum)}`}>
          {getLevelIcon(levelNum)}
          <span>{levelLabel} ({percentage}%)</span>
        </div>
      </div>

      <div className="space-y-3">
        {details.map((group, idx) => {
          const isExpanded = expandedGroups.includes(group.category);
          const allChecked = group.items.length > 0 && group.items.every(i => selectedItems.includes(i));

          return (
            <div key={idx} className="border rounded-md border-gray-100 overflow-hidden">
              {/* Group Header - Dropdown Style */}
              <div
                className="flex items-center justify-between p-3 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors select-none"
                onClick={() => toggleGroupExpand(group.category)}
              >
                <div className="flex items-center gap-3">
                   <button
                     onClick={(e) => { e.stopPropagation(); toggleGroupSelect(group.items); }}
                     className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${allChecked ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-gray-300 text-transparent hover:border-blue-400'}`}
                     title={allChecked ? "Uncheck all in group" : "Check all in group"}
                   >
                     <Check size={14} />
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
                            cursor-pointer px-3 py-1.5 rounded text-sm border transition-all select-none flex items-center gap-2
                            ${isChecked
                              ? 'bg-blue-50 text-blue-700 border-blue-200'
                              : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                            }
                          `}
                        >
                          <input
                            type="checkbox"
                            className="hidden"
                            checked={isChecked}
                            onChange={() => toggleItem(item)}
                          />
                          {isChecked && <Check size={12} />}
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

      <p className="text-xs text-gray-400 mt-4 text-center">
        Tip: Use the checkbox next to category names to select all items.
      </p>
    </div>
  );
};

export default SkillDetailCard;
