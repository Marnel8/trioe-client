'use client';

import React from 'react';

export default function DocsNavigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex gap-4 mb-8">
      <button
        onClick={() => scrollToSection('getting-started')}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Introduction
      </button>
      <button
        onClick={() => scrollToSection('kits-overview')}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Our Kits
      </button>
      <button
        onClick={() => scrollToSection('learning-path')}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Learning Path
      </button>
      <button
        onClick={() => scrollToSection('technical-reference')}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Technical Reference
      </button>
      <button
        onClick={() => scrollToSection('support')}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Support
      </button>
    </div>
  );
}
