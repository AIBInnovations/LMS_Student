"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Award, Download, Share2, Eye, Calendar, Star, Filter, Search, Trophy, Medal, Crown, Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
  {
    id: 1,
    title: 'JavaScript Fundamentals Certification',
    course: 'Advanced JavaScript & React',
    instructor: 'Dr. Emily Chen',
    issueDate: '2023-12-15',
    expiryDate: '2025-12-15',
    grade: 'A+',
    score: 95,
    credentialId: 'JS-2023-001234',
    status: 'active',
    type: 'completion',
    image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
    skills: ['JavaScript ES6+', 'DOM Manipulation', 'Async Programming', 'Error Handling'],
    verificationUrl: 'https://verify.eduflow.com/js-001234'
  },
  {
    id: 2,
    title: 'React Development Professional',
    course: 'Advanced JavaScript & React',
    instructor: 'Dr. Emily Chen',
    issueDate: '2023-11-20',
    expiryDate: '2025-11-20',
    grade: 'A',
    score: 88,
    credentialId: 'REACT-2023-005678',
    status: 'active',
    type: 'professional',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
    skills: ['React Hooks', 'State Management', 'Component Architecture', 'Testing'],
    verificationUrl: 'https://verify.eduflow.com/react-005678'
  },
  {
    id: 3,
    title: 'Database Design Specialist',
    course: 'Database Design & SQL',
    instructor: 'Dr. Sarah Williams',
    issueDate: '2023-10-10',
    expiryDate: '2025-10-10',
    grade: 'A+',
    score: 92,
    credentialId: 'DB-2023-009876',
    status: 'active',
    type: 'specialist',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
    skills: ['Database Normalization', 'SQL Optimization', 'Schema Design', 'Data Modeling'],
    verificationUrl: 'https://verify.eduflow.com/db-009876'
  },
  {
    id: 4,
    title: 'Machine Learning Fundamentals',
    course: 'Machine Learning Fundamentals',
    instructor: 'Dr. Alex Kim',
    issueDate: '2023-09-05',
    expiryDate: '2024-09-05',
    grade: 'B+',
    score: 85,
    credentialId: 'ML-2023-112233',
    status: 'expiring',
    type: 'completion',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
    skills: ['Supervised Learning', 'Neural Networks', 'Data Preprocessing', 'Model Evaluation'],
    verificationUrl: 'https://verify.eduflow.com/ml-112233'
  },
  {
    id: 5,
    title: 'Web Design Excellence Award',
    course: 'Web Design Principles',
    instructor: 'Prof. Lisa Chen',
    issueDate: '2023-08-15',
    expiryDate: null,
    grade: 'A',
    score: 90,
    credentialId: 'WD-2023-445566',
    status: 'active',
    type: 'award',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
    skills: ['UI/UX Design', 'Color Theory', 'Typography', 'Responsive Design'],
    verificationUrl: 'https://verify.eduflow.com/wd-445566'
  }
];

const badges = [
  { name: 'Quick Learner', icon: '🚀', description: 'Completed 5 courses in 30 days', earned: true, date: '2023-12-01' },
  { name: 'Consistent Student', icon: '⚡', description: 'Maintained 30-day study streak', earned: true, date: '2023-11-15' },
  { name: 'Top Performer', icon: '🏆', description: 'Scored 90%+ in 5 assessments', earned: true, date: '2023-10-20' },
  { name: 'Team Player', icon: '🤝', description: 'Active in discussion forums', earned: false, progress: 60 },
  { name: 'Knowledge Seeker', icon: '📚', description: 'Complete 20 courses', earned: false, progress: 75 },
  { name: 'Master Student', icon: '🎓', description: 'Earn 10 certificates', earned: false, progress: 50 },
  { name: 'Perfect Score', icon: '💯', description: 'Score 100% in any assessment', earned: false, progress: 0 },
  { name: 'Mentor', icon: '👨‍🏫', description: 'Help 10 fellow students', earned: false, progress: 30 }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-green-100 text-green-700 border-green-200';
    case 'expiring':
      return 'bg-orange-100 text-orange-700 border-orange-200';
    case 'expired':
      return 'bg-red-100 text-red-700 border-red-200';
    default:
      return 'bg-gray-100 text-gray-700 border-gray-200';
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'professional':
      return <Crown className="w-5 h-5" />;
    case 'specialist':
      return <Medal className="w-5 h-5" />;
    case 'award':
      return <Trophy className="w-5 h-5" />;
    default:
      return <Award className="w-5 h-5" />;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'professional':
      return 'bg-purple-100 text-purple-700';
    case 'specialist':
      return 'bg-blue-100 text-blue-700';
    case 'award':
      return 'bg-yellow-100 text-yellow-700';
    default:
      return 'bg-green-100 text-green-700';
  }
};

export default function CertificatesPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('certificates');
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState('');



  const filteredCertificates = certificates.filter(cert => {
    const matchesFilter = selectedFilter === 'all' || cert.status === selectedFilter;
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.course.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const filters = [
    { key: 'all', label: 'All Certificates', count: certificates.length },
    { key: 'active', label: 'Active', count: certificates.filter(c => c.status === 'active').length },
    { key: 'expiring', label: 'Expiring Soon', count: certificates.filter(c => c.status === 'expiring').length },
  ];

  const earnedBadges = badges.filter(badge => badge.earned);
  const availableBadges = badges.filter(badge => !badge.earned);

  return (
    <DashboardLayout currentPage="certificates">
      <div className="space-y-6">
        {/* Header */}
        <div className="neumorphic-card p-6 hover-lift">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-[#333333] mb-2">Certificates & Badges</h1>
              <p className="text-gray-600">Your achievements and professional credentials</p>
            </div>
            
            <div className="flex items-center space-x-4">
  <Button
    className="secondary-button"
    onClick={() => setUploadModalOpen(true)}
  >
    <Upload className="w-4 h-4 mr-2" />
    Upload Certificate
  </Button>
  <Button className="secondary-button">
    <Share2 className="w-4 h-4 mr-2" />
    Share Profile
  </Button>
</div>

          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="neumorphic-card p-6 hover-lift text-center">
            <div className="w-12 h-12 bg-[#4F8FE5] bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-[#4F8FE5]" />
            </div>
            <h3 className="text-2xl font-bold text-[#333333] mb-1">{certificates.length}</h3>
            <p className="text-sm text-gray-600">Total Certificates</p>
          </div>
          
          <div className="neumorphic-card p-6 hover-lift text-center">
            <div className="w-12 h-12 bg-[#A6E86D] bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-6 h-6 text-[#A6E86D]" />
            </div>
            <h3 className="text-2xl font-bold text-[#333333] mb-1">{earnedBadges.length}</h3>
            <p className="text-sm text-gray-600">Badges Earned</p>
          </div>
          
          <div className="neumorphic-card p-6 hover-lift text-center">
            <div className="w-12 h-12 bg-[#B6A4F9] bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-[#B6A4F9]" />
            </div>
            <h3 className="text-2xl font-bold text-[#333333] mb-1">
              {Math.round(certificates.reduce((sum, cert) => sum + cert.score, 0) / certificates.length)}%
            </h3>
            <p className="text-sm text-gray-600">Average Score</p>
          </div>
          
          <div className="neumorphic-card p-6 hover-lift text-center">
            <div className="w-12 h-12 bg-orange-400 bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Medal className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-[#333333] mb-1">
              {certificates.filter(c => c.type === 'professional' || c.type === 'specialist').length}
            </h3>
            <p className="text-sm text-gray-600">Professional Certs</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="neumorphic-card p-6 hover-lift">
          <div className="flex space-x-2">
            <Button
              variant={activeTab === 'certificates' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('certificates')}
              className={activeTab === 'certificates' ? 'primary-button' : 'hover:bg-white/80 rounded-xl'}
            >
              <Award className="w-4 h-4 mr-2" />
              Certificates
            </Button>
            <Button
              variant={activeTab === 'badges' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('badges')}
              className={activeTab === 'badges' ? 'primary-button' : 'hover:bg-white/80 rounded-xl'}
            >
              <Trophy className="w-4 h-4 mr-2" />
              Badges
            </Button>
          </div>
        </div>

        {/* Certificates Tab */}
        {activeTab === 'certificates' && (
          <>
            {/* Filters and Search */}
            <div className="neumorphic-card p-6 hover-lift">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search certificates..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 input-field focus:outline-none focus:ring-2 focus:ring-[#4F8FE5]/30"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {filters.map((filter) => (
                    <Button
                      key={filter.key}
                      variant={selectedFilter === filter.key ? 'default' : 'ghost'}
                      onClick={() => setSelectedFilter(filter.key)}
                      className={selectedFilter === filter.key ? 'primary-button' : 'hover:bg-white/80 rounded-xl'}
                    >
                      {filter.label}
                      <span className="ml-2 bg-white/30 px-2 py-1 rounded-full text-xs">
                        {filter.count}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Certificates Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredCertificates.map((certificate) => (
                <div key={certificate.id} className="neumorphic-card p-6 hover-lift">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(certificate.status)}`}>
                      <div className="flex items-center space-x-1">
                        <Award className="w-3 h-3" />
                        <span className="capitalize">{certificate.status}</span>
                      </div>
                    </div>
                    
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(certificate.type)}`}>
                      <div className="flex items-center space-x-1">
                        {getTypeIcon(certificate.type)}
                        <span className="capitalize">{certificate.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-20 h-16 rounded-xl object-cover shadow-lg flex-shrink-0"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-[#333333] mb-1">{certificate.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{certificate.course}</p>
                      <p className="text-sm text-gray-500">by {certificate.instructor}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">Issue Date:</span>
                      <p className="font-medium text-[#333333]">{new Date(certificate.issueDate).toISOString().split('T')[0]}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Grade:</span>
                      <p className="font-medium text-[#333333]">{certificate.grade} ({certificate.score}%)</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Credential ID:</span>
                      <p className="font-medium text-[#333333] text-xs">{certificate.credentialId}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">
                        {certificate.expiryDate ? 'Expires:' : 'Valid:'}
                      </span>
                      <p className="font-medium text-[#333333]">
                        {certificate.expiryDate ? new Date(certificate.expiryDate).toLocaleDateString() : 'Lifetime'}
                      </p>
                    </div>
                  </div>

                  {certificate.skills && (
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Skills Verified:</p>
                      <div className="flex flex-wrap gap-2">
                        {certificate.skills.map((skill, index) => (
                          <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <Button size="sm" className="primary-button flex-1">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                    <Button size="sm" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="border-green-200 text-green-600 hover:bg-green-50">
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Badges Tab */}
        {activeTab === 'badges' && (
          <div className="space-y-6">
            {/* Earned Badges */}
            <div className="neumorphic-card p-6 hover-lift">
              <h2 className="text-xl font-bold text-[#333333] mb-6">Earned Badges ({earnedBadges.length})</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {earnedBadges.map((badge, index) => (
                  <div key={index} className="bg-gradient-to-r from-[#DCEEFF] to-[#EEF4FF] rounded-xl p-4 text-center border-2 border-[#4F8FE5]/30 shadow-lg">
                    <div className="text-4xl mb-3">{badge.icon}</div>
                    <h3 className="font-semibold text-[#333333] text-sm mb-2">{badge.name}</h3>
                    <p className="text-xs text-gray-600 mb-3">{badge.description}</p>
                    <div className="text-xs bg-[#A6E86D] text-white px-2 py-1 rounded-full">
                      Earned {new Date(badge.date!).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Available Badges */}
            <div className="neumorphic-card p-6 hover-lift">
              <h2 className="text-xl font-bold text-[#333333] mb-6">Available Badges ({availableBadges.length})</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {availableBadges.map((badge, index) => (
                  <div key={index} className="bg-white/60 rounded-xl p-4 text-center border-2 border-gray-200 opacity-75">
                    <div className="text-4xl mb-3 grayscale">{badge.icon}</div>
                    <h3 className="font-semibold text-[#333333] text-sm mb-2">{badge.name}</h3>
                    <p className="text-xs text-gray-600 mb-3">{badge.description}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div 
                        className="bg-[#4F8FE5] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${badge.progress}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-500">{badge.progress}% complete</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {filteredCertificates.length === 0 && activeTab === 'certificates' && (
          <div className="neumorphic-card p-12 text-center">
            <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#333333] mb-2">No certificates found</h3>
            <p className="text-gray-600">No certificates match the selected filter or search terms</p>
          </div>
        )}
      </div>
      {uploadModalOpen && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="relative w-full max-w-xl bg-white rounded-2xl p-6 shadow-xl">
      <h2 className="text-xl font-bold text-[#333] mb-4">Upload Certificate</h2>

      <form className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Certificate Title</label>
          <input
            type="text"
            placeholder="e.g. Python Fundamentals"
            className="w-full px-4 py-2 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Issuer & Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Issuer</label>
            <input
              type="text"
              placeholder="e.g. EduFlow Academy"
              className="w-full px-4 py-2 border rounded-xl text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Issue Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-xl text-sm"
            />
          </div>
        </div>

        {/* Upload Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Upload Certificate File</label>

          <div
            className="w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 hover:bg-blue-50/20 transition"
          >
            <Upload className="w-8 h-8 text-blue-500 mb-2" />
            <p className="text-sm text-gray-700">
              Drag & drop a PDF or image file here<br />
              <span className="text-xs text-gray-500">or click to select</span>
            </p>
            <input
              type="file"
              accept=".pdf,.png,.jpg,.jpeg"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setSelectedFile(file.name);
                }
              }}
            />
            {selectedFile && (
              <p className="mt-3 text-xs text-green-700 font-medium">Selected: {selectedFile}</p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2 pt-2">
          <Button
            type="button"
            variant="ghost"
            className="rounded-xl"
            onClick={() => {
              setUploadModalOpen(false);
              setSelectedFile('');
            }}
          >
            Cancel
          </Button>
          <Button type="submit" className="primary-button">
            Upload
          </Button>
        </div>
      </form>

      <button
        onClick={() => {
          setUploadModalOpen(false);
          setSelectedFile('');
        }}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  </div>
)}

    </DashboardLayout>
  );
}