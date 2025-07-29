'use client';

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
    blue: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700/50',
    orange: 'bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-700/50',
    green: 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700/50',
    purple: 'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700/50'
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

export default function UpcomingClasses() {
  return (
    <div className="neumorphic-card rounded-2xl p-4 sm:p-6 hover-lift">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-2">
        <h2 className="text-lg sm:text-xl font-bold text-foreground">Upcoming Schedule</h2>
        <Button
          variant="ghost"
          size="sm"
          className="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 self-start sm:self-auto"
        >
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
              className="bg-white/60 dark:bg-white/10 rounded-xl p-4 border border-blue-100/50 dark:border-white/5 hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg border ${getEventColors(event.color)}`}>
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{event.instructor}</p>

                    <div className="flex flex-wrap gap-x-4 text-xs text-muted-foreground">
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
                    className="border-blue-200 dark:border-white/5 text-blue-600 dark:text-white-300 hover:bg-black dark:hover:bg-white-900/20 w-fit self-end sm:self-auto"
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
