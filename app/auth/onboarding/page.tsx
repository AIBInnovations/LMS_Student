'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { BookOpen, ArrowRight, ArrowLeft, Check, User, Target, BookMarked, Calendar, Star, Trophy } from 'lucide-react';

const Onboarding = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState({
    interests: [] as string[],
    experience: '',
    goals: [] as string[],
    schedule: '',
    profilePicture: null as File | null
  });

  const steps = [
    { title: 'Welcome to EduPanel!', subtitle: "Let's personalize your learning experience", component: 'welcome' },
    { title: 'What are your interests?', subtitle: "Select topics you'd like to learn about", component: 'interests' },
    { title: "What's your experience level?", subtitle: 'Help us recommend the right courses for you', component: 'experience' },
    { title: 'What are your learning goals?', subtitle: 'Tell us what you want to achieve', component: 'goals' },
    { title: 'When do you prefer to learn?', subtitle: 'Set your ideal learning schedule', component: 'schedule' },
    { title: "You're all set!", subtitle: 'Ready to start your learning journey', component: 'complete' }
  ];

  const interests = [
    { id: 'web-dev', label: 'Web Development', icon: '💻' },
    { id: 'data-science', label: 'Data Science', icon: '📊' },
    { id: 'design', label: 'UI/UX Design', icon: '🎨' },
    { id: 'mobile-dev', label: 'Mobile Development', icon: '📱' },
    { id: 'ai-ml', label: 'AI & Machine Learning', icon: '🤖' },
    { id: 'business', label: 'Business & Marketing', icon: '📈' },
    { id: 'photography', label: 'Photography', icon: '📸' },
    { id: 'music', label: 'Music Production', icon: '🎵' }
  ];

  const goals = [
    { id: 'career-change', label: 'Change Career', icon: '🚀' },
    { id: 'skill-upgrade', label: 'Upgrade Skills', icon: '⬆️' },
    { id: 'certification', label: 'Get Certified', icon: '🏆' },
    { id: 'hobby', label: 'Personal Interest', icon: '❤️' },
    { id: 'freelance', label: 'Start Freelancing', icon: '💼' },
    { id: 'startup', label: 'Build a Startup', icon: '🌟' }
  ];

  const handleInterestToggle = (interestId: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter((id) => id !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  const handleGoalToggle = (goalId: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goalId)
        ? prev.goals.filter((id) => id !== goalId)
        : [...prev.goals, goalId]
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      router.push('/dashboard'); // ✅ Navigate on completion
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  
  const renderStepContent = () => {
    const step = steps[currentStep];

    switch (step.component) {
      case 'welcome':
        return (
          <div className="text-center space-y-8">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <BookOpen className="w-16 h-16 text-white" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">Welcome to EduPanel!</h2>
              <p className="text-lg text-gray-600 max-w-md mx-auto">
                We're excited to help you start your learning journey. Let's set up your profile to give you the best experience.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <BookMarked className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600">500+ Courses</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-green-200 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-sm text-gray-600">Expert Instructors</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Trophy className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-sm text-gray-600">Certificates</p>
              </div>
            </div>
          </div>
        );

      case 'interests':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Target className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <p className="text-gray-600">Select 3-5 topics that interest you most</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest) => (
                <button
                  key={interest.id}
                  onClick={() => handleInterestToggle(interest.id)}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    formData.interests.includes(interest.id)
                      ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md'
                      : 'border-gray-200 bg-white/60 hover:border-blue-300 hover:shadow-sm'
                  }`}
                >
                  <div className="text-2xl mb-2">{interest.icon}</div>
                  <div className="font-medium text-gray-800">{interest.label}</div>
                </button>
              ))}
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <User className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <p className="text-gray-600">This helps us recommend the right difficulty level</p>
            </div>
            <div className="space-y-4">
              {[
                { id: 'beginner', label: 'Beginner', desc: 'New to most topics' },
                { id: 'intermediate', label: 'Intermediate', desc: 'Some experience in my areas of interest' },
                { id: 'advanced', label: 'Advanced', desc: 'Experienced and looking to specialize' }
              ].map((level) => (
                <button
                  key={level.id}
                  onClick={() => setFormData(prev => ({ ...prev, experience: level.id }))}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                    formData.experience === level.id
                      ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md'
                      : 'border-gray-200 bg-white/60 hover:border-blue-300 hover:shadow-sm'
                  }`}
                >
                  <div className="font-medium text-gray-800 mb-1">{level.label}</div>
                  <div className="text-sm text-gray-600">{level.desc}</div>
                </button>
              ))}
            </div>
          </div>
        );

      case 'goals':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Trophy className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <p className="text-gray-600">What do you want to achieve? (Select all that apply)</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {goals.map((goal) => (
                <button
                  key={goal.id}
                  onClick={() => handleGoalToggle(goal.id)}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    formData.goals.includes(goal.id)
                      ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md'
                      : 'border-gray-200 bg-white/60 hover:border-blue-300 hover:shadow-sm'
                  }`}
                >
                  <div className="text-2xl mb-2">{goal.icon}</div>
                  <div className="font-medium text-gray-800">{goal.label}</div>
                </button>
              ))}
            </div>
          </div>
        );

      case 'schedule':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Calendar className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <p className="text-gray-600">When do you prefer to learn?</p>
            </div>
            <div className="space-y-4">
              {[
                { id: 'morning', label: 'Morning Person', desc: 'I learn best in the morning (6AM - 12PM)' },
                { id: 'afternoon', label: 'Afternoon Learner', desc: 'I prefer afternoon sessions (12PM - 6PM)' },
                { id: 'evening', label: 'Evening Student', desc: 'I study better in the evening (6PM - 10PM)' },
                { id: 'flexible', label: 'Flexible Schedule', desc: 'I can learn anytime that works' }
              ].map((schedule) => (
                <button
                  key={schedule.id}
                  onClick={() => setFormData(prev => ({ ...prev, schedule: schedule.id }))}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                    formData.schedule === schedule.id
                      ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md'
                      : 'border-gray-200 bg-white/60 hover:border-blue-300 hover:shadow-sm'
                  }`}
                >
                  <div className="font-medium text-gray-800 mb-1">{schedule.label}</div>
                  <div className="text-sm text-gray-600">{schedule.desc}</div>
                </button>
              ))}
            </div>
          </div>
        );

      case 'complete':
        return (
          <div className="text-center space-y-8">
            <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <Check className="w-16 h-16 text-white" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">You're All Set!</h2>
              <p className="text-lg text-gray-600 max-w-md mx-auto">
                Your profile is complete. We've curated personalized course recommendations based on your preferences.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-semibold text-gray-800 mb-4">Your Learning Profile:</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Interests:</strong> {formData.interests.length} topics selected</p>
                <p><strong>Experience:</strong> {formData.experience}</p>
                <p><strong>Goals:</strong> {formData.goals.length} goals set</p>
                <p><strong>Schedule:</strong> {formData.schedule} learner</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600">Step {currentStep + 1} of {steps.length}</span>
            <span className="text-sm text-gray-600">{Math.round(((currentStep + 1) / steps.length) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-gradient-to-br from-white/80 to-blue-50/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{steps[currentStep].title}</h1>
            <p className="text-gray-600">{steps[currentStep].subtitle}</p>
          </div>

          {/* Step Content */}
          <div className="mb-8">
            {renderStepContent()}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center space-x-2 px-6 py-3 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:bg-white/80 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index <= currentStep ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextStep}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span>{currentStep === steps.length - 1 ? 'Get Started' : 'Next'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;