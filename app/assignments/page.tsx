"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { FileText, Calendar, Clock, CheckCircle, AlertCircle, Upload, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const assignments = [
  {
    id: 1,
    title: 'React Component Architecture Project',
    course: 'Advanced JavaScript & React',
    instructor: 'Dr. Emily Chen',
    dueDate: '2024-01-20',
    submittedDate: null,
    status: 'pending',
    priority: 'high',
    description: 'Build a scalable React application with proper component architecture and state management.',
    points: 100,
    submissionType: 'file',
    requirements: ['React 18+', 'TypeScript', 'State Management', 'Component Testing']
  },
  {
    id: 2,
    title: 'Database Normalization Analysis',
    course: 'Database Design & SQL',
    instructor: 'Dr. Sarah Williams',
    dueDate: '2024-01-18',
    submittedDate: '2024-01-17',
    status: 'submitted',
    priority: 'medium',
    description: 'Analyze and normalize a given database schema to 3NF.',
    points: 75,
    submissionType: 'file',
    grade: 85,
    feedback: 'Good analysis, but could improve on explaining the normalization steps.'
  },
  {
    id: 3,
    title: 'Algorithm Complexity Report',
    course: 'Data Structures & Algorithms',
    instructor: 'Prof. Michael Rodriguez',
    dueDate: '2024-01-25',
    submittedDate: null,
    status: 'pending',
    priority: 'medium',
    description: 'Write a comprehensive report on time and space complexity of sorting algorithms.',
    points: 80,
    submissionType: 'text',
    requirements: ['Big O Analysis', 'Empirical Testing', 'Comparison Charts']
  },
  {
    id: 4,
    title: 'Machine Learning Model Implementation',
    course: 'Machine Learning Fundamentals',
    instructor: 'Dr. Alex Kim',
    dueDate: '2024-01-15',
    submittedDate: '2024-01-14',
    status: 'graded',
    priority: 'high',
    description: 'Implement and train a neural network for image classification.',
    points: 120,
    submissionType: 'file',
    grade: 95,
    feedback: 'Excellent implementation! Great attention to hyperparameter tuning.'
  },
  {
    id: 5,
    title: 'UI/UX Design Prototype',
    course: 'Web Design Principles',
    instructor: 'Prof. Lisa Chen',
    dueDate: '2024-01-30',
    submittedDate: null,
    status: 'pending',
    priority: 'low',
    description: 'Create a high-fidelity prototype for a mobile application.',
    points: 90,
    submissionType: 'link',
    requirements: ['Figma/Adobe XD', 'User Flow', 'Responsive Design']
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'pending':
      return 'bg-orange-100 text-orange-700 border-orange-200';
    case 'submitted':
      return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'graded':
      return 'bg-green-100 text-green-700 border-green-200';
    case 'overdue':
      return 'bg-red-100 text-red-700 border-red-200';
    default:
      return 'bg-gray-100 text-gray-700 border-gray-200';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'bg-red-500';
    case 'medium':
      return 'bg-yellow-500';
    case 'low':
      return 'bg-green-500';
    default:
      return 'bg-gray-500';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'pending':
      return <Clock className="w-4 h-4" />;
    case 'submitted':
      return <Upload className="w-4 h-4" />;
    case 'graded':
      return <CheckCircle className="w-4 h-4" />;
    case 'overdue':
      return <AlertCircle className="w-4 h-4" />;
    default:
      return <FileText className="w-4 h-4" />;
  }
};

export default function AssignmentsPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedAssignment, setSelectedAssignment] = useState<number | null>(null);

  const filteredAssignments = assignments.filter(assignment => {
    if (selectedFilter === 'all') return true;
    return assignment.status === selectedFilter;
  });

  const filters = [
    { key: 'all', label: 'All Assignments', count: assignments.length },
    { key: 'pending', label: 'Pending', count: assignments.filter(a => a.status === 'pending').length },
    { key: 'submitted', label: 'Submitted', count: assignments.filter(a => a.status === 'submitted').length },
    { key: 'graded', label: 'Graded', count: assignments.filter(a => a.status === 'graded').length },
  ];

  return (
    <DashboardLayout currentPage="assignments">
      <div className="space-y-6">
        {/* Header */}
        <div className="neumorphic-card p-6 hover-lift">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-[#333333] mb-2">Assignments & Projects</h1>
              <p className="text-gray-600">Manage your coursework and track submission deadlines</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button className="secondary-button">
                <Upload className="w-4 h-4 mr-2" />
                Submit Assignment
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

        {/* Assignments List */}
        <div className="space-y-4">
          {filteredAssignments.map((assignment) => {
            const dueDate = new Date(assignment.dueDate);
            const today = new Date();
            const isOverdue = dueDate < today && assignment.status === 'pending';
            const daysUntilDue = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

            return (
              <div key={assignment.id} className="neumorphic-card p-6 hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className={`w-1 h-16 rounded-full ${getPriorityColor(assignment.priority)}`}></div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-bold text-[#333333] truncate">{assignment.title}</h3>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(assignment.status)}`}>
                          <div className="flex items-center space-x-1">
                            {getStatusIcon(assignment.status)}
                            <span className="capitalize">{assignment.status}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-2">{assignment.course} • {assignment.instructor}</p>
                      <p className="text-gray-700 mb-3">{assignment.description}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>Due: {dueDate.toLocaleDateString()}</span>
                          {assignment.status === 'pending' && (
                            <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                              isOverdue ? 'bg-red-100 text-red-700' : 
                              daysUntilDue <= 3 ? 'bg-orange-100 text-orange-700' : 
                              'bg-blue-100 text-blue-700'
                            }`}>
                              {isOverdue ? 'Overdue' : `${daysUntilDue} days left`}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-1">
                          <FileText className="w-4 h-4" />
                          <span>{assignment.points} points</span>
                        </div>
                        
                        {assignment.submittedDate && (
                          <div className="flex items-center space-x-1">
                            <CheckCircle className="w-4 h-4" />
                            <span>Submitted: {new Date(assignment.submittedDate).toLocaleDateString()}</span>
                          </div>
                        )}
                        
                        {assignment.grade && (
                          <div className="flex items-center space-x-1">
                            <span className="font-semibold text-[#A6E86D]">Grade: {assignment.grade}/{assignment.points}</span>
                          </div>
                        )}
                      </div>
                      
                      {assignment.requirements && (
                        <div className="mt-3">
                          <p className="text-sm font-medium text-gray-700 mb-2">Requirements:</p>
                          <div className="flex flex-wrap gap-2">
                            {assignment.requirements.map((req, index) => (
                              <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                                {req}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {assignment.feedback && (
                        <div className="mt-3 p-3 bg-green-50 rounded-xl">
                          <p className="text-sm font-medium text-green-800 mb-1">Instructor Feedback:</p>
                          <p className="text-sm text-green-700">{assignment.feedback}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2 ml-4">
                    {assignment.status === 'pending' && (
                      <Button size="sm" className="primary-button">
                        <Upload className="w-4 h-4 mr-1" />
                        Submit
                      </Button>
                    )}
                    
                    {assignment.status === 'submitted' && (
                      <Button size="sm" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    )}
                    
                    {assignment.status === 'graded' && (
                      <Button size="sm" variant="outline" className="border-green-200 text-green-600 hover:bg-green-50">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    )}
                    
                    <Button size="sm" variant="ghost" className="hover:bg-white/80">
                      <Eye className="w-4 h-4 mr-1" />
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredAssignments.length === 0 && (
          <div className="neumorphic-card p-12 text-center">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#333333] mb-2">No assignments found</h3>
            <p className="text-gray-600">No assignments match the selected filter</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}