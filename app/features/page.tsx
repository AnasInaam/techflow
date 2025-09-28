'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function FeaturesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast Performance',
      description: 'Experience blazing-fast loading times with our optimized infrastructure and CDN network.',
      details: ['Sub-second loading times', '99.9% uptime guarantee', 'Global CDN distribution', 'Auto-scaling infrastructure']
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and advanced threat protection.',
      details: ['256-bit SSL encryption', 'Two-factor authentication', 'SOC 2 compliance', 'Regular security audits']
    },
    {
      icon: '🎯',
      title: 'Smart Analytics',
      description: 'Get deep insights into your business with our AI-powered analytics dashboard.',
      details: ['Real-time data processing', 'Predictive analytics', 'Custom reporting', 'Advanced visualizations']
    },
    {
      icon: '🔧',
      title: 'Easy Integration',
      description: 'Seamlessly connect with your existing tools and workflows in minutes.',
      details: ['REST API access', '500+ integrations', 'Webhook support', 'Custom connectors']
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Fully responsive design that works perfectly on all devices and screen sizes.',
      details: ['Native mobile apps', 'Offline functionality', 'Cross-platform sync', 'Touch-optimized UI']
    },
    {
      icon: '🚀',
      title: 'Scalable Architecture',
      description: 'Built to grow with your business from startup to enterprise scale.',
      details: ['Auto-scaling infrastructure', 'Load balancing', 'Microservices architecture', 'Container orchestration']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <header className="bg-white/10 backdrop-blur-xl shadow-sm border-b border-white/20">
        <nav className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <Link href="/" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-bold text-2xl">
            TechFlow
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-purple-300 transition-colors font-medium">Home</Link>
            <Link href="/features" className="text-purple-300 font-semibold">Features</Link>
            <Link href="/pricing" className="text-gray-300 hover:text-purple-300 transition-colors font-medium">Pricing</Link>
            <Link href="/contact" className="text-gray-300 hover:text-purple-300 transition-colors font-medium">Contact</Link>
          </div>
          <div className="flex items-center space-x-3">
            <Link href="/login" className="hidden sm:block text-gray-300 hover:text-purple-300 transition-colors px-4 py-2 rounded-lg">
              Sign In
            </Link>
            <Link href="/register" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-colors px-4 sm:px-6 py-2 rounded-lg font-semibold shadow-lg text-sm sm:text-base">
              Get Started
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-300 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/20">
            <div className="px-4 py-2 space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-purple-300 transition-colors py-2">Home</Link>
              <Link href="/features" className="block text-purple-300 font-semibold py-2">Features</Link>
              <Link href="/pricing" className="block text-gray-300 hover:text-purple-300 transition-colors py-2">Pricing</Link>
              <Link href="/contact" className="block text-gray-300 hover:text-purple-300 transition-colors py-2">Contact</Link>
              <Link href="/login" className="block text-gray-300 hover:text-purple-300 transition-colors py-2 sm:hidden">Sign In</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Powerful Features for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300"> Modern Business</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover all the tools and capabilities that make TechFlow the perfect solution for your business needs.
          </p>
          <Link
            href="/register"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 inline-block"
          >
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive feature set is designed to streamline your workflow and boost productivity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-white/20 group hover:border-purple-400"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied customers who have transformed their business with TechFlow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">TechFlow</h4>
              <p className="text-gray-300">Empowering businesses with innovative solutions.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Product</h5>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 TechFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}