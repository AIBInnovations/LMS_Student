'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

type AuthState = 'login' | 'register' | 'onboarding' | 'dashboard';

interface AuthContextType {
  authState: AuthState;
  setAuthState: (state: AuthState) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>('login');
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AuthContext.Provider value={{ authState, setAuthState, activeSection, setActiveSection, sidebarOpen, setSidebarOpen }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuthContext must be used inside AuthProvider');
  return context;
};
