// src/components/Navigation.jsx
import React from 'react';
import { Button } from '@/components/ui/button';

export const Navigation = () => {
  return (
    <nav className="border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 45 60" className="text-[#0EA5E9]">
              <path d="M0,0 L30,0 L45,15 L45,60 L0,60 Z" 
                    fill="white" 
                    stroke="currentColor" 
                    strokeWidth="2"/>
              <circle cx="45" cy="40" r="20" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3"/>
            </svg>
            <span className="text-xl font-bold text-[#0EA5E9]">docNsight</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <a href="/" className="text-gray-600 hover:text-[#0EA5E9]">Home</a>
            <a href="/analyze" className="text-gray-600 hover:text-[#0EA5E9]">Analyze</a>
            <Button className="bg-[#0EA5E9] hover:bg-[#0284C7]">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
