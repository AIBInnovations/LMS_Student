"use client";

import React from 'react';
import { BookOpen, Clock, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const courses = [
  {
    id: 1,
    title: 'Advanced JavaScript & React',
    instructor: 'Dr. Emily Chen',
    progress: 75,
    totalLessons: 24,
    completedLessons: 18,
    nextLesson: 'React Hooks Deep Dive',
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
  },
  {
    id: 2,
    title: 'Data Structures & Algorithms',
    instructor: 'Prof. Michael Rodriguez',
    progress: 45,
    totalLessons: 32,
    completedLessons: 14,
    nextLesson: 'Binary Trees Implementation',
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
  },
  {
    id: 3,
    title: 'Database Design & SQL',
    instructor: 'Dr. Sarah Williams',
    progress: 90,
    totalLessons: 20,
    completedLessons: 18,
    nextLesson: 'Database Optimization',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
  }
];

export default function EnrolledCourses() {
  return (
    <div className="neumorphic-card rounded-2xl p-6 hover-lift">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">My Courses</h2>
        <span className="text-sm text-gray-500 bg-blue-50 px-3 py-1 rounded-full">
          {courses.length} Active
        </span>
      </div>

      <div className="space-y-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white/60 rounded-xl p-4 border border-blue-100/50 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <img
                src={course.image}
                alt={course.title}
                className="w-20 h-16 rounded-lg object-cover shadow-sm"
              />
              
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-800 mb-1 truncate">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  by {course.instructor}
                </p>
                
                <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-3 h-3" />
                    <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>Next: {course.nextLesson}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex-1 mr-4">
                    <Progress value={course.progress} className="h-2" />
                    <span className="text-xs text-gray-500 mt-1">
                      {course.progress}% complete
                    </span>
                  </div>
                  
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg shadow-blue-200/50"
                  >
                    <Play className="w-4 h-4 mr-1" />
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}