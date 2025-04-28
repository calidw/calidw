'use client';

import SubmissionsPage from './SubmissionsPage';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AuthPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <SubmissionsPage />
      </main>
      <Footer />
    </div>
  );
} 