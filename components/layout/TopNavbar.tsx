//TopNavbar.tsx
"use client";

import React, { useState } from 'react';
import { Search, Bell, Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NotificationPanel from './NotificationPanel';
import Image from 'next/image';

interface TopNavbarProps {
  onMobileMenuToggle: () => void;
}

export default function TopNavbar({ onMobileMenuToggle }: TopNavbarProps) {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white  h-18 flex items-center px-6">
        <div className="flex items-center justify-between w-full">
          {/* Left side - Logo and Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            
            <div className="flex items-center space-x-2 border ">
               <Image
                    src="/logo.jpg"
                    alt="EduFlow Logo"
                    width={84} // or adjust as needed
                    height={54}
                  />
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onMobileMenuToggle}
              className="lg:hidden p-2 hover:bg-white/60 rounded-xl"
            >
              <Menu className="w-5 h-5 text-[#333333]" />
            </Button>
          </div>

          {/* Center - Search */}
          <div className="hidden md:block w-full max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses, topics..."
                className="w-full pl-12 pr-4 py-2 input-field focus:outline-none focus:ring-2 focus:ring-[#4F8FE5]/30"
              />
            </div>
          </div>

          {/* Right side - Notifications and user */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowNotifications(true)}
              className="relative p-2 hover:bg-white/60 rounded-xl"
            >
              <Bell className="w-5 h-5 text-[#333]" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#A6E86D] rounded-full shadow">
                <span className="absolute inset-0 w-3 h-3 bg-[#A6E86D] rounded-full animate-ping"></span>
              </span>
            </Button>

            <div className="flex items-center space-x-2">
              <img
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      <NotificationPanel
        isOpen={showNotifications}
        onClose={() => setShowNotifications(false)}
      />
    </>
  );
}
