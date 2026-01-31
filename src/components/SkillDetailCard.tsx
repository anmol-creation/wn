import React, { useState, useEffect, useMemo } from 'react';
import { getSkillDetails, getSkillLevel } from '../data/skillDetails';
import { Check, Star, Trophy, Award, Zap } from 'lucide-react';

interface Props {
  skillValue: string;
  skillLabel: string;
  initialSelectedItems?: string[];
  onUpdate: (score: number, level: number, selectedItems: string[]) => void;
}

const SkillDetailCard: React.FC<Props> = ({ skillValue, skillLabel, initialSelectedItems = [], onUpdate }) => {
  const details = useMemo(() => getSkillDetails(skillValue, skillLabel), [skillValue, skillLabel]);
  const [selectedItems, setSelectedItems] = useState<string[]>(initialSelectedItems);

  // Notify parent whenever selection changes
  useEffect(() => {
    const score = selectedItems.length;
    const { level } = getSkillLevel(score);
    onUpdate(score, level, selectedItems);
  }, [selectedItems, onUpdate]);

  const toggleItem = (item: string) => {
    setSelectedItems(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const currentScore = selectedItems.length;
  const { label: levelLabel, level: levelNum } = getSkillLevel(currentScore);

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
    <div className="mt-3 ml-1 bg-gray-50 rounded-lg border border-gray-200 p-4 shadow-inner">
      <div className="flex justify-between items-center mb-4 border-b pb-2">
        <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide">
          Proficiency Checklist
        </h4>
        <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border ${getLevelColor(levelNum)}`}>
          {getLevelIcon(levelNum)}
          <span>{levelLabel} ({currentScore} pts)</span>
        </div>
      </div>

      <div className="space-y-4">
        {details.map((group, idx) => (
          <div key={idx}>
            <h5 className="text-xs font-semibold text-gray-500 mb-2 uppercase">{group.category}</h5>
            <div className="flex flex-wrap gap-2">
              {group.items.map(item => {
                const isChecked = selectedItems.includes(item);
                return (
                  <label
                    key={item}
                    className={`
                      cursor-pointer px-3 py-1.5 rounded text-sm border transition-all select-none flex items-center gap-2
                      ${isChecked
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
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
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-4 text-center">
        Select all that apply to calculate your accurate skill level.
      </p>
    </div>
  );
};

export default SkillDetailCard;
