"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { BookOpen, Clock, Play, Star, Search, Grid, List } from 'lucide-react';
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
    rating: 4.8,
    category: 'Programming',
    difficulty: 'Advanced',
    duration: '12 weeks',
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
    status: 'in-progress'
  },
  {
    id: 2,
    title: 'Data Structures & Algorithms',
    instructor: 'Prof. Michael Rodriguez',
    progress: 45,
    totalLessons: 32,
    completedLessons: 14,
    rating: 4.9,
    category: 'Computer Science',
    difficulty: 'Intermediate',
    duration: '16 weeks',
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
    status: 'in-progress'
  },
  {
    id: 3,
    title: 'Database Design & SQL',
    instructor: 'Dr. Sarah Williams',
    progress: 90,
    totalLessons: 20,
    completedLessons: 18,
    rating: 4.7,
    category: 'Database',
    difficulty: 'Beginner',
    duration: '8 weeks',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
    status: 'in-progress'
  },
  {
    id: 4,
    title: 'Machine Learning Fundamentals',
    instructor: 'Dr. Alex Kim',
    progress: 100,
    totalLessons: 28,
    completedLessons: 28,
    rating: 4.9,
    category: 'AI/ML',
    difficulty: 'Advanced',
    duration: '14 weeks',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
    status: 'completed'
  },
  {
    id: 5,
    title: 'Web Design Principles',
    instructor: 'Prof. Lisa Chen',
    progress: 0,
    totalLessons: 16,
    completedLessons: 0,
    rating: 4.6,
    category: 'Design',
    difficulty: 'Beginner',
    duration: '6 weeks',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
    status: 'not-started'
  },
  {
    id: 6,
    title: 'Mobile App Development',
    instructor: 'Dr. James Wilson',
    progress: 30,
    totalLessons: 22,
    completedLessons: 7,
    rating: 4.8,
    category: 'Mobile',
    difficulty: 'Intermediate',
    duration: '10 weeks',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
    status: 'in-progress'
  }
];

const categories = ['All', 'Programming', 'Computer Science', 'Database', 'AI/ML', 'Design', 'Mobile'];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function CoursesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || course.difficulty === selectedDifficulty;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-[#A6E86D] text-white';
      case 'in-progress': return 'bg-[#4F8FE5] text-white';
      case 'not-started': return 'bg-[#B6A4F9] text-white';
      default: return 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'not-started': return 'Not Started';
      default: return 'Unknown';
    }
  };

  return (
    <DashboardLayout currentPage="courses">
      <div className="space-y-6">
        <div className="neumorphic-card p-6 hover-lift">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">My Courses</h1>
              <p className="text-muted-foreground">Track your learning progress and continue your journey</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white/60 dark:bg-white/10 rounded-xl p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="neumorphic-card p-6 hover-lift space-y-6">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-foreground">Search Courses</h4>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by title or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 input-field focus:outline-none focus:ring-2 focus:ring-[#4F8FE5]/30"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr,0.5fr] gap-6">
            <div className="space-y-2 border border-black/20 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-foreground">Filter by Category</h4>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            <div className="space-y-2 border border-black/20 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-foreground">Filter by Difficulty</h4>
              <div className="flex flex-wrap gap-2">
                {difficulties.map(level => (
                  <Button
                    key={level}
                    variant={selectedDifficulty === level ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setSelectedDifficulty(level)}
                  >
                    {level}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
          {filteredCourses.map(course => (
            <div key={course.id} className="neumorphic-card p-6 hover-lift">
              {viewMode === 'grid' ? (
                <div className="space-y-4">
                  <div className="relative">
                    <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-xl shadow-lg" />
                    <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                      {getStatusText(course.status)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">by {course.instructor}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <BookOpen className="w-3 h-3" /><span>{course.completedLessons}/{course.totalLessons} lessons</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" /><span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /><span>{course.rating}</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">Progress</span>
                        <span className="text-sm text-muted-foreground">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    <Button className="w-full">
                      <Play className="w-4 h-4 mr-2" />
                      {course.status === 'not-started' ? 'Start Course' : 'Continue Learning'}
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <img src={course.image} alt={course.title} className="w-full sm:w-28 h-36 sm:h-20 object-cover rounded-xl shadow-lg flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-2">
                      <h3 className="text-lg font-bold text-foreground truncate">{course.title}</h3>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>{getStatusText(course.status)}</div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">by {course.instructor}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1"><BookOpen className="w-3 h-3" /><span>{course.completedLessons}/{course.totalLessons} lessons</span></div>
                      <div className="flex items-center space-x-1"><Clock className="w-3 h-3" /><span>{course.duration}</span></div>
                      <div className="flex items-center space-x-1"><Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /><span>{course.rating}</span></div>
                      <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">{course.difficulty}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <div className="flex-1">
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      <div className="flex justify-between items-center sm:justify-normal sm:space-x-4">
                        <span className="text-sm text-muted-foreground">{course.progress}%</span>
                        <Button size="sm">
                          <Play className="w-4 h-4 mr-1" />{course.status === 'not-started' ? 'Start' : 'Continue'}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="neumorphic-card p-12 text-center">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No courses found</h3>
            <p className="text-muted-foreground">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
