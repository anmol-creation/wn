
import { useState } from 'react'
import InputForm from './components/InputForm'
import Dashboard from './components/Dashboard'
import { type UserProfile, analyzeProfile, type AnalysisResult } from './utils/analyzer'
import { Key } from 'lucide-react'

function App() {
  const [view, setView] = useState<'form' | 'dashboard'>('form');
  const [analysisResults, setAnalysisResults] = useState<AnalysisResult | null>(null);

  const handleAnalyze = (profile: UserProfile) => {
    const results = analyzeProfile(profile);
    setAnalysisResults(results);
    setView('dashboard');
  };

  const handleReset = () => {
    setAnalysisResults(null);
    setView('form');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <Key size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 leading-tight">WhatNext</h1>
              <p className="text-xs text-gray-500 font-medium tracking-wide uppercase">Key To Find Success</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {view === 'form' ? (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover Your Future Earning Path</h2>
              <p className="text-lg text-gray-600">
                Tell us about your skills, hobbies, and interests. We'll analyze your profile and suggest realistic career and earning opportunities.
              </p>
            </div>
            <InputForm onAnalyze={handleAnalyze} />
          </div>
        ) : (
          analysisResults && <Dashboard results={analysisResults} onReset={handleReset} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} WhatNext. Open Source Project.
        </div>
      </footer>
    </div>
  )
}

export default App
