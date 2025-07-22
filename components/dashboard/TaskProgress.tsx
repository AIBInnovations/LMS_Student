"use client";

import React, { useState } from 'react';
import { Calendar, TrendingUp, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';

const weeklyData = [
  { day: 'Mon', completed: 8, total: 10 },
  { day: 'Tue', completed: 6, total: 8 },
  { day: 'Wed', completed: 10, total: 12 },
  { day: 'Thu', completed: 7, total: 9 },
  { day: 'Fri', completed: 9, total: 10 },
  { day: 'Sat', completed: 4, total: 6 },
  { day: 'Sun', completed: 5, total: 7 },
];

export default function TaskProgress() {
  const [filter, setFilter] = useState('weekly');
  const totalCompleted = weeklyData.reduce((sum, day) => sum + day.completed, 0);
  const totalTasks = weeklyData.reduce((sum, day) => sum + day.total, 0);
  const completionRate = Math.round((totalCompleted / totalTasks) * 100);
  const streak = 12; // Example streak

  return (
    <div className="neumorphic-card rounded-2xl p-6 hover-lift">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Learning Progress</h2>
        <div className="flex space-x-2">
          <Button
            variant={filter === 'weekly' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setFilter('weekly')}
            className={filter === 'weekly' ? 'bg-blue-500 hover:bg-blue-600' : ''}
          >
            Weekly
          </Button>
          <Button
            variant={filter === 'monthly' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setFilter('monthly')}
            className={filter === 'monthly' ? 'bg-blue-500 hover:bg-blue-600' : ''}
          >
            Monthly
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4">
          <div className="flex items-center space-x-2 mb-1">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">Completion</span>
          </div>
          <p className="text-2xl font-bold text-green-800">{completionRate}%</p>
        </div>
        
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-4">
          <div className="flex items-center space-x-2 mb-1">
            <Flame className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-700">Streak</span>
          </div>
          <p className="text-2xl font-bold text-orange-800">{streak} days</p>
        </div>
      </div>

      {/* Progress Chart */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-600 mb-3">Daily Progress</h3>
        {weeklyData.map((day, index) => (
          <div key={day.day} className="flex items-center space-x-3">
            <span className="text-xs font-medium text-gray-500 w-8">{day.day}</span>
            <div className="flex-1 bg-gray-100 rounded-full h-2 relative">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(day.completed / day.total) * 100}%` }}
              />
            </div>
            <span className="text-xs text-gray-500 w-12 text-right">
              {day.completed}/{day.total}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}