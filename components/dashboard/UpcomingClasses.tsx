"use client";

import React from 'react';
import { Calendar, Clock, Video, FileText, Pizza as Quiz } from 'lucide-react';
import { Button } from '@/components/ui/button';

const upcomingEvents = [
  {
    id: 1,
    type: 'live-class',
    title: 'React Advanced Patterns',
    instructor: 'Dr. Emily Chen',
    date: '2024-01-15',
    time: '2:00 PM',
    duration: '90 min',
    color: 'blue'
  },
  {
    id: 2,
    type: 'assignment',
    title: 'Algorithm Analysis Project',
    instructor: 'Prof. Michael Rodriguez',
    date: '2024-01-17',
    time: '11:59 PM',
    duration: 'Due',
    color: 'orange'
  },
  {
    id: 3,
    type: 'quiz',
    title: 'Database Normalization Quiz',
    instructor: 'Dr. Sarah Williams',
    date: '2024-01-18',
    time: '10:00 AM',
    duration: '45 min',
    color: 'green'
  },
  {
    id: 4,
    type: 'live-class',
    title: 'System Design Workshop',
    instructor: 'Dr. James Kim',
    date: '2024-01-20',
    time: '3:30 PM',
    duration: '2 hours',
    color: 'purple'
  }
];

const getEventIcon = (type: string) => {
  switch (type) {
    case 'live-class':
      return Video;
    case 'assignment':
      return FileText;
    case 'quiz':
      return Quiz;
    default:
      return Calendar;
  }
};

const getEventColors = (color: string) => {
  const colors = {
    blue: 'bg-blue-100 text-blue-700 border-blue-200',
    orange: 'bg-orange-100 text-orange-700 border-orange-200',
    green: 'bg-green-100 text-green-700 border-green-200',
    purple: 'bg-purple-100 text-purple-700 border-purple-200'
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

export default function UpcomingClasses() {
  return (
    <div className="neumorphic-card rounded-2xl p-6 hover-lift">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Upcoming Schedule</h2>
        <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
          View Calendar
        </Button>
      </div>

      <div className="space-y-4">
        {upcomingEvents.map((event) => {
          const Icon = getEventIcon(event.type);
          const eventDate = new Date(event.date);
          const today = new Date();
          const isToday = eventDate.toDateString() === today.toDateString();
          const isTomorrow = eventDate.toDateString() === new Date(today.getTime() + 24 * 60 * 60 * 1000).toDateString();
          
          let dateLabel = eventDate.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric' 
          });
          
          if (isToday) dateLabel = 'Today';
          if (isTomorrow) dateLabel = 'Tomorrow';

          return (
            <div
              key={event.id}
              className="bg-white/60 rounded-xl p-4 border border-blue-100/50 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg border ${getEventColors(event.color)}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {event.instructor}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{dateLabel}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{event.time}</span>
                      </div>
                      <span>({event.duration})</span>
                    </div>
                  </div>
                </div>

                {event.type === 'live-class' && (
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-blue-200 text-blue-600 hover:bg-blue-50"
                  >
                    Join
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}