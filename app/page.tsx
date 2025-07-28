'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './globals.css'; 

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('token'); // or cookies/session check

    if (isLoggedIn) {
      router.push('/dashboard');
    } else {
      router.push('/auth/login');
    }
  }, [router]);

  return null;
}
