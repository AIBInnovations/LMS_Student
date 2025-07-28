"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { BookOpen, Clock, Play, Star, Filter, Search, Grid, List } from 'lucide-react';
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
      case 'completed':
        return 'bg-[#A6E86D] text-white';
      case 'in-progress':
        return 'bg-[#4F8FE5] text-white';
      case 'not-started':
        return 'bg-[#B6A4F9] text-white';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'not-started':
        return 'Not Started';
      default:
        return 'Unknown';
    }
  };

  return (
    <DashboardLayout currentPage="courses">
      <div className="space-y-6">
        {/* Header */}
        <div className="neumorphic-card p-6 hover-lift">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-[#333333] mb-2">My Courses</h1>
              <p className="text-gray-600">Track your learning progress and continue your journey</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white/60 rounded-xl p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'primary-button' : 'hover:bg-white/80'}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'primary-button' : 'hover:bg-white/80'}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="neumorphic-card p-6 hover-lift space-y-6">
  {/* Search Section */}
  <div className="space-y-2">
    <h4 className="text-sm font-semibold text-gray-700">Search Courses</h4>
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

  {/* Filters Section */}
  <div className="grid grid-cols-1 md:grid-cols-[1fr,0.5fr] gap-6">
    {/* Category Filter */}
    <div className="space-y-2 border border-black/200 rounded-xl p-4">
      <h4 className="text-sm font-semibold text-gray-700">Filter by Category</h4>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? 'primary-button' : 'hover:bg-white/80 rounded-xl'}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>

    {/* Difficulty Filter */}
    <div className="space-y-2 border border-black/200 rounded-xl p-4">
      <h4 className="text-sm font-semibold text-gray-700">Filter by Difficulty</h4>
      <div className="flex flex-wrap gap-2">
        {difficulties.map((difficulty) => (
          <Button
            key={difficulty}
            variant={selectedDifficulty === difficulty ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setSelectedDifficulty(difficulty)}
            className={selectedDifficulty === difficulty ? 'primary-button' : 'hover:bg-white/80 rounded-xl'}
          >
            {difficulty}
          </Button>
        ))}
      </div>
    </div>
  </div>
</div>


        {/* Courses Grid/List */}
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
          {filteredCourses.map((course) => (
            <div key={course.id} className="neumorphic-card p-6 hover-lift">
              {viewMode === 'grid' ? (
                <div className="space-y-4">
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-xl shadow-lg"
                    />
                    <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                      {getStatusText(course.status)}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-[#333333] mb-2">{course.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">by {course.instructor}</p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <BookOpen className="w-3 h-3" />
                        <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-[#333333]">Progress</span>
                        <span className="text-sm text-gray-600">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>

                    <Button className="w-full primary-button">
                      <Play className="w-4 h-4 mr-2" />
                      {course.status === 'not-started' ? 'Start Course' : 'Continue Learning'}
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-6">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-24 h-16 object-cover rounded-xl shadow-lg flex-shrink-0"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-[#333333] truncate">{course.title}</h3>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)} ml-4`}>
                        {getStatusText(course.status)}
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2">by {course.instructor}</p>
                    
                    <div className="flex items-center space-x-6 text-xs text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <BookOpen className="w-3 h-3" />
                        <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                      <span className="bg-gray-100 px-2 py-1 rounded-full">{course.difficulty}</span>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex-1">
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      <span className="text-sm text-gray-600 w-12">{course.progress}%</span>
                      <Button size="sm" className="primary-button">
                        <Play className="w-4 h-4 mr-1" />
                        {course.status === 'not-started' ? 'Start' : 'Continue'}
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="neumorphic-card p-12 text-center">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#333333] mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}