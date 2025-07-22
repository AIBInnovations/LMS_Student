"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, CheckCircle, BookOpen, Target, Users, Calendar, Award, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [preferences, setPreferences] = useState({
    learningGoals: [] as string[],
    studyTime: '',
    subjects: [] as string[],
    notifications: {
      assignments: true,
      liveClasses: true,
      announcements: true,
      achievements: false
    }
  });

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      window.location.href = '/';
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleArrayItem = (array: string[], item: string, setter: (items: string[]) => void) => {
    if (array.includes(item)) {
      setter(array.filter(i => i !== item));
    } else {
      setter([...array, item]);
    }
  };

  const learningGoals = [
    { id: 'career', label: 'Advance my career', icon: Target, color: 'bg-[#4F8FE5]' },
    { id: 'degree', label: 'Complete my degree', icon: Award, color: 'bg-[#A6E86D]' },
    { id: 'skills', label: 'Learn new skills', icon: Sparkles, color: 'bg-[#B6A4F9]' },
    { id: 'certification', label: 'Get certified', icon: Award, color: 'bg-orange-400' },
    { id: 'hobby', label: 'Personal interest', icon: BookOpen, color: 'bg-pink-400' },
    { id: 'networking', label: 'Network with peers', icon: Users, color: 'bg-teal-400' }
  ];

  const subjects = [
    'Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'Biology',
    'Engineering', 'Business', 'Economics', 'Psychology', 'Literature',
    'History', 'Art & Design', 'Music', 'Languages', 'Philosophy'
  ];

  const studyTimeOptions = [
    { value: '1-2', label: '1-2 hours per day' },
    { value: '3-4', label: '3-4 hours per day' },
    { value: '5-6', label: '5-6 hours per day' },
    { value: '7+', label: '7+ hours per day' },
    { value: 'weekend', label: 'Weekends only' },
    { value: 'flexible', label: 'Flexible schedule' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Progress Bar */}
        <div className="neumorphic-card p-6 mb-8 hover-lift">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-[#333333]">Welcome to EduFlow!</h1>
            <span className="text-sm text-gray-500">Step {currentStep} of {totalSteps}</span>
          </div>
          <div className="w-full bg-[#E0E0E0]/30 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-[#4F8FE5] to-[#A6E86D] h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        <div className="neumorphic-card p-8 hover-lift">
          {/* Step 1: Welcome & Goals */}
          {currentStep === 1 && (
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-[#4F8FE5] to-[#A6E86D] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-200/50">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#333333] mb-4">Let's personalize your learning experience!</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                We'll help you set up your dashboard and preferences to make the most of your educational journey.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#333333] mb-6">What are your learning goals?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {learningGoals.map((goal) => (
                    <div
                      key={goal.id}
                      onClick={() => toggleArrayItem(preferences.learningGoals, goal.id, (items) => 
                        setPreferences({...preferences, learningGoals: items})
                      )}
                      className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        preferences.learningGoals.includes(goal.id)
                          ? 'border-[#4F8FE5] bg-gradient-to-r from-[#DCEEFF] to-[#EEF4FF] shadow-lg shadow-blue-200/30'
                          : 'border-[#E0E0E0]/50 bg-white/60 hover:border-[#4F8FE5]/50'
                      }`}
                    >
                      <div className={`w-12 h-12 ${goal.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                        <goal.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-[#333333] text-center">{goal.label}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Study Schedule */}
          {currentStep === 2 && (
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#A6E86D] to-[#B6A4F9] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-200/50">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#333333] mb-4">How much time can you dedicate to learning?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                This helps us recommend the right pace for your courses and send you helpful reminders.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {studyTimeOptions.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => setPreferences({...preferences, studyTime: option.value})}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      preferences.studyTime === option.value
                        ? 'border-[#A6E86D] bg-gradient-to-r from-green-50 to-green-100 shadow-lg shadow-green-200/30'
                        : 'border-[#E0E0E0]/50 bg-white/60 hover:border-[#A6E86D]/50'
                    }`}
                  >
                    <div className="w-12 h-12 bg-[#A6E86D] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-[#333333] text-center">{option.label}</h4>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Subject Interests */}
          {currentStep === 3 && (
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#B6A4F9] to-[#4F8FE5] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-purple-200/50">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#333333] mb-4">What subjects interest you most?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Select your areas of interest so we can recommend relevant courses and content.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
                {subjects.map((subject) => (
                  <div
                    key={subject}
                    onClick={() => toggleArrayItem(preferences.subjects, subject, (items) => 
                      setPreferences({...preferences, subjects: items})
                    )}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg text-sm ${
                      preferences.subjects.includes(subject)
                        ? 'border-[#B6A4F9] bg-gradient-to-r from-purple-50 to-purple-100 shadow-lg shadow-purple-200/30'
                        : 'border-[#E0E0E0]/50 bg-white/60 hover:border-[#B6A4F9]/50'
                    }`}
                  >
                    <span className="font-medium text-[#333333]">{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Notifications */}
          {currentStep === 4 && (
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-orange-200/50">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#333333] mb-4">Almost done! Set your notification preferences</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Choose what notifications you'd like to receive to stay on track with your learning.
              </p>

              <div className="max-w-md mx-auto space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 bg-white/60 rounded-xl border border-[#E0E0E0]/50">
                  <div className="text-left">
                    <h4 className="font-semibold text-[#333333]">Assignment Reminders</h4>
                    <p className="text-sm text-gray-600">Get notified about upcoming deadlines</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.notifications.assignments}
                      onChange={(e) => setPreferences({
                        ...preferences,
                        notifications: {...preferences.notifications, assignments: e.target.checked}
                      })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4F8FE5]/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4F8FE5]"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/60 rounded-xl border border-[#E0E0E0]/50">
                  <div className="text-left">
                    <h4 className="font-semibold text-[#333333]">Live Class Alerts</h4>
                    <p className="text-sm text-gray-600">Reminders for upcoming live sessions</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.notifications.liveClasses}
                      onChange={(e) => setPreferences({
                        ...preferences,
                        notifications: {...preferences.notifications, liveClasses: e.target.checked}
                      })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4F8FE5]/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4F8FE5]"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/60 rounded-xl border border-[#E0E0E0]/50">
                  <div className="text-left">
                    <h4 className="font-semibold text-[#333333]">Announcements</h4>
                    <p className="text-sm text-gray-600">Important updates from instructors</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.notifications.announcements}
                      onChange={(e) => setPreferences({
                        ...preferences,
                        notifications: {...preferences.notifications, announcements: e.target.checked}
                      })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4F8FE5]/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4F8FE5]"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/60 rounded-xl border border-[#E0E0E0]/50">
                  <div className="text-left">
                    <h4 className="font-semibold text-[#333333]">Achievement Badges</h4>
                    <p className="text-sm text-gray-600">Celebrate your learning milestones</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.notifications.achievements}
                      onChange={(e) => setPreferences({
                        ...preferences,
                        notifications: {...preferences.notifications, achievements: e.target.checked}
                      })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4F8FE5]/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4F8FE5]"></div>
                  </label>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#DCEEFF] to-[#EEF4FF] rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-[#333333] mb-2">🎉 You're all set!</h3>
                <p className="text-gray-600">
                  Your personalized dashboard is ready. You can always change these preferences later in your settings.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-8 border-t border-[#E0E0E0]/30">
            <Button
              onClick={handleBack}
              variant="outline"
              className={`border-[#E0E0E0]/50 hover:bg-white/80 rounded-xl ${currentStep === 1 ? 'invisible' : ''}`}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>

            <div className="flex space-x-2">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i + 1 <= currentStep ? 'bg-[#4F8FE5]' : 'bg-[#E0E0E0]/50'
                  }`}
                />
              ))}
            </div>

            <Button onClick={handleNext} className="primary-button">
              {currentStep === totalSteps ? (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Start Learning
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}