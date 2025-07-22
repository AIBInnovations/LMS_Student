'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BookOpen, Mail, Lock, Eye, EyeOff, ArrowRight, Users, Award, Video } from 'lucide-react';

const LoginPage = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard'); // Redirect to dashboard after login
    }, 1500);
  };

  const features = [
    { icon: BookOpen, title: 'Interactive Courses', description: 'Access hundreds of courses with hands-on projects' },
    { icon: Video, title: 'Live Classes', description: 'Join live sessions with expert instructors' },
    { icon: Award, title: 'Certificates', description: 'Earn verified certificates upon completion' },
    { icon: Users, title: 'Community', description: 'Connect with learners worldwide' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
        <div className="w-full max-w-md">
          {/* Logo and Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
            <p className="text-gray-600">Sign in to continue your learning journey</p>
          </div>

          {/* Login Form */}
          <div className="bg-gradient-to-br from-white/80 to-blue-50/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-4 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-300 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-12 py-4 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-300 transition-all duration-200"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center space-x-2 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span className="font-medium">Sign In</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-gray-200/50"></div>
              <span className="px-4 text-sm text-gray-500">or</span>
              <div className="flex-1 border-t border-gray-200/50"></div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center space-x-3 py-3 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:bg-white/80 transition-all duration-200">
                <div className="w-5 h-5 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
                <span className="text-gray-700 font-medium">Continue with Google</span>
              </button>

              <button className="w-full flex items-center justify-center space-x-3 py-3 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:bg-white/80 transition-all duration-200">
                <div className="w-5 h-5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">f</span>
                </div>
                <span className="text-gray-700 font-medium">Continue with Facebook</span>
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don&apos;t have an account?{' '}
                <Link href="/auth/register" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                  Sign up for free
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Features & Branding */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm items-center justify-center p-8">
        <div className="max-w-lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Transform Your Learning Experience
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Join thousands of students worldwide and unlock your potential with our comprehensive learning platform.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-white/60 to-blue-50/30 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 text-center">
            <div className="bg-gradient-to-br from-white/40 to-blue-50/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <div className="text-2xl font-bold text-blue-600 mb-1">10K+</div>
              <div className="text-sm text-gray-600">Students</div>
            </div>
            <div className="bg-gradient-to-br from-white/40 to-green-50/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <div className="text-2xl font-bold text-green-600 mb-1">500+</div>
              <div className="text-sm text-gray-600">Courses</div>
            </div>
            <div className="bg-gradient-to-br from-white/40 to-purple-50/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <div className="text-2xl font-bold text-purple-600 mb-1">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
