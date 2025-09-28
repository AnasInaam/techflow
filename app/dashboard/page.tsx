'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [user, setUser] = useState({ name: 'Loading...', email: '' });
  const [activeTab, setActiveTab] = useState('overview');
  const router = useRouter();

  useEffect(() => {
    // Get user data from localStorage or session
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      // Create display name with fallbacks
      let displayName = 'User';
      if (parsedUser.name) {
        displayName = parsedUser.name;
      } else if (parsedUser.firstName && parsedUser.lastName) {
        displayName = `${parsedUser.firstName} ${parsedUser.lastName}`;
      } else if (parsedUser.firstName) {
        displayName = parsedUser.firstName;
      } else if (parsedUser.email) {
        displayName = parsedUser.email.split('@')[0]; // Use email username as fallback
      }
      
      setUser({
        name: displayName,
        email: parsedUser.email || ''
      });
    } else {
      // If no user data, redirect to login
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    // Clear user data and redirect to home
    localStorage.removeItem('user');
    router.push('/');
  };

  const stats = [
    { label: 'Total Projects', value: '24', change: '+12%', positive: true },
    { label: 'Active Users', value: '1,247', change: '+5.2%', positive: true },
    { label: 'Revenue', value: '$12,450', change: '+8.1%', positive: true },
    { label: 'Storage Used', value: '2.4 GB', change: '+1.2%', positive: false }
  ];

  const recentActivity = [
    { action: 'Created new project "Mobile App"', time: '2 hours ago', icon: '📱' },
    { action: 'Updated team settings', time: '4 hours ago', icon: '⚙️' },
    { action: 'Invited 3 new team members', time: '1 day ago', icon: '👥' },
    { action: 'Deployed to production', time: '2 days ago', icon: '🚀' },
    { action: 'Backup completed successfully', time: '3 days ago', icon: '💾' }
  ];

  const projects = [
    { name: 'E-commerce Platform', status: 'Active', progress: 85, team: 5 },
    { name: 'Mobile App', status: 'Active', progress: 60, team: 3 },
    { name: 'Marketing Website', status: 'Completed', progress: 100, team: 2 },
    { name: 'Internal Tools', status: 'On Hold', progress: 30, team: 4 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <header className="bg-white/10 backdrop-blur-xl shadow-sm border-b border-white/20">
        <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <Link href="/" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-bold text-2xl">
            TechFlow
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300 text-sm sm:text-base hidden sm:block">Welcome, {user.name}</span>
            <span className="text-gray-300 text-sm block sm:hidden">{user.name}</span>
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row">
        {/* Mobile Sidebar Toggle */}
        <div className="lg:hidden bg-white/10 backdrop-blur-xl border-b border-white/20 p-4">
          <select 
            value={activeTab} 
            onChange={(e) => setActiveTab(e.target.value)}
            className="w-full bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500"
          >
            <option value="overview" className="bg-slate-800">📊 Overview</option>
            <option value="projects" className="bg-slate-800">📁 Projects</option>
            <option value="analytics" className="bg-slate-800">📈 Analytics</option>
            <option value="team" className="bg-slate-800">👥 Team</option>
            <option value="settings" className="bg-slate-800">⚙️ Settings</option>
          </select>
        </div>
        
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 bg-white/10 backdrop-blur-xl shadow-sm min-h-screen border-r border-white/20">
          <nav className="p-4 sm:p-6">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                    activeTab === 'overview' 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' 
                      : 'text-gray-300 hover:bg-white/10 hover:text-purple-300'
                  }`}
                >
                  📊 Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                    activeTab === 'projects' 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' 
                      : 'text-gray-300 hover:bg-white/10 hover:text-purple-300'
                  }`}
                >
                  📁 Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                    activeTab === 'analytics' 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' 
                      : 'text-gray-300 hover:bg-white/10 hover:text-purple-300'
                  }`}
                >
                  📈 Analytics
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('team')}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                    activeTab === 'team' 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' 
                      : 'text-gray-300 hover:bg-white/10 hover:text-purple-300'
                  }`}
                >
                  👥 Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                    activeTab === 'settings' 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' 
                      : 'text-gray-300 hover:bg-white/10 hover:text-purple-300'
                  }`}
                >
                  ⚙️ Settings
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {activeTab === 'overview' && (
            <div>
              <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
                <p className="text-gray-300">Welcome back! Here's what's happening with your projects.</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg p-4 sm:p-6 border border-white/20 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xs sm:text-sm font-medium text-gray-400">{stat.label}</h3>
                      <span className={`text-sm font-semibold px-2 py-1 rounded-lg ${stat.positive ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'}`}>
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Recent Activity */}
                <div className="bg-white/10 backdrop-blur-xl rounded-xl shadow-sm p-4 sm:p-6 border border-white/20">
                  <h2 className="text-lg sm:text-xl font-semibold text-white mb-6">Recent Activity</h2>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <span className="text-2xl">{activity.icon}</span>
                        <div className="flex-1">
                          <p className="text-white text-sm sm:text-base">{activity.action}</p>
                          <p className="text-xs sm:text-sm text-gray-400">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white/10 backdrop-blur-xl rounded-xl shadow-sm p-4 sm:p-6 border border-white/20">
                  <h2 className="text-lg sm:text-xl font-semibold text-white mb-6">Quick Actions</h2>
                  <div className="space-y-4">
                    <button className="w-full text-left p-3 sm:p-4 border border-white/20 rounded-lg hover:bg-white/10 transition-colors">
                      <div className="flex items-center space-x-3">
                        <span className="text-xl sm:text-2xl">➕</span>
                        <div>
                          <h3 className="font-medium text-white text-sm sm:text-base">Create New Project</h3>
                          <p className="text-xs sm:text-sm text-gray-300">Start a new project from scratch</p>
                        </div>
                      </div>
                    </button>
                    <button className="w-full text-left p-3 sm:p-4 border border-white/20 rounded-lg hover:bg-white/10 transition-colors">
                      <div className="flex items-center space-x-3">
                        <span className="text-xl sm:text-2xl">👥</span>
                        <div>
                          <h3 className="font-medium text-white text-sm sm:text-base">Invite Team Members</h3>
                          <p className="text-xs sm:text-sm text-gray-300">Add people to your workspace</p>
                        </div>
                      </div>
                    </button>
                    <button className="w-full text-left p-3 sm:p-4 border border-white/20 rounded-lg hover:bg-white/10 transition-colors">
                      <div className="flex items-center space-x-3">
                        <span className="text-xl sm:text-2xl">📊</span>
                        <div>
                          <h3 className="font-medium text-white text-sm sm:text-base">View Reports</h3>
                          <p className="text-xs sm:text-sm text-gray-300">Check your analytics and performance</p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Projects</h1>
                  <p className="text-gray-300">Manage and track all your projects in one place.</p>
                </div>
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-all duration-300 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium shadow-lg text-sm sm:text-base">
                  Create Project
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-xl shadow-sm border border-white/20 overflow-hidden">
                <div className="p-4 sm:p-6 border-b border-white/20">
                  <div className="flex flex-wrap gap-2 sm:space-x-4 sm:gap-0">
                    <button className="bg-purple-600 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium">
                      All Projects
                    </button>
                    <button className="text-gray-300 hover:text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium">
                      Active
                    </button>
                    <button className="text-gray-300 hover:text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium">
                      Completed
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-white/10">
                      <tr>
                        <th className="text-left py-3 px-3 sm:px-6 text-xs font-medium text-gray-400 uppercase tracking-wider">Project</th>
                        <th className="text-left py-3 px-3 sm:px-6 text-xs font-medium text-gray-400 uppercase tracking-wider hidden sm:table-cell">Status</th>
                        <th className="text-left py-3 px-3 sm:px-6 text-xs font-medium text-gray-400 uppercase tracking-wider hidden md:table-cell">Progress</th>
                        <th className="text-left py-3 px-3 sm:px-6 text-xs font-medium text-gray-400 uppercase tracking-wider hidden lg:table-cell">Team</th>
                        <th className="text-left py-3 px-3 sm:px-6 text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/20">
                      {projects.map((project, index) => (
                        <tr key={index} className="hover:bg-white/10">
                          <td className="py-4 px-3 sm:px-6">
                            <h3 className="font-medium text-white text-sm sm:text-base">{project.name}</h3>
                            <div className="sm:hidden mt-1">
                              <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                                project.status === 'Active' ? 'bg-green-500/20 text-green-300' :
                                project.status === 'Completed' ? 'bg-blue-500/20 text-blue-300' :
                                'bg-yellow-500/20 text-yellow-300'
                              }`}>
                                {project.status}
                              </span>
                            </div>
                          </td>
                          <td className="py-4 px-3 sm:px-6 hidden sm:table-cell">
                            <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                              project.status === 'Active' ? 'bg-green-500/20 text-green-300' :
                              project.status === 'Completed' ? 'bg-blue-500/20 text-blue-300' :
                              'bg-yellow-500/20 text-yellow-300'
                            }`}>
                              {project.status}
                            </span>
                          </td>
                          <td className="py-4 px-3 sm:px-6 hidden md:table-cell">
                            <div className="flex items-center space-x-2">
                              <div className="flex-1 bg-white/20 rounded-full h-2">
                                <div
                                  className="bg-purple-500 h-2 rounded-full"
                                  style={{ width: `${project.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-gray-300">{project.progress}%</span>
                            </div>
                          </td>
                          <td className="py-4 px-3 sm:px-6 hidden lg:table-cell">
                            <span className="text-sm text-gray-300">{project.team} members</span>
                          </td>
                          <td className="py-4 px-3 sm:px-6">
                            <button className="text-purple-400 hover:text-purple-300 text-xs sm:text-sm font-medium">
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div>
              <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Analytics</h1>
                <p className="text-gray-300">Track your performance and growth metrics.</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl shadow-sm p-4 sm:p-6 border border-white/20">
                  <h2 className="text-lg sm:text-xl font-semibold text-white mb-6">Traffic Overview</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Page Views</span>
                      <span className="font-semibold text-white">24,567</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Unique Visitors</span>
                      <span className="font-semibold text-white">8,234</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Bounce Rate</span>
                      <span className="font-semibold text-white">32.4%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-xl shadow-sm p-4 sm:p-6 border border-white/20">
                  <h2 className="text-lg sm:text-xl font-semibold text-white mb-6">User Engagement</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Session Duration</span>
                      <span className="font-semibold text-white">4m 32s</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Pages per Session</span>
                      <span className="font-semibold text-white">3.2</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Return Visitors</span>
                      <span className="font-semibold text-white">64.7%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Team Members</h1>
                  <p className="text-gray-300">Manage your team and their permissions.</p>
                </div>
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-colors px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base">
                  Invite Member
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-xl shadow-sm border border-white/20 p-4 sm:p-6">
                <div className="text-center py-8 sm:py-12">
                  <div className="text-4xl sm:text-6xl mb-4">👥</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Team Management</h3>
                  <p className="text-gray-300 mb-6 text-sm sm:text-base">Invite team members and manage their roles and permissions.</p>
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-colors px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base">
                    Invite Your First Team Member
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Settings</h1>
                <p className="text-gray-300">Manage your account preferences and configuration.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-xl shadow-sm border border-white/20 p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold text-white mb-6">Profile Settings</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={user.name}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                      readOnly
                    />
                    <p className="text-xs text-gray-400 mt-1">Contact support to update your name</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={user.email}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                      readOnly
                    />
                    <p className="text-xs text-gray-400 mt-1">Contact support to update your email</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Password
                    </label>
                    <button className="text-purple-400 hover:text-purple-300 font-medium">
                      Change Password
                    </button>
                  </div>
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-colors px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base">
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}