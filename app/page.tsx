'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleGetStarted = () => {
    router.push('/register');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <header className="relative z-50">
        <nav className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-xl border-b border-white/10">
          <Link href="/" className="text-white font-bold text-2xl sm:text-3xl">
            TechFlow
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            <Link href="/" className="text-white hover:text-purple-300 transition-all duration-300 font-medium">Home</Link>
            <Link href="/features" className="text-gray-300 hover:text-purple-300 transition-all duration-300 font-medium">Features</Link>
            <Link href="/pricing" className="text-gray-300 hover:text-purple-300 transition-all duration-300 font-medium">Pricing</Link>
            <Link href="/contact" className="text-gray-300 hover:text-purple-300 transition-all duration-300 font-medium">Contact</Link>
          </div>
          
          {/* Desktop Auth Buttons */}
          <div className="hidden sm:flex space-x-3">
            <Link href="/login" className="text-gray-300 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg border border-gray-600 hover:border-purple-500 hover:bg-purple-500/20">
              Sign In
            </Link>
            <Link href="/register" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-all duration-300 px-6 py-2 rounded-lg font-semibold shadow-lg">
              Get Started
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-white/10">
            <div className="px-4 py-4 space-y-3">
              <Link href="/" className="block text-white hover:text-purple-300 transition-colors py-2 font-medium">Home</Link>
              <Link href="/features" className="block text-gray-300 hover:text-purple-300 transition-colors py-2 font-medium">Features</Link>
              <Link href="/pricing" className="block text-gray-300 hover:text-purple-300 transition-colors py-2 font-medium">Pricing</Link>
              <Link href="/contact" className="block text-gray-300 hover:text-purple-300 transition-colors py-2 font-medium">Contact</Link>
              <div className="pt-3 space-y-2">
                <Link href="/login" className="block text-center text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg border border-gray-600 hover:border-purple-500">
                  Sign In
                </Link>
                <Link href="/register" className="block text-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-colors px-4 py-2 rounded-lg font-semibold">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-extrabold mb-6 sm:mb-8 leading-tight">
              Transform Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-300 to-indigo-300"> Business</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Streamline your workflow with our cutting-edge platform. Boost productivity, enhance collaboration, and scale your business to new heights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16">
              <button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Start Free Trial
              </button>
              <Link
                href="/features"
                className="border-2 border-gray-400 text-gray-300 hover:bg-white hover:text-slate-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Features Preview */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl text-center border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Experience blazing-fast performance with our optimized infrastructure and global CDN.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl text-center border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-3">Secure & Reliable</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Enterprise-grade security with 99.9% uptime guarantee and advanced encryption.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl text-center border border-white/10 hover:bg-white/10 transition-all duration-300 group sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-3">Easy Integration</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Seamlessly integrate with your existing tools and workflows in minutes.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-900/90 backdrop-blur-xl border-t border-white/10 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">TechFlow</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Empowering businesses with innovative solutions since 2024.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-white">Product</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/features" className="hover:text-purple-400 transition-colors text-sm">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-purple-400 transition-colors text-sm">Pricing</Link></li>
                <li><Link href="/dashboard" className="hover:text-purple-400 transition-colors text-sm">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-white">Company</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/contact" className="hover:text-purple-400 transition-colors text-sm">Contact</Link></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors text-sm">About</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors text-sm">Careers</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-white">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors text-sm">Help Center</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors text-sm">Documentation</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors text-sm">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">&copy; 2024 TechFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
