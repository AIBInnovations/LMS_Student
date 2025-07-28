"use client";

import React, { useState } from 'react';
import { Star, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AssessmentCard() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleRatingHover = (rating: number) => {
    setHoveredRating(rating);
  };

  const handleRatingLeave = () => {
    setHoveredRating(0);
  };

  return (
  <div className="neumorphic-card rounded-2xl p-6 hover-lift">
    {/* Header */}
    <div className="text-center mb-6">
      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <TrendingUp className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-xl font-bold text-foreground mb-2">Assess Your Progress</h2>
      <p className="text-sm text-muted-foreground">How do you feel about today's learning?</p>
    </div>

    {/* Rating Stars */}
    <div className="flex justify-center space-x-2 mb-6">
      {[1, 2, 3, 4, 5].map((rating) => (
        <button
          key={rating}
          onClick={() => handleRatingClick(rating)}
          onMouseEnter={() => handleRatingHover(rating)}
          onMouseLeave={handleRatingLeave}
          className="transition-all duration-200 hover:scale-110"
        >
          <Star
            className={`w-8 h-8 ${
              rating <= (hoveredRating || selectedRating)
                ? 'text-yellow-500 fill-yellow-500'
                : 'text-muted-foreground'
            }`}
          />
        </button>
      ))}
    </div>

    {/* Rating Label */}
    <div className="text-center mb-6">
      {selectedRating > 0 && (
        <p className="text-sm font-medium text-foreground">
          {selectedRating === 1 && "Need more practice"}
          {selectedRating === 2 && "Making progress"}
          {selectedRating === 3 && "Good understanding"}
          {selectedRating === 4 && "Very confident"}
          {selectedRating === 5 && "Excellent mastery"}
        </p>
      )}
    </div>

    {/* Submit Button */}
    <Button 
      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg shadow-blue-200/50"
      disabled={selectedRating === 0}
    >
      Submit Assessment
    </Button>

    {/* Progress Insight */}
    <div className="mt-6 pt-4 border-t border-border">
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-[#22302a] dark:to-[#1e293b] rounded-lg p-3">
        <div className="flex items-center space-x-2 mb-1">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium text-muted-foreground">Weekly Average</span>
        </div>
        <p className="text-lg font-bold text-foreground">4.2/5.0</p>
        <p className="text-xs text-muted-foreground">You're performing excellently!</p>
      </div>
    </div>
  </div>
);

}