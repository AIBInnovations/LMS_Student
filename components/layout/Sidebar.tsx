"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Home, BookOpen, Video, FileText, Pizza as Quiz, Award, MessageCircle, User, HelpCircle, Users, Plus, X, Settings } from 'lucide-react';
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
  isMobileOpen: boolean;
  onMobileClose: () => void;
  currentPage?: string;
}

const navigationItems = [
  { icon: Home, label: 'Dashboard', href: '/', key: 'dashboard' },
  { icon: BookOpen, label: 'My Courses', href: '/courses', key: 'courses' },
  { icon: Video, label: 'Live Classes', href: '/live-classes', key: 'live-classes' },
  { icon: FileText, label: 'Assignments', href: '/assignments', key: 'assignments' },
  { icon: Quiz, label: 'Quizzes & Tests', href: '/quizzes', key: 'quizzes' },
  { icon: Award, label: 'Certificates', href: '/certificates', key: 'certificates' },
  { icon: MessageCircle, label: 'Discussion Forums', href: '/forums', key: 'forums' },
  { icon: User, label: 'Profile', href: '/profile', key: 'profile' },
  { icon: Settings, label: 'Settings', href: '/settings', key: 'settings' },
  { icon: HelpCircle, label: 'Help Center', href: '/help', key: 'help' },
];

const teamMembers = [
  { name: 'Alice', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2' },
  { name: 'Bob', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2' },
  { name: 'Carol', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2' },
];

export default function Sidebar({ isOpen, isMobileOpen, onMobileClose, currentPage = 'dashboard' }: SidebarProps) {
  return (
    <>
      {/* Mobile backdrop */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onMobileClose}
        />
      )}
      
      <aside className={cn(
        "fixed top-0 left-0 z-50 h-full w-64 glass-effect shadow-2xl transition-transform duration-300",
        "lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full lg:-translate-x-full",
        isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E0E0E0]/30">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#4F8FE5] rounded-xl flex items-center justify-center shadow-lg shadow-blue-200/50">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-[#333333]">EduFlow</h1>
          </div>
          <button
            onClick={onMobileClose}
            className="lg:hidden p-1 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <X className="w-5 h-5 text-[#333333]" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-6">
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={cn(
                    "nav-item",
                    currentPage === item.key && "nav-item-active"
                  )}
                  onClick={onMobileClose}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium text-sm">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Team Workspace */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#E0E0E0]/30">
          <div className="neumorphic-card p-4">
            <h3 className="text-sm font-semibold text-[#333333] mb-3">Study Group</h3>
            
            <div className="flex items-center space-x-2 mb-3">
              {teamMembers.map((member, index) => (
                <img
                  key={member.name}
                  src={member.avatar}
                  alt={member.name}
                  className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                />
              ))}
              <button className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg">
                <Plus className="w-4 h-4 text-[#4F8FE5]" />
              </button>
            </div>

            <button className="w-full primary-button text-sm py-2">
              Join Study Session
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}