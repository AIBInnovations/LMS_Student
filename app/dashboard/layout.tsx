'use client';

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';

export default function DashboardLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout currentPage="dashboard">
      {children}
    </DashboardLayout>
  );
}
