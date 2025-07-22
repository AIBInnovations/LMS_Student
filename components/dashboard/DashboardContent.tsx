"use client";

import React from 'react';
import EnrolledCourses from './EnrolledCourses';
import TaskProgress from './TaskProgress';
import UpcomingClasses from './UpcomingClasses';
import ProductivityScore from './ProductivityScore';
import Announcements from './Announcements';
import Certificates from './Certificates';
import QuickActions from './QuickActions';
import AssessmentCard from './AssessmentCard';

export default function DashboardContent() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Sarah! 👋</h1>
        <p className="text-blue-100 text-lg">Ready to continue your learning journey today?</p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-6">
          <EnrolledCourses />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TaskProgress />
            <ProductivityScore />
          </div>
          <UpcomingClasses />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-4 space-y-6">
          <QuickActions />
          <Announcements />
          <Certificates />
          <AssessmentCard />
        </div>
      </div>
    </div>
  );
}