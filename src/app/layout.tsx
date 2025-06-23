import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Blog Site',
  description: 'A personal vlog site built with Next.js and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900`}>
        <Sidebar />
        <Header />
        <main className="lg:ml-64 pt-16 min-h-screen">
          <div className="container mx-auto p-6">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
} 