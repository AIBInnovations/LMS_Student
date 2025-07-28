"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { User, Mail, Phone, MapPin, Calendar, Edit3, Save, X, Camera, Award, BookOpen, Clock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const userStats = [
  { label: 'Courses Completed', value: '12', icon: BookOpen, color: 'text-[#4F8FE5]' },
  { label: 'Study Hours', value: '248', icon: Clock, color: 'text-[#A6E86D]' },
  { label: 'Certificates Earned', value: '8', icon: Award, color: 'text-[#B6A4F9]' },
  { label: 'Current Streak', value: '15 days', icon: TrendingUp, color: 'text-orange-500' },
];

const achievements = [
  { title: 'Quick Learner', description: 'Completed 5 courses in a month', icon: '🚀', earned: true },
  { title: 'Consistent Student', description: 'Maintained 30-day study streak', icon: '⚡', earned: true },
  { title: 'Top Performer', description: 'Scored 95%+ in 3 assessments', icon: '🏆', earned: true },
  { title: 'Team Player', description: 'Active in discussion forums', icon: '🤝', earned: false },
  { title: 'Knowledge Seeker', description: 'Completed 20 courses', icon: '📚', earned: false },
  { title: 'Master Student', description: 'Earned 10 certificates', icon: '🎓', earned: false },
];

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.johnson@university.edu',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    joinDate: 'September 2023',
    bio: 'Computer Science student passionate about web development and machine learning. Always eager to learn new technologies and collaborate on exciting projects.',
    university: 'Stanford University',
    major: 'Computer Science',
    year: 'Junior',
    gpa: '3.8',
    dateOfBirth: '1998-05-15',
    linkedIn: 'https://linkedin.com/in/sarahjohnson',
    github: 'https://github.com/sarahjohnson',
    website: 'https://sarahjohnson.dev'
  });

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <DashboardLayout currentPage="profile">
      <div className="space-y-6 text-foreground">
        <div className="neumorphic-card p-8 hover-lift bg-white dark:bg-zinc-900">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                alt="Profile"
                className="w-32 h-32 rounded-full shadow-xl border-4 border-white dark:border-zinc-800"
              />
              <button className="absolute bottom-2 right-2 w-10 h-10 bg-[#4F8FE5] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Camera className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">{profileData.name}</h1>
                  <p className="text-muted-foreground mb-1">{profileData.major} • {profileData.year}</p>
                  <p className="text-muted-foreground">{profileData.university}</p>
                </div>
                <Button
                  onClick={() => setIsEditing(!isEditing)}
                  className={isEditing ? 'bg-gray-500 hover:bg-gray-600' : 'primary-button'}
                >
                  {isEditing ? (
                    <>
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </>
                  ) : (
                    <>
                      <Edit3 className="w-4 h-4 mr-2" />
                      Edit Profile
                    </>
                  )}
                </Button>
              </div>
              <p className="text-muted-foreground leading-relaxed">{profileData.bio}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {userStats.map((stat, index) => (
            <div key={index} className="neumorphic-card p-6 hover-lift text-center bg-white dark:bg-zinc-900">
              <div className={`w-12 h-12 ${stat.color} bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  {/* Personal Information */}
  <div className="neumorphic-card p-6 hover-lift dark:bg-zinc-900">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-bold text-[#333333] dark:text-white">Personal Information</h2>
      {isEditing && (
        <Button onClick={handleSave} className="secondary-button">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      )}
    </div>

    <div className="space-y-4">
      {/* Field Blocks */}
      {[
        { label: 'Full Name', icon: <User className="w-5 h-5 text-[#4F8FE5]" />, bg: 'bg-blue-100', value: profileData.name, field: 'name', type: 'text' },
        { label: 'Email Address', icon: <Mail className="w-5 h-5 text-[#A6E86D]" />, bg: 'bg-green-100', value: profileData.email, field: 'email', type: 'email' },
        { label: 'Phone Number', icon: <Phone className="w-5 h-5 text-[#B6A4F9]" />, bg: 'bg-purple-100', value: profileData.phone, field: 'phone', type: 'tel' },
        { label: 'Location', icon: <MapPin className="w-5 h-5 text-orange-500" />, bg: 'bg-orange-100', value: profileData.location, field: 'location', type: 'text' },
        { label: 'Date of Birth', icon: <Calendar className="w-5 h-5 text-teal-500" />, bg: 'bg-teal-100', value: profileData.dateOfBirth, field: 'dateOfBirth', type: 'date' }
      ].map((item, i) => (
        <div key={i} className="flex items-center space-x-4">
          <div className={`${item.bg} dark:bg-opacity-20 rounded-xl w-10 h-10 flex items-center justify-center`}>
            {item.icon}
          </div>
          <div className="flex-1">
            <label className="text-sm font-medium text-gray-600 dark:text-gray-300">{item.label}</label>
            {isEditing ? (
              <input
                type={item.type}
                value={item.value}
                onChange={(e) => setProfileData({ ...profileData, [item.field]: e.target.value })}
                className="w-full mt-1 input-field focus:outline-none focus:ring-2 focus:ring-[#4F8FE5]/30 dark:bg-zinc-800 dark:text-white"
              />
            ) : (
              <p className="text-[#333333] font-medium">{new Date(profileData.dateOfBirth).toLocaleDateString('en-US')}</p>
            )}
          </div>
        </div>
      ))}

      {/* Member Since */}
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-pink-100 dark:bg-opacity-20 rounded-xl flex items-center justify-center">
          <Calendar className="w-5 h-5 text-pink-500" />
        </div>
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-600 dark:text-gray-300">Member Since</label>
          <p className="text-[#333333] dark:text-white font-medium">{profileData.joinDate}</p>
        </div>
      </div>

      {/* Social Links (editable mode only) */}
      {isEditing && (
        <div className="pt-4 border-t border-gray-200 dark:border-zinc-700">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Social Links</h4>
          <div className="space-y-4">
            {[
              { label: 'LinkedIn Profile', field: 'linkedIn', placeholder: 'https://linkedin.com/in/username' },
              { label: 'GitHub Profile', field: 'github', placeholder: 'https://github.com/username' },
              { label: 'Personal Website', field: 'website', placeholder: 'https://yourwebsite.com' },
              { label: 'Bio', field: 'bio', textarea: true }
            ].map((link, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">{link.label}</label>
                {link.textarea ? (
                  <textarea
                    value={profileData.linkedIn}
                    onChange={(e) => setProfileData({ ...profileData, [link.field]: e.target.value })}
                    rows={4}
                    placeholder="Tell us about yourself..."
                    className="w-full input-field focus:outline-none focus:ring-2 focus:ring-[#4F8FE5]/30 resize-none dark:bg-zinc-800 dark:text-white"
                  />
                ) : (
                  <input
                    type="url"
                    value={profileData.github}
                    onChange={(e) => setProfileData({ ...profileData, [link.field]: e.target.value })}
                    className="w-full input-field focus:outline-none focus:ring-2 focus:ring-[#4F8FE5]/30 dark:bg-zinc-800 dark:text-white"
                    placeholder={link.placeholder}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>

  {/* Achievements */}
  <div className="neumorphic-card p-6 hover-lift bg-white dark:bg-zinc-900">
  <h2 className="text-xl font-bold text-[#333333] dark:text-white mb-6">Achievements & Badges</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {achievements.map((achievement, index) => (
        <div
          key={index}
        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
          achievement.earned
            ? 'bg-gradient-to-r from-[#DCEEFF] to-[#EEF4FF] border-[#4F8FE5]/30 shadow-lg dark:from-blue-900/30 dark:to-blue-800/30 dark:border-[#4F8FE5]/20'
            : 'bg-gray-50 border-gray-200 opacity-60 dark:bg-zinc-800 dark:border-zinc-700'
          }`}
        >
          <div className="text-center">
            <div className="text-3xl mb-2">{achievement.icon}</div>
            <h3 className="font-semibold text-[#333333] dark:text-white text-sm mb-1">{achievement.title}</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">{achievement.description}</p>
            {achievement.earned && (
              <div className="mt-2">
                <span className="text-xs bg-[#A6E86D] text-white px-2 py-1 rounded-full">Earned</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


        {/* Academic Information */}
        <div className="neumorphic-card p-6 hover-lift bg-white dark:bg-[#1e1e1e]">
  <h2 className="text-xl font-bold text-[#333333] dark:text-gray-100 mb-6">
    Academic Information
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
        <BookOpen className="w-8 h-8 text-[#4F8FE5]" />
      </div>
      <h3 className="font-semibold text-[#333333] dark:text-gray-100 mb-1">University</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{profileData.university}</p>
    </div>

    <div className="text-center">
      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
        <Award className="w-8 h-8 text-[#A6E86D]" />
      </div>
      <h3 className="font-semibold text-[#333333] dark:text-gray-100 mb-1">Major</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{profileData.major}</p>
    </div>

    <div className="text-center">
      <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
        <Calendar className="w-8 h-8 text-[#B6A4F9]" />
      </div>
      <h3 className="font-semibold text-[#333333] dark:text-gray-100 mb-1">Academic Year</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{profileData.year}</p>
    </div>

    <div className="text-center">
      <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
        <TrendingUp className="w-8 h-8 text-yellow-500" />
      </div>
      <h3 className="font-semibold text-[#333333] dark:text-gray-100 mb-1">GPA</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{profileData.gpa}/4.0</p>
    </div>
  </div>
</div>


        {/* Settings & Preferences */}
       <div className="neumorphic-card p-6 hover-lift bg-white dark:bg-[#1e1e1e]">
  <h2 className="text-xl font-bold text-[#333333] dark:text-white mb-6">Settings & Preferences</h2>

  <div className="space-y-6">
    {/* Notification Settings */}
    <div>
      <h3 className="text-lg font-semibold text-[#333333] dark:text-white mb-4">Notification Preferences</h3>
      <div className="space-y-4">
        {[
          ['Assignment Reminders', 'Get notified about upcoming deadlines'],
          ['Live Class Alerts', 'Reminders for upcoming live sessions'],
          ['Achievement Notifications', 'Celebrate your learning milestones'],
        ].map(([title, desc], idx) => (
          <div key={idx} className="flex items-center justify-between p-4 rounded-xl border border-blue-100/50 bg-white/60 dark:bg-white/5 dark:border-blue-900/30">
            <div>
              <h4 className="font-medium text-[#333333] dark:text-white">{title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-[#4F8FE5]/30 rounded-full peer peer-checked:after:translate-x-full after:absolute after:top-[2px] after:left-[2px] after:bg-white dark:after:bg-gray-100 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4F8FE5]"></div>
            </label>
          </div>
        ))}
      </div>
    </div>

    {/* Privacy Settings */}
    <div>
      <h3 className="text-lg font-semibold text-[#333333] dark:text-white mb-4">Privacy Settings</h3>
      <div className="space-y-4">
        {[
          ['Profile Visibility', 'Make your profile visible to other students'],
          ['Show Learning Progress', 'Display your course progress publicly'],
        ].map(([title, desc], idx) => (
          <div key={idx} className="flex items-center justify-between p-4 rounded-xl border border-blue-100/50 bg-white/60 dark:bg-white/5 dark:border-blue-900/30">
            <div>
              <h4 className="font-medium text-[#333333] dark:text-white">{title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-[#4F8FE5]/30 rounded-full peer peer-checked:after:translate-x-full after:absolute after:top-[2px] after:left-[2px] after:bg-white dark:after:bg-gray-100 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4F8FE5]"></div>
            </label>
          </div>
        ))}
      </div>
    </div>

    {/* Account Actions */}
    <div>
      <h3 className="text-lg font-semibold text-[#333333] dark:text-white mb-4">Account Actions</h3>
      <div className="space-y-3">
        <Button variant="outline" className="w-full justify-start border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl">
          Change Password
        </Button>
        <Button variant="outline" className="w-full justify-start border-green-200 dark:border-green-800 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-xl">
          Export My Data
        </Button>
        <Button variant="outline" className="w-full justify-start border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl">
          Deactivate Account
        </Button>
      </div>
    </div>
  </div>
</div>

      </div>
    </DashboardLayout>
  );
}