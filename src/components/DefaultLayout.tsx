// src/components/DefaultLayout.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className="flex flex-1]">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isDarkMode={isDarkMode} />
        <main className={`transition-all duration-100 ${isSidebarOpen ? 'md:ml-64 w-[calc(100%-16rem)]' : 'md:ml-16 w-[calc(100%-4rem)]'} bg-background text-foreground`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
