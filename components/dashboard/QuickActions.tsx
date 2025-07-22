"use client";

import React from 'react';
import { Video, FileText, MessageCircle, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const quickActions = [
  {
    icon: Video,
    label: 'Join Live Class',
    description: 'React Advanced Patterns',
    time: 'Starting in 15 min',
    color: 'bg-gradient-to-r from-green-500 to-green-600',
    textColor: 'text-white'
  },
  {
    icon: FileText,
    label: 'Submit Assignment',
    description: 'Database Project',
    time: 'Due in 2 days',
    color: 'bg-gradient-to-r from-orange-500 to-orange-600',
    textColor: 'text-white'
  },
  {
    icon: MessageCircle,
    label: 'Discussion Forum',
    description: '3 new replies',
    time: 'Active now',
    color: 'bg-gradient-to-r from-blue-500 to-blue-600',
    textColor: 'text-white'
  }
];

export default function QuickActions() {
  return (
    <div className="neumorphic-card rounded-2xl p-6 hover-lift">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Quick Actions</h2>
        <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-3">
        {quickActions.map((action, index) => (
          <div
            key={index}
            className={`${action.color} ${action.textColor} rounded-xl p-4 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105`}
          >
            <div className="flex items-start space-x-3">
              <div className="bg-white/20 rounded-lg p-2">
                <action.icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold mb-1">{action.label}</h3>
                <p className="text-sm opacity-90 mb-1">{action.description}</p>
                <p className="text-xs opacity-75">{action.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}