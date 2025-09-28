'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for individuals and small projects',
      monthlyPrice: 9,
      annualPrice: 7,
      features: [
        'Up to 5 projects',
        '10GB storage',
        'Basic analytics',
        'Email support',
        'Standard integrations',
        '99.5% uptime SLA'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing teams and businesses',
      monthlyPrice: 29,
      annualPrice: 24,
      features: [
        'Up to 25 projects',
        '100GB storage',
        'Advanced analytics',
        'Priority support',
        'Premium integrations',
        'Custom workflows',
        '99.9% uptime SLA',
        'Team collaboration'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with custom needs',
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        'Unlimited projects',
        'Unlimited storage',
        'Custom analytics',
        '24/7 dedicated support',
        'All integrations',
        'Custom development',
        '99.99% uptime SLA',
        'Advanced security',
        'White-label options',
        'On-premise deployment'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Can I switch plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'We offer a 14-day free trial for all paid plans. No credit card required to get started.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and wire transfers for enterprise customers.'
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription at any time. You\'ll continue to have access until the end of your billing period.'
    },
    {
      question: 'Do you offer discounts for nonprofits?',
      answer: 'Yes, we offer special pricing for qualified nonprofit organizations. Contact our sales team for details.'
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
            <Link href="/features" className="text-gray-300 hover:text-purple-300 transition-colors font-medium">Features</Link>
            <Link href="/pricing" className="text-purple-300 font-semibold">Pricing</Link>
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
              <Link href="/features" className="block text-gray-300 hover:text-purple-300 transition-colors py-2">Features</Link>
              <Link href="/pricing" className="block text-purple-300 font-semibold py-2">Pricing</Link>
              <Link href="/contact" className="block text-gray-300 hover:text-purple-300 transition-colors py-2">Contact</Link>
              <Link href="/login" className="block text-gray-300 hover:text-purple-300 transition-colors py-2 sm:hidden">Sign In</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Simple, Transparent
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300"> Pricing</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your needs. Start with a free trial and scale as you grow.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${!isAnnual ? 'text-white font-semibold' : 'text-blue-200'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-500"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${isAnnual ? 'text-white font-semibold' : 'text-blue-200'}`}>
              Annual
            </span>
            <span className="ml-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
              Save 20%
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border-2 ${
                  plan.popular ? 'border-blue-500 relative' : 'border-gray-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-white">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-300">/month</span>
                  </div>
                  {isAnnual && (
                    <p className="text-green-600 text-sm font-semibold">
                      Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.cta === 'Contact Sales' ? '/contact' : '/register'}
                  className={`block w-full text-center py-4 px-6 rounded-lg font-bold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-xl rounded-lg p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied customers. Start your free trial today.
          </p>
          <Link
            href="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors inline-block"
          >
            Start Free Trial
          </Link>
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