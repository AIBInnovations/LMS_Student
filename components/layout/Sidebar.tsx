"use client";

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  Home, BookOpen, Video, FileText,
  Award, MessageCircle, User, Settings, HelpCircle
} from 'lucide-react';

interface SidebarProps {
  isMobileOpen: boolean;
  onMobileClose: () => void;
  currentPage?: string;
}

const navigationItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard', key: 'dashboard' },
  { icon: BookOpen, label: 'My Courses', href: '/courses', key: 'courses' },
  { icon: Video, label: 'Live Classes', href: '/live-classes', key: 'live-classes' },
  { icon: FileText, label: 'Assignments', href: '/assignments', key: 'assignments' },
  { icon: Award, label: 'Certificates', href: '/certificates', key: 'certificates' },
  { icon: MessageCircle, label: 'Discussion Forums', href: '/forums', key: 'forums' },
  { icon: User, label: 'Profile', href: '/profile', key: 'profile' },
  { icon: Settings, label: 'Settings', href: '/settings', key: 'settings' },
  { icon: HelpCircle, label: 'Help Center', href: '/help', key: 'help' },
];

export default function Sidebar({ isMobileOpen, onMobileClose, currentPage = 'dashboard' }: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden" onClick={onMobileClose} />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={cn(
          "lg:hidden fixed top-0 left-0 z-50 h-full w-64 transition-transform duration-300 shadow-xl",
          "bg-background text-foreground",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <nav className="mt-16 p-4 space-y-2">
          {navigationItems.map((item) => (
            <Link
              href={item.href}
              key={item.key}
              className={cn(
                "flex items-center space-x-4 p-3 rounded-lg transition-all",
                "hover:bg-muted",
                currentPage === item.key && "bg-muted"
              )}
              onClick={onMobileClose}
            >
              <item.icon className="w-5 h-5 text-foreground" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Desktop Sidebar */}
      <nav className="hidden lg:block h-full overflow-y-auto bg-background text-foreground ">
        <div className="py-4 px-2 space-y-1">
          {navigationItems.map((item) => (
            <Link
              href={item.href}
              key={item.key}
              className={cn(
                "flex items-center space-x-3 p-3 rounded-lg transition-all",
                "hover:bg-muted",
                currentPage === item.key && "bg-muted border-r-2 border-blue-500"
              )}
            >
              <item.icon className="w-5 h-5 text-foreground flex-shrink-0" />
              <span className="text-sm font-medium hidden group-hover:block whitespace-nowrap">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
