"use client";

import React from 'react';
import { Bell, Pin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const announcements = [
  {
    id: 1,
    title: 'New Course Available: Machine Learning Fundamentals',
    content: 'Enroll now for early bird pricing. Limited seats available.',
    time: '2 hours ago',
    pinned: true,
    type: 'course'
  },
  {
    id: 2,
    title: 'System Maintenance Scheduled',
    content: 'Platform will be offline on Jan 20, 2-4 AM for updates.',
    time: '1 day ago',
    pinned: false,
    type: 'maintenance'
  },
  {
    id: 3,
    title: 'New Discussion Forum Categories',
    content: 'We\'ve added new categories for better organization.',
    time: '3 days ago',
    pinned: false,
    type: 'feature'
  },
  {
    id: 4,
    title: 'Winter Break Schedule',
    content: 'Classes resume on January 8th. Happy holidays!',
    time: '1 week ago',
    pinned: false,
    type: 'schedule'
  }
];

const getAnnouncementColor = (type: string) => {
  switch (type) {
    case 'course':
      return 'border-l-blue-500 bg-blue-50 dark:bg-blue-900/30';
    case 'maintenance':
      return 'border-l-orange-500 bg-orange-50 dark:bg-orange-900/30';
    case 'feature':
      return 'border-l-green-500 bg-green-50 dark:bg-green-900/30';
    case 'schedule':
      return 'border-l-purple-500 bg-purple-50 dark:bg-purple-900/30';
    default:
      return 'border-l-gray-500 bg-muted';
  }
};

export default function Announcements() {
  return (
    <div className="neumorphic-card rounded-2xl p-4 sm:p-6 hover-lift bg-background text-foreground scrollbar-hide">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-2">
        <h2 className="text-lg sm:text-xl font-bold text-foreground">Announcements</h2>
        <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-muted self-start sm:self-auto">
          View All
        </Button>
      </div>

      <div className="space-y-3 sm:space-y-4 max-h-60 sm:max-h-80 overflow-y-auto scrollbar-hide rounded-2xl">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className={`border-l-4 ${getAnnouncementColor(announcement.type)} rounded-r-lg p-3 sm:p-4 relative`}
          >
            {announcement.pinned && (
              <Pin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 absolute top-2 right-2" />
            )}

            <h3 className="font-semibold text-foreground mb-2 pr-6 text-sm sm:text-base leading-tight">
              {announcement.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 leading-relaxed">
              {announcement.content}
            </p>

            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="w-3 h-3 mr-1 flex-shrink-0" />
              <span className="truncate">{announcement.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}