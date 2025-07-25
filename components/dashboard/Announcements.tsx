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
      return 'border-l-blue-500 bg-blue-50/50';
    case 'maintenance':
      return 'border-l-orange-500 bg-orange-50/50';
    case 'feature':
      return 'border-l-green-500 bg-green-50/50';
    case 'schedule':
      return 'border-l-purple-500 bg-purple-50/50';
    default:
      return 'border-l-gray-500 bg-gray-50/50';
  }
};

export default function Announcements() {
  return (
    <div className="neumorphic-card rounded-2xl p-6 hover-lift">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Announcements</h2>
        <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
          View All
        </Button>
      </div>

      <div className="space-y-4 max-h-80 overflow-y-auto">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className={`border-l-4 ${getAnnouncementColor(announcement.type)} rounded-r-lg p-4 relative`}
          >
            {announcement.pinned && (
              <Pin className="w-4 h-4 text-blue-500 absolute top-2 right-2" />
            )}
            
            <h3 className="font-semibold text-gray-800 mb-2 pr-6">
              {announcement.title}
            </h3>
            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
              {announcement.content}
            </p>
            
            <div className="flex items-center text-xs text-gray-500">
              <Clock className="w-3 h-3 mr-1" />
              {announcement.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}