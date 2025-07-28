"use client";

import React from 'react';
import { Award, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
  {
    id: 1,
    title: 'JavaScript Fundamentals',
    issueDate: 'Dec 2023',
    grade: 'A+',
    image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&dpr=2',
    status: 'earned'
  },
  {
    id: 2,
    title: 'React Development',
    issueDate: 'Nov 2023',
    grade: 'A',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&dpr=2',
    status: 'earned'
  },
  {
    id: 3,
    title: 'Database Design',
    progress: 85,
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&dpr=2',
    status: 'in-progress'
  }
];

const badges = [
  { name: 'Quick Learner', icon: '🚀', color: 'bg-blue-100 text-blue-700' },
  { name: 'Consistent', icon: '⚡', color: 'bg-yellow-100 text-yellow-700' },
  { name: 'Top Performer', icon: '🏆', color: 'bg-purple-100 text-purple-700' },
  { name: 'Team Player', icon: '🤝', color: 'bg-green-100 text-green-700' },
];

export default function Certificates() {
  const earnedCount = certificates.filter(cert => cert.status === 'earned').length;

  return (
    <div className="neumorphic-card rounded-2xl p-6 hover-lift">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">Achievements</h2>
        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
          {earnedCount} earned
        </span>
      </div>

      {/* Certificates */}
      <div className="space-y-3 mb-6">
        <h3 className="text-sm font-semibold text-muted-foreground">Certificates</h3>
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-muted rounded-lg p-3 border border-border hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center space-x-3">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-12 h-9 rounded object-cover"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-foreground text-sm truncate">
                  {cert.title}
                </h4>
                {cert.status === 'earned' ? (
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">{cert.issueDate} • Grade: {cert.grade}</p>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Download className="w-3 h-3 text-blue-600" />
                    </Button>
                  </div>
                ) : (
                  <div className="mt-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-muted-foreground">{cert.progress}% complete</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1">
                      <div 
                        className="bg-blue-500 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${cert.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Badges */}
      <div>
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">Badges</h3>
        <div className="grid grid-cols-2 gap-2">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`${badge.color} rounded-lg p-2 text-center text-xs font-medium`}
            >
              <span className="text-base mb-1 block">{badge.icon}</span>
              {badge.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
