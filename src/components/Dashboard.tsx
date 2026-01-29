
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
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
} from 'chart.js';
import { Radar, Bar, Pie, Line } from 'react-chartjs-2';
import { DollarSign, Clock, BarChart as BarChartIcon, PieChart as PieChartIcon, Activity, Zap } from 'lucide-react';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement
);

interface Props {
  results: AnalysisResult;
  onReset: () => void;
}

const Dashboard: React.FC<Props> = ({ results, onReset }) => {
  const { topPathways, barChartData, pieChartData, radarChartData, gapAnalysisData } = results;

  // Bar Chart Config (Skill Scorecard)
  const barData = {
    labels: barChartData.labels,
    datasets: [
      {
        label: 'Skill Level',
        data: barChartData.data,
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
    ],
  };
  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true,
            max: 3.5,
            ticks: {
                stepSize: 1
            }
        }
    }
  };

  // Pie Chart Config (Category Contribution)
  const pieData = {
    labels: pieChartData.labels,
    datasets: [
      {
        data: pieChartData.data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(199, 199, 199, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  // Radar Chart Config (Top Monetizable Skills)
  const radarData = {
    labels: radarChartData.labels,
    datasets: [
      {
        label: 'Skill Level',
        data: radarChartData.data,
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 2,
      },
    ],
  };
    const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          display: false
        },
        suggestedMin: 0,
        suggestedMax: 3
      }
    }
  };

  // Line Chart Config (Gap Analysis)
  const lineData = gapAnalysisData ? {
    labels: gapAnalysisData.labels,
    datasets: [
      {
        label: 'Your Level',
        data: gapAnalysisData.currentLevels,
        borderColor: 'rgba(59, 130, 246, 1)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      },
      {
        label: 'Required Level',
        data: gapAnalysisData.requiredLevels,
        borderColor: 'rgba(239, 68, 68, 1)',
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
        borderDash: [5, 5],
      },
    ],
  } : { labels: [], datasets: [] };

    const lineOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 3.5,
                ticks: {
                    stepSize: 1
                }
            }
        }
    };


  return (
    <div className="max-w-7xl mx-auto p-6">
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

      {/* Visualizations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
        {/* Bar Chart: Skill Scorecard */}
        <div className="bg-white p-6 rounded-xl shadow-lg h-96 flex flex-col">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-700">
                <BarChartIcon className="text-blue-600" size={20} />
                Skill Scorecard
            </h3>
            <div className="flex-grow relative">
                {barChartData.labels.length > 0 ? (
                    <Bar data={barData} options={barOptions} />
                ) : (
                    <div className="h-full flex items-center justify-center text-gray-400">No scored skills found.</div>
                )}
            </div>
        </div>

        {/* Pie Chart: Category Contribution */}
        <div className="bg-white p-6 rounded-xl shadow-lg h-96 flex flex-col">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-700">
                <PieChartIcon className="text-pink-600" size={20} />
                Profile Strength Distribution
            </h3>
            <div className="flex-grow relative">
                <Pie data={pieData} options={pieOptions} />
            </div>
        </div>

        {/* Radar Chart: Top Monetizable Skills */}
        <div className="bg-white p-6 rounded-xl shadow-lg h-96 flex flex-col">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-700">
                <Zap className="text-green-600" size={20} />
                Top Monetizable Skills
            </h3>
             <div className="flex-grow relative">
                {radarChartData.labels.length > 0 ? (
                    <Radar data={radarData} options={radarOptions} />
                ) : (
                    <div className="h-full flex items-center justify-center text-gray-400">No monetizable skills found.</div>
                )}
            </div>
        </div>

         {/* Line Chart: Gap Analysis */}
        <div className="bg-white p-6 rounded-xl shadow-lg h-96 flex flex-col">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-700">
                <Activity className="text-purple-600" size={20} />
                Skill Gap Analysis (Top Pathway)
            </h3>
             <div className="flex-grow relative">
                {gapAnalysisData ? (
                    <Line data={lineData} options={lineOptions} />
                ) : (
                    <div className="h-full flex items-center justify-center text-gray-400">No pathway matches to analyze.</div>
                )}
            </div>
        </div>
      </div>

      {/* Top Pathways List */}
      <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Top Earning Recommendations</h3>

          {topPathways.length === 0 ? (
            <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
              <p className="text-yellow-800">
                We couldn't find exact matches based on your inputs. Try adding more skills or hobbies!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {topPathways.slice(0, 4).map((pathway, index) => (
                    <PathwayCard key={pathway.id} pathway={pathway} rank={index + 1} />
                ))}
            </div>
          )}
      </div>

      {/* Detailed Roadmap for Top 2 */}
      {topPathways.length > 0 && (
        <div className="mt-12">
           <h3 className="text-2xl font-bold mb-6 text-gray-800">Action Plan</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {topPathways.slice(0, 2).map(pathway => (
               <div key={pathway.id} className="bg-white p-6 rounded-xl shadow border border-gray-100">
                 <h4 className="font-bold text-lg mb-2 text-blue-800">{pathway.title} Roadmap</h4>

                 <div className="mb-4">
                   <h5 className="font-semibold text-sm text-gray-500 uppercase tracking-wider mb-2">Steps to Success</h5>
                   <ul className="list-disc list-inside space-y-1 text-gray-700">
                     {pathway.roadmap.map((step, i) => (
                       <li key={i}>{step}</li>
                     ))}
                   </ul>
                 </div>
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
            <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full">#{rank} Choice</span>
            <span className="text-green-600 text-sm font-semibold">{pathway.matchScore}% Match</span>
          </div>
          <h4 className="text-xl font-bold text-gray-900">{pathway.title}</h4>
          <p className="text-gray-600 mt-1">{pathway.description}</p>
        </div>
        <div className="text-right hidden sm:block">
          <div className="text-sm text-gray-500">Potential</div>
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
          {pathway.difficulty}
        </div>
         <div className="flex items-center gap-1 text-sm text-gray-600 sm:hidden">
             {pathway.earningPotential}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
