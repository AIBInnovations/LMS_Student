"use client";

import React, { useState } from 'react';
import { Bell, X, CheckCircle, AlertCircle, Info, Calendar, BookOpen, Award, MessageCircle, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Notification {
  id: string;
  type: 'assignment' | 'class' | 'announcement' | 'achievement' | 'forum' | 'system';
  title: string;
  message: string;
  time: string;
  read: boolean;
  priority: 'low' | 'medium' | 'high';
  actionUrl?: string;
}

const notifications: Notification[] = [
  {
    id: '1',
    type: 'assignment',
    title: 'Assignment Due Soon',
    message: 'React Component Architecture Project is due in 2 days',
    time: '2 hours ago',
    read: false,
    priority: 'high',
    actionUrl: '/assignments'
  },
  {
    id: '2',
    type: 'class',
    title: 'Live Class Starting',
    message: 'Database Optimization Strategies starts in 15 minutes',
    time: '15 minutes ago',
    read: false,
    priority: 'high',
    actionUrl: '/live-classes'
  },
  {
    id: '3',
    type: 'achievement',
    title: 'New Badge Earned!',
    message: 'Congratulations! You earned the "Quick Learner" badge',
    time: '1 hour ago',
    read: false,
    priority: 'medium',
    actionUrl: '/certificates'
  },
  {
    id: '4',
    type: 'announcement',
    title: 'New Course Available',
    message: 'Machine Learning Fundamentals is now available for enrollment',
    time: '3 hours ago',
    read: true,
    priority: 'medium',
    actionUrl: '/courses'
  },
  {
    id: '5',
    type: 'forum',
    title: 'New Reply in Discussion',
    message: 'Someone replied to your question in React Advanced Patterns',
    time: '5 hours ago',
    read: true,
    priority: 'low',
    actionUrl: '/forums'
  },
  {
    id: '6',
    type: 'system',
    title: 'System Maintenance',
    message: 'Scheduled maintenance on Jan 20, 2-4 AM. Platform will be offline.',
    time: '1 day ago',
    read: true,
    priority: 'medium'
  }
];

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationPanel({ isOpen, onClose }: NotificationPanelProps) {
  const [notificationList, setNotificationList] = useState(notifications);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'assignment':
        return <BookOpen className="w-5 h-5 text-orange-500" />;
      case 'class':
        return <Calendar className="w-5 h-5 text-blue-500" />;
      case 'announcement':
        return <Info className="w-5 h-5 text-purple-500" />;
      case 'achievement':
        return <Award className="w-5 h-5 text-green-500" />;
      case 'forum':
        return <MessageCircle className="w-5 h-5 text-teal-500" />;
      case 'system':
        return <Settings className="w-5 h-5 text-gray-500" />;
      default:
        return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500';
      case 'medium':
        return 'border-l-yellow-500';
      case 'low':
        return 'border-l-green-500';
      default:
        return 'border-l-gray-300';
    }
  };

  const markAsRead = (id: string) => {
    setNotificationList(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotificationList(prev =>
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const deleteNotification = (id: string) => {
    setNotificationList(prev => prev.filter(notif => notif.id !== id));
  };

  const filteredNotifications = filter === 'unread' 
    ? notificationList.filter(notif => !notif.read)
    : notificationList;

  const unreadCount = notificationList.filter(notif => !notif.read).length;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      />
      
      {/* Notification Panel */}
      <div className="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-bold text-[#333333]">Notifications</h2>
            {unreadCount > 0 && (
              <p className="text-sm text-gray-500">{unreadCount} unread</p>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-xl"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Filter Tabs */}
        <div className="flex p-4 space-x-2 border-b border-gray-200">
          <Button
            variant={filter === 'all' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'primary-button' : 'hover:bg-gray-100 rounded-xl'}
          >
            All ({notificationList.length})
          </Button>
          <Button
            variant={filter === 'unread' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setFilter('unread')}
            className={filter === 'unread' ? 'primary-button' : 'hover:bg-gray-100 rounded-xl'}
          >
            Unread ({unreadCount})
          </Button>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={markAllAsRead}
              className="ml-auto hover:bg-gray-100 rounded-xl text-blue-600"
            >
              Mark all read
            </Button>
          )}
        </div>

        {/* Notifications List */}
        <div className="overflow-y-auto max-h-[calc(100vh-200px)] scrollbar-hide">
          {filteredNotifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-gray-500">
              <Bell className="w-12 h-12 mb-4 opacity-50" />
              <p className="text-lg font-medium">No notifications</p>
              <p className="text-sm">You're all caught up!</p>
            </div>
          ) : (
            <div className="space-y-4 p-4 ">
              {filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 rounded-xl border-l-4 ${getPriorityColor(notification.priority)} ${
                    notification.read ? 'bg-gray-50' : 'bg-blue-50'
                  } hover:shadow-md transition-all duration-300 cursor-pointer`}
                  onClick={() => !notification.read && markAsRead(notification.id)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <h3 className={`text-sm font-semibold ${
                          notification.read ? 'text-gray-700' : 'text-[#333333]'
                        }`}>
                          {notification.title}
                        </h3>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full ml-2 mt-1"></div>
                        )}
                      </div>
                      
                      <p className={`text-sm mt-1 ${
                        notification.read ? 'text-gray-600' : 'text-gray-700'
                      }`}>
                        {notification.message}
                      </p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-gray-500">{notification.time}</span>
                        
                        <div className="flex items-center space-x-2">
                          {notification.actionUrl && (
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-xs text-blue-600 hover:bg-blue-100 rounded-lg px-2 py-1"
                              onClick={(e) => {
                                e.stopPropagation();
                                // Navigate to action URL
                                window.location.href = notification.actionUrl!;
                              }}
                            >
                              View
                            </Button>
                          )}
                          
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-xs text-gray-500 hover:bg-gray-200 rounded-lg px-2 py-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteNotification(notification.id);
                            }}
                          >
                            <X className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <Button
            variant="outline"
            className="w-full border-gray-200 hover:bg-gray-50 rounded-xl"
            onClick={() => {
              // Navigate to notification settings
              window.location.href = '/settings';
            }}
          >
            <Settings className="w-4 h-4 mr-2" />
            Notification Settings
          </Button>
        </div>
      </div>
    </>
  );
}