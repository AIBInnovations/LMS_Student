"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowRight, ArrowLeft, CheckCircle, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Password reset request for:', email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="neumorphic-card p-8 hover-lift">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#4F8FE5] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200/50">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#333333] mb-2">
              {isSubmitted ? 'Check Your Email' : 'Forgot Password?'}
            </h2>
            <p className="text-gray-600">
              {isSubmitted 
                ? 'We\'ve sent a password reset link to your email address'
                : 'No worries! Enter your email and we\'ll send you reset instructions'
              }
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 input-field focus:outline-none focus:ring-2 focus:ring-[#4F8FE5]/30"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full primary-button">
                Send Reset Link
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-[#A6E86D] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4">
                <p className="text-sm text-green-700">
                  If an account with <strong>{email}</strong> exists, you'll receive a password reset email within a few minutes.
                </p>
              </div>
              <Button 
                onClick={() => setIsSubmitted(false)} 
                variant="outline"
                className="w-full border-[#E0E0E0]/50 hover:bg-white/80 rounded-xl"
              >
                Send Another Email
              </Button>
            </div>
          )}

          <div className="mt-8 text-center">
            <Link 
              href="/login" 
              className="inline-flex items-center text-[#4F8FE5] hover:text-[#4F8FE5]/80 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Sign In
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t border-[#E0E0E0]/30 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link href="/register" className="text-[#4F8FE5] hover:text-[#4F8FE5]/80 font-medium transition-colors">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}