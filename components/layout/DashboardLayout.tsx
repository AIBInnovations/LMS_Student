// DashboardLayout.tsx
"use client";

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';

interface DashboardLayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

export default function DashboardLayout({ children, currentPage }: DashboardLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-screen w-screen fixed inset-0 flex flex-col bg-white overflow-hidden">
      
      {/* Top Navbar - Fixed height, no scroll */}
      <div className="h-16 w-full flex-shrink-0 bg-white ">
        <TopNavbar onMobileMenuToggle={() => setMobileMenuOpen(true)} />
      </div>

      {/* Main container - Takes remaining height */}
      <div className="flex-1 flex min-h-0">
        
        {/* Desktop Sidebar - Fixed width and height */}
        <div className="hidden lg:flex w-20 hover:w-64 flex-shrink-0 bg-white transition-all duration-300 group">
          <div className="w-full h-full overflow-y-auto">
            <Sidebar 
              isMobileOpen={false}
              currentPage={currentPage}
              onMobileClose={() => {}}
            />
          </div>
        </div>

        {/* Main Content Area - Scrollable content only */}
        <div className="flex-1 min-w-0 h-[97%] rounded-3xl sm:mr-5">
          <div className="h-full bg-gray-50 p-4 rounded-3xl overflow-y-auto scrollbar-hide">
            <div className="rounded-2xl bg-white p-6 min-h-full">
              {children}
            </div>
          </div>
        </div>

      </div>

      {/* Mobile Sidebar Overlay */}
      <div className="lg:hidden">
        <Sidebar 
          isMobileOpen={mobileMenuOpen}
          currentPage={currentPage}
          onMobileClose={() => setMobileMenuOpen(false)}
        />
      </div>

    </div>
  );
}