// app/layout.tsx
import Link from 'next/link';
import { Inter } from 'next/font/google';
import './globals.css';

// Initialize the Inter font
const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-y-scroll">
      <head>
        <title>JRMT Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50`}>
        {/* Clean Navigation Bar */}
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex-shrink-0">
                <span className="text-xl font-bold text-indigo-600">JRMT</span>
              </div>
              <nav className="flex space-x-6">
                <Link href="/" className="text-gray-600 hover:text-indigo-600 px-2 py-1 text-sm font-medium transition-colors duration-200">
                  Home
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-indigo-600 px-2 py-1 text-sm font-medium transition-colors duration-200">
                  About
                </Link>
                <Link href="/contest" className="text-gray-600 hover:text-indigo-600 px-2 py-1 text-sm font-medium transition-colors duration-200">
                  Contest
                </Link>
                <Link href="/schedule" className="text-gray-600 hover:text-indigo-600 px-2 py-1 text-sm font-medium transition-colors duration-200">
                  Schedule
                </Link>
                <Link href="/registration" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1 rounded-md text-sm font-medium transition-colors duration-200">
                  Registration
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-grow max-w-7xl w-full mx-auto px-4 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-6">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-sm text-gray-500">
              &copy; {new Date().getFullYear()} JRMT. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}