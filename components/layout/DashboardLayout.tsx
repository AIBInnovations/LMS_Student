"use client";

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';

interface DashboardLayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

export default function DashboardLayout({ children, currentPage }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Sidebar 
        isOpen={sidebarOpen} 
        isMobileOpen={mobileMenuOpen}
        currentPage={currentPage}
        onMobileClose={() => setMobileMenuOpen(false)}
      />
      
      <div className={`transition-all duration-300 ${
        sidebarOpen ? 'ml-0 lg:ml-64' : 'ml-0'
      }`}>
        <TopNavbar 
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
        
        <main className="pt-16">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}