
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import type { AnalysisResult, UserProfile } from './analyzer';
import { getSkillDetails, getSkillLevel } from '../data/skillDetails';

export const generatePDF = (results: AnalysisResult, profile: UserProfile) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;

  // --- Title & Branding ---
  doc.setFontSize(22);
  doc.setTextColor(41, 128, 185); // Blue color
  doc.text('WhatNext – Key To Find Success', pageWidth / 2, 20, { align: 'center' });

  doc.setFontSize(12);
  doc.setTextColor(100);
  doc.text('Personalized Career & Earning Roadmap', pageWidth / 2, 30, { align: 'center' });

  doc.line(10, 35, pageWidth - 10, 35); // Separator line

  // --- Profile Summary ---
  doc.setFontSize(16);
  doc.setTextColor(0);
  doc.text('Profile Summary', 14, 45);

  const profileData = [
    ['Category', 'Key Inputs'],
    ['Education', profile.Education.map(i => i.text).join(', ') || 'N/A'],
    ['Skills', profile.Skills.map(i => i.text).join(', ') || 'N/A'],
    ['Hobbies', profile.Hobbies.map(i => i.text).join(', ') || 'N/A'],
    ['Interests', profile.Interests.map(i => i.text).join(', ') || 'N/A'],
    ['Activities', profile.Activities.map(i => i.text).join(', ') || 'N/A'],
    ['Spending', profile.Spending.map(i => i.text).join(', ') || 'N/A'],
    ['Resources', profile.Resources.map(i => i.text).join(', ') || 'N/A'],
  ];

  autoTable(doc, {
    startY: 50,
    head: [profileData[0]],
    body: profileData.slice(1),
    theme: 'grid',
    headStyles: { fillColor: [41, 128, 185] },
    columnStyles: { 0: { fontStyle: 'bold', cellWidth: 40 } },
  });

  // --- Skill Detailed Assessment ---
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let nextY = (doc as any).lastAutoTable.finalY + 15;

  if (profile.Skills.length > 0) {
      doc.setFontSize(16);
      doc.setTextColor(0);
      doc.text('Skill Proficiency Assessment', 14, nextY);

      const skillRows = profile.Skills.map(skill => {
          const { label } = getSkillLevel(skill.rawScore || 0);
          const details = getSkillDetails(skill.value || '', skill.text);
          const totalItems = details.reduce((acc, grp) => acc + grp.items.length, 0);
          const score = skill.rawScore || 0;
          const percentage = totalItems > 0 ? Math.round((score / totalItems) * 100) : 0;

          // Generate visual bar [*****-----]
          const barLength = 10;
          const filled = Math.round((percentage / 100) * barLength);
          const bar = '[' + '#'.repeat(filled) + '-'.repeat(barLength - filled) + ']';

          // Suggestion
          let suggestion = 'Practice regularly';
          if (percentage < 100 && skill.details) {
              // Find first missing item
              for (const group of details) {
                  const missing = group.items.find(i => !skill.details?.includes(i));
                  if (missing) {
                      suggestion = `Learn: ${missing} (${group.category})`;
                      break;
                  }
              }
          }

          return [skill.text, `${label} (${percentage}%)`, bar, suggestion];
      });

      autoTable(doc, {
        startY: nextY + 5,
        head: [['Skill', 'Proficiency', 'Visualization', 'Suggestion']],
        body: skillRows,
        theme: 'grid',
        headStyles: { fillColor: [142, 68, 173] }, // Purple
        styles: { fontSize: 10 },
        columnStyles: {
            2: { font: 'courier' } // Monospace for bar alignment
        }
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      nextY = (doc as any).lastAutoTable.finalY + 15;
  }

  // --- Top Opportunities ---
  // Check page break
  if (nextY > 250) {
      doc.addPage();
      nextY = 20;
  }

  doc.setFontSize(16);
  doc.text('Top Earning Pathways', 14, nextY);

  const opportunitiesData = results.topPathways.slice(0, 5).map(p => [
    p.title,
    `${p.matchScore}%`,
    p.difficulty,
    p.timeframe,
    p.earningPotential
  ]);

  autoTable(doc, {
    startY: nextY + 5,
    head: [['Pathway', 'Match', 'Level', 'Timeline', 'Potential']],
    body: opportunitiesData,
    theme: 'striped',
    headStyles: { fillColor: [46, 204, 113] },
  });

  // --- Action Plan (Top 2) ---
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let currentY = (doc as any).lastAutoTable.finalY + 15;

  // Check page break
  if (currentY > 250) {
    doc.addPage();
    currentY = 20;
  }

  doc.setFontSize(16);
  doc.text('Detailed Action Plan', 14, currentY);
  currentY += 10;

  results.topPathways.slice(0, 2).forEach((pathway, index) => {
    if (currentY > 250) {
        doc.addPage();
        currentY = 20;
    }

    doc.setFontSize(14);
    doc.setTextColor(41, 128, 185);
    doc.text(`${index + 1}. ${pathway.title}`, 14, currentY);
    currentY += 7;

    doc.setFontSize(11);
    doc.setTextColor(0);
    doc.text(`Readiness: ${pathway.readiness}`, 14, currentY);
    currentY += 7;

    // Roadmap Steps
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Roadmap:', 14, currentY);
    currentY += 5;
    doc.setFont('helvetica', 'normal');

    pathway.roadmap.forEach(step => {
        doc.text(`• ${step}`, 20, currentY);
        currentY += 5;
    });

    // Improvement Steps
    if (pathway.improvementSteps.length > 0) {
        currentY += 2;
        doc.setFont('helvetica', 'bold');
        doc.text('Next Steps for Growth:', 14, currentY);
        currentY += 5;
        doc.setFont('helvetica', 'normal');
        pathway.improvementSteps.forEach(step => {
            // Text wrapping for long steps
            const splitText = doc.splitTextToSize(`• ${step}`, 170);
            doc.text(splitText, 20, currentY);
            currentY += (splitText.length * 5);
        });
    }

    currentY += 10;
  });

  // --- Footer ---
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text('Generated by WhatNext - Your Career Compass', pageWidth / 2, 290, { align: 'center' });
  }

  // Download
  doc.save('WhatNext_Career_Report.pdf');
};
