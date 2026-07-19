# WhatNext

WhatNext is a React-based web application designed to analyze user profiles and suggest actionable earning pathways. By gathering comprehensive user data—ranging from education and skills to hobbies, interests, and resources—the application maps out personalized opportunities in Careers, Freelance, Business, Side Hustles, and Content Creation.

## Features

- **Interactive Wizard-Style Input Form**: A sequential form that collects data across multiple categories:
  - Education (structured around official Indian levels)
  - Skills (with deep recursive checklists and auto-fill)
  - Hobbies & Interests (with auto-selection based on skills)
  - Activities, Spending, and Resources
- **Comprehensive Dashboard**:
  - **Overview**: Visualizes user data using Chart.js (Skill Scorecard, Category Contribution, Gap Analysis, etc.).
  - **Career Map**: An interactive node-based diagram of earning pathways powered by React Flow.
  - **Career Snapshot**: A resume-style summary of the user's profile and suggested pathways.
- **Earning Pathways Analysis**: A rule-based engine that maps user inputs to earning opportunities, categorized into Career, Freelance, Business, Side Hustle, and Content Creation.
- **Client-Side PDF Report Generation**: Generates detailed reports highlighting 'High Priority' overlaps (Skills aligned with Passion) versus 'Potential Only' using `jspdf` and `jspdf-autotable`.
- **Hybrid Skill Naming**: Dynamically characterizes users with mixed basic and advanced checklist selections (e.g., 'Emerging Learner', 'Specialist-in-Progress').

## Tech Stack

- **Framework**: React 19, Vite, TypeScript
- **Styling**: Tailwind CSS (v3)
- **Icons**: Lucide React
- **Data Visualization**: Chart.js (`react-chartjs-2`), React Flow (`reactflow`)
- **PDF Generation**: jsPDF (`jspdf`), jsPDF AutoTable (`jspdf-autotable`)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
```

### Build

To create a production build:

```bash
npm run build
```

This command enforces strict TypeScript checking before bundling the application into the `dist` directory. The project is configured for deployment to GitHub Pages.

## Project Structure

- `src/components/`: Reusable React components, including the Dashboard and InputForm.
- `src/data/`: Static data, options (`options.ts`), pathway rules (`rules.ts`), and skill details (`skillDetails.ts`).
- `src/utils/`: Utility functions, including the analysis engine (`analyzer.ts`).
- `src/main.tsx`: Application entry point with global ErrorBoundary.

## Deployment

The project is configured with `base: './'` in `vite.config.ts` to support relative asset paths, making it ideal for deployment on GitHub Pages. Build the project using `npm run build` and deploy the contents of the `dist` folder.
