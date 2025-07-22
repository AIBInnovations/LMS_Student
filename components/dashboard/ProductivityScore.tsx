"use client";

import React from 'react';
import { Trophy, Target, Zap, Award } from 'lucide-react';

const stats = [
  { label: 'Points Earned', value: '2,450', icon: Trophy, color: 'text-yellow-600 bg-yellow-100' },
  { label: 'Goals Completed', value: '18/25', icon: Target, color: 'text-green-600 bg-green-100' },
  { label: 'Study Streak', value: '12 days', icon: Zap, color: 'text-orange-600 bg-orange-100' },
  { label: 'Badges', value: '7', icon: Award, color: 'text-purple-600 bg-purple-100' },
];

export default function ProductivityScore() {
  const totalScore = 2450;
  const maxScore = 3000;
  const percentage = (totalScore / maxScore) * 100;

  return (
    <div className="neumorphic-card rounded-2xl p-6 hover-lift">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Productivity Score</h2>
        <div className="text-right">
          <div className="text-2xl font-bold text-blue-600">{totalScore}</div>
          <div className="text-xs text-gray-500">out of {maxScore}</div>
        </div>
      </div>

      {/* Circular Progress */}
      <div className="flex justify-center mb-6">
        <div className="relative w-24 h-24">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-gray-200"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={`${percentage * 2.51}, 251`}
              className="text-blue-500 transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-blue-600">{Math.round(percentage)}%</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/60 rounded-lg p-3 border border-blue-100/50"
          >
            <div className={`w-8 h-8 rounded-lg ${stat.color} flex items-center justify-center mb-2`}>
              <stat.icon className="w-4 h-4" />
            </div>
            <div className="text-sm font-semibold text-gray-800">{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}