"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Video, Calendar, Clock, Users, Play, Bell, BookOpen, Mic, MicOff, Camera, CameraOff } from 'lucide-react';
import { Button } from '@/components/ui/button';

const liveClasses = [
  {
    id: 1,
    title: 'React Advanced Patterns & Performance',
    instructor: 'Dr. Emily Chen',
    course: 'Advanced JavaScript & React',
    date: '2024-01-15',
    time: '2:00 PM',
    duration: 90,
    participants: 24,
    maxParticipants: 30,
    status: 'upcoming',
    description: 'Deep dive into advanced React patterns including render props, higher-order components, and performance optimization techniques.',
    topics: ['Render Props', 'HOCs', 'React.memo', 'useMemo & useCallback'],
    meetingLink: 'https://meet.example.com/react-advanced',
    recordingAvailable: false
  },
  {
    id: 2,
    title: 'Database Optimization Strategies',
    instructor: 'Dr. Sarah Williams',
    course: 'Database Design & SQL',
    date: '2024-01-15',
    time: '10:00 AM',
    duration: 60,
    participants: 18,
    maxParticipants: 25,
    status: 'live',
    description: 'Learn advanced database optimization techniques including indexing strategies and query optimization.',
    topics: ['Indexing', 'Query Optimization', 'Performance Tuning'],
    meetingLink: 'https://meet.example.com/db-optimization',
    recordingAvailable: false
  },
  {
    id: 3,
    title: 'Algorithm Analysis Workshop',
    instructor: 'Prof. Michael Rodriguez',
    course: 'Data Structures & Algorithms',
    date: '2024-01-14',
    time: '3:30 PM',
    duration: 120,
    participants: 22,
    maxParticipants: 28,
    status: 'completed',
    description: 'Comprehensive workshop on analyzing time and space complexity of various algorithms.',
    topics: ['Big O Notation', 'Time Complexity', 'Space Complexity', 'Algorithm Analysis'],
    meetingLink: 'https://meet.example.com/algorithm-analysis',
    recordingAvailable: true
  },
  {
    id: 4,
    title: 'Machine Learning Model Deployment',
    instructor: 'Dr. Alex Kim',
    course: 'Machine Learning Fundamentals',
    date: '2024-01-16',
    time: '1:00 PM',
    duration: 75,
    participants: 15,
    maxParticipants: 20,
    status: 'upcoming',
    description: 'Learn how to deploy machine learning models to production environments.',
    topics: ['Model Deployment', 'Docker', 'Cloud Platforms', 'API Integration'],
    meetingLink: 'https://meet.example.com/ml-deployment',
    recordingAvailable: false
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'live':
      return 'bg-red-100 text-red-700 border-red-200';
    case 'upcoming':
      return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'completed':
      return 'bg-green-100 text-green-700 border-green-200';
    default:
      return 'bg-gray-100 text-gray-700 border-gray-200';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'live':
      return <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>;
    case 'upcoming':
      return <Clock className="w-4 h-4" />;
    case 'completed':
      return <BookOpen className="w-4 h-4" />;
    default:
      return <Calendar className="w-4 h-4" />;
  }
};

export default function LiveClassesPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedClass, setSelectedClass] = useState<number | null>(null);

  const filteredClasses = liveClasses.filter(classItem => {
    if (selectedFilter === 'all') return true;
    return classItem.status === selectedFilter;
  });

  const filters = [
    { key: 'all', label: 'All Classes', count: liveClasses.length },
    { key: 'live', label: 'Live Now', count: liveClasses.filter(c => c.status === 'live').length },
    { key: 'upcoming', label: 'Upcoming', count: liveClasses.filter(c => c.status === 'upcoming').length },
    { key: 'completed', label: 'Completed', count: liveClasses.filter(c => c.status === 'completed').length },
  ];

  return (
    <DashboardLayout currentPage="live-classes">
      <div className="space-y-6">
        {/* Header */}
        <div className="neumorphic-card p-6 hover-lift">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-[#333333] mb-2">Live Classes</h1>
              <p className="text-gray-600">Join interactive sessions and access recorded content</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button className="secondary-button">
                <Bell className="w-4 h-4 mr-2" />
                Set Reminders
              </Button>
              <Button className="primary-button">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Class
              </Button>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="neumorphic-card p-6 hover-lift">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                variant={selectedFilter === filter.key ? 'default' : 'ghost'}
                onClick={() => setSelectedFilter(filter.key)}
                className={selectedFilter === filter.key ? 'primary-button' : 'hover:bg-white/80 rounded-xl'}
              >
                {filter.label}
                <span className="ml-2 bg-white/30 px-2 py-1 rounded-full text-xs">
                  {filter.count}
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* Live Classes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredClasses.map((classItem) => {
            const classDate = new Date(`${classItem.date} ${classItem.time}`);
            const now = new Date();
            const isToday = classDate.toDateString() === now.toDateString();
            const isTomorrow = classDate.toDateString() === new Date(now.getTime() + 24 * 60 * 60 * 1000).toDateString();
            
            let dateLabel = classDate.toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric' 
            });
            
            if (isToday) dateLabel = 'Today';
            if (isTomorrow) dateLabel = 'Tomorrow';

            return (
              <div key={classItem.id} className="neumorphic-card p-6 hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(classItem.status)}`}>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(classItem.status)}
                      <span className="capitalize">{classItem.status}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Users className="w-4 h-4" />
                    <span>{classItem.participants}/{classItem.maxParticipants}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#333333] mb-2">{classItem.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{classItem.course} • {classItem.instructor}</p>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{classItem.description}</p>

                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{dateLabel}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{classItem.time} ({classItem.duration} min)</span>
                  </div>
                </div>

                {classItem.topics && (
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Topics:</p>
                    <div className="flex flex-wrap gap-2">
                      {classItem.topics.map((topic, index) => (
                        <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  {classItem.status === 'live' && (
                    <Button className="flex-1 mr-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-xl px-6 py-3 shadow-lg shadow-red-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-200/60 hover:-translate-y-1">
                      <Play className="w-4 h-4 mr-2" />
                      Join Live Class
                    </Button>
                  )}
                  
                  {classItem.status === 'upcoming' && (
                    <Button className="flex-1 mr-2 primary-button">
                      <Bell className="w-4 h-4 mr-2" />
                      Set Reminder
                    </Button>
                  )}
                  
                  {classItem.status === 'completed' && classItem.recordingAvailable && (
                    <Button className="flex-1 mr-2 secondary-button">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Recording
                    </Button>
                  )}
                  
                  {classItem.status === 'completed' && !classItem.recordingAvailable && (
                    <Button className="flex-1 mr-2" variant="outline" disabled>
                      Recording Not Available
                    </Button>
                  )}

                  <Button variant="ghost" size="sm" className="hover:bg-white/80 rounded-xl">
                    <BookOpen className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Join Section */}
        <div className="neumorphic-card p-6 hover-lift">
          <h2 className="text-xl font-bold text-[#333333] mb-4">Quick Join</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter meeting ID or link..."
              className="flex-1 input-field focus:outline-none focus:ring-2 focus:ring-[#4F8FE5]/30"
            />
            <Button className="primary-button">
              <Video className="w-4 h-4 mr-2" />
              Join Meeting
            </Button>
          </div>
        </div>

        {/* Meeting Controls (when in a live class) */}
        {selectedFilter === 'live' && (
          <div className="neumorphic-card p-6 hover-lift">
            <h2 className="text-xl font-bold text-[#333333] mb-4">Meeting Controls</h2>
            <div className="flex items-center justify-center space-x-4">
              <Button variant="outline" size="lg" className="rounded-full w-12 h-12 p-0">
                <Mic className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full w-12 h-12 p-0">
                <Camera className="w-5 h-5" />
              </Button>
              <Button variant="destructive" size="lg" className="rounded-full w-12 h-12 p-0 bg-red-500 hover:bg-red-600">
                <Video className="w-5 h-5" />
              </Button>
            </div>
          </div>
        )}

        {filteredClasses.length === 0 && (
          <div className="neumorphic-card p-12 text-center">
            <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#333333] mb-2">No classes found</h3>
            <p className="text-gray-600">No classes match the selected filter</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}