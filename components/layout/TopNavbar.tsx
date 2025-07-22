"use client";

import React, { useState } from 'react';
import { Search, Bell, Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NotificationPanel from './NotificationPanel';

interface TopNavbarProps {
  onMenuToggle: () => void;
  onMobileMenuToggle: () => void;
}

export default function TopNavbar({ onMenuToggle, onMobileMenuToggle }: TopNavbarProps) {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 glass-effect shadow-xl">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left side - Menu toggle */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMobileMenuToggle}
            className="lg:hidden p-2 hover:bg-white/60 rounded-xl transition-all duration-300"
          >
            <Menu className="w-5 h-5 text-[#333333]" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuToggle}
            className="hidden lg:flex p-2 hover:bg-white/60 rounded-xl transition-all duration-300"
          >
            <Menu className="w-5 h-5 text-[#333333]" />
          </Button>
        </div>

        {/* Center - Search bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search courses, topics..."
              className="w-full pl-12 pr-4 py-3 input-field focus:outline-none focus:ring-2 focus:ring-[#4F8FE5]/30"
            />
          </div>
        </div>

        {/* Right side - Notifications and user */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowNotifications(true)}
            className="relative p-3 hover:bg-white/60 rounded-xl transition-all duration-300"
          >
            <Bell className="w-5 h-5 text-[#333333]" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#A6E86D] rounded-full shadow-lg">
              <span className="absolute inset-0 w-3 h-3 bg-[#A6E86D] rounded-full animate-ping"></span>
            </span>
          </Button>

          {/* User profile */}
          <div className="flex items-center space-x-3 px-4 py-2 neumorphic-card hover:shadow-xl transition-all duration-300 cursor-pointer">
            <img
              src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2"
              alt="User"
              className="w-9 h-9 rounded-full shadow-lg"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-[#333333]">Sarah Johnson</p>
              <p className="text-xs text-gray-500">Computer Science</p>
            </div>
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