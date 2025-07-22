"use client";

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import DashboardContent from '@/components/dashboard/DashboardContent';

export default function HomePage() {
  return (
    <DashboardLayout currentPage="dashboard">
      <DashboardContent />
    </DashboardLayout>
  );
}