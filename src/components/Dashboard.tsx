
import React from 'react';
import type { AnalysisResult, MatchedPathway } from '../utils/analyzer';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { AlertTriangle, DollarSign, Clock, BarChart } from 'lucide-react';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface Props {
  results: AnalysisResult;
  onReset: () => void;
}

const Dashboard: React.FC<Props> = ({ results, onReset }) => {
  const { scorecard, topPathways } = results;

  const chartData = {
    labels: scorecard.labels,
    datasets: [
      {
        label: 'Skill Capacity',
        data: scorecard.data,
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    scales: {
      r: {
        angleLines: {
          display: false
        },
        suggestedMin: 0,
        suggestedMax: 10 // Arbitrary max to make the chart look decent
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
           <h2 className="text-3xl font-bold text-gray-800">Your WhatNext Roadmap</h2>
           <p className="text-gray-600">Based on your unique profile analysis</p>
        </div>
        <button
          onClick={onReset}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700"
        >
          Start Over
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Skill Scorecard */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <BarChart className="text-blue-600" />
            Skill Scorecard
          </h3>
          <div className="h-64 flex items-center justify-center">
             <Radar data={chartData} options={chartOptions} />
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Your strongest areas are mapped above.
          </p>
        </div>

        {/* Top Pathways */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-bold text-gray-800">Top Earning Pathways For You</h3>

          {topPathways.length === 0 ? (
            <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
              <p className="text-yellow-800">
                We couldn't find exact matches based on your inputs. Try adding more skills or hobbies!
              </p>
            </div>
          ) : (
            topPathways.slice(0, 3).map((pathway, index) => (
              <PathwayCard key={pathway.id} pathway={pathway} rank={index + 1} />
            ))
          )}
        </div>
      </div>

      {/* Gap Analysis & Roadmap */}
      {topPathways.length > 0 && (
        <div className="mt-12">
           <h3 className="text-2xl font-bold mb-6 text-gray-800">Detailed Roadmap</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {topPathways.slice(0, 2).map(pathway => (
               <div key={pathway.id} className="bg-white p-6 rounded-xl shadow border border-gray-100">
                 <h4 className="font-bold text-lg mb-2 text-blue-800">{pathway.title} Roadmap</h4>

                 <div className="mb-4">
                   <h5 className="font-semibold text-sm text-gray-500 uppercase tracking-wider mb-2">Next Steps</h5>
                   <ul className="list-disc list-inside space-y-1 text-gray-700">
                     {pathway.roadmap.map((step, i) => (
                       <li key={i}>{step}</li>
                     ))}
                   </ul>
                 </div>

                 {pathway.missingSkills.length > 0 && (
                   <div className="bg-red-50 p-4 rounded-lg">
                     <h5 className="font-semibold text-sm text-red-600 uppercase tracking-wider mb-2 flex items-center gap-2">
                       <AlertTriangle size={16} /> Gap Analysis
                     </h5>
                     <p className="text-sm text-red-800 mb-2">Consider learning these skills to increase your success:</p>
                     <div className="flex flex-wrap gap-2">
                       {pathway.missingSkills.map(skill => (
                         <span key={skill} className="px-2 py-1 bg-white border border-red-200 text-red-600 text-xs rounded-full">
                           {skill}
                         </span>
                       ))}
                     </div>
                   </div>
                 )}
               </div>
             ))}
           </div>
        </div>
      )}
    </div>
  );
};

const PathwayCard: React.FC<{ pathway: MatchedPathway; rank: number }> = ({ pathway, rank }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full">#{rank} Recommendation</span>
            <span className="text-green-600 text-sm font-semibold">{pathway.matchScore}% Match</span>
          </div>
          <h4 className="text-xl font-bold text-gray-900">{pathway.title}</h4>
          <p className="text-gray-600 mt-1">{pathway.description}</p>
        </div>
        <div className="text-right hidden sm:block">
          <div className="text-sm text-gray-500">Earning Potential</div>
          <div className="font-bold text-green-700">{pathway.earningPotential}</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <Clock size={16} />
          {pathway.timeframe}
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <DollarSign size={16} />
          {pathway.difficulty} Difficulty
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-600 sm:hidden">
             {pathway.earningPotential}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
