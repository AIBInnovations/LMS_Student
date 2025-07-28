"use client";

import { useState } from "react";
import { Plus, Hash, Users, Search, Send, MessageSquare, UserPlus, Crown, MoreVertical, Menu, X, ArrowLeft } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";

const mockGroups = [
  {
    id: "1",
    name: "React Beginners",
    description: "Learn React from scratch",
    memberCount: 45,
    isOwner: true,
    unreadCount: 3,
    channels: [
      { id: "1-1", name: "general", type: "text" },
      { id: "1-2", name: "help", type: "text" },
      { id: "1-3", name: "resources", type: "text" },
    ]
  },
  {
    id: "2",
    name: "AI & ML Enthusiasts",
    description: "Artificial Intelligence and Machine Learning",
    memberCount: 128,
    isOwner: false,
    unreadCount: 0,
    channels: [
      { id: "2-1", name: "general", type: "text" },
      { id: "2-2", name: "papers", type: "text" },
      { id: "2-3", name: "projects", type: "text" },
    ]
  },
  {
    id: "3",
    name: "Java DSA Warriors",
    description: "Data Structures and Algorithms in Java",
    memberCount: 89,
    isOwner: false,
    unreadCount: 7,
    channels: [
      { id: "3-1", name: "general", type: "text" },
      { id: "3-2", name: "daily-problems", type: "text" },
      { id: "3-3", name: "study-room", type: "voice" },
    ]
  },
];

const mockMessages = [
  { id: 1, user: "John Doe", message: "Hey everyone! Just joined the group", timestamp: "2:30 PM", avatar: "JD" },
  { id: 2, user: "Sarah Wilson", message: "Welcome John! Feel free to ask any questions", timestamp: "2:32 PM", avatar: "SW" },
  { id: 3, user: "Mike Chen", message: "Has anyone tried the new React 18 features?", timestamp: "2:35 PM", avatar: "MC" },
  { id: 4, user: "You", message: "I've been experimenting with Suspense, it's pretty cool!", timestamp: "2:37 PM", avatar: "ME" },
];

export default function StudyGroups() {
  const [groups, setGroups] = useState(mockGroups);
  const [activeGroup, setActiveGroup] = useState<string | null>("1");
  const [activeChannel, setActiveChannel] = useState<string | null>("1-1");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(mockMessages);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const activeGroupData = groups.find(g => g.id === activeGroup);
  const activeChannelData = activeGroupData?.channels.find(c => c.id === activeChannel);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    const newMessage = {
      id: messages.length + 1,
      user: "You",
      message: message.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: "ME"
    };
    
    setMessages([...messages, newMessage]);
    setMessage("");
  };

  const CreateGroupModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 w-full max-w-md border dark:border-zinc-700">
        <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Create Study Group</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Group Name</label>
            <input
              type="text"
              placeholder="e.g., Python for Beginners"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm lg:text-base"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Description</label>
            <textarea
              placeholder="What's this group about?"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none text-sm lg:text-base"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              onClick={() => setShowCreateModal(false)}
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors text-sm lg:text-base"
            >
              Cancel
            </button>
            <button
              onClick={() => setShowCreateModal(false)}
              className="flex-1 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors text-sm lg:text-base"
            >
              Create Group
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const JoinGroupModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 w-full max-w-md border dark:border-zinc-700">
        <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Join Study Group</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Group Code or Link</label>
            <input
              type="text"
              placeholder="Enter invitation code or paste link"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm lg:text-base"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              onClick={() => setShowJoinModal(false)}
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors text-sm lg:text-base"
            >
              Cancel
            </button>
            <button
              onClick={() => setShowJoinModal(false)}
              className="flex-1 px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors text-sm lg:text-base"
            >
              Join Group
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <DashboardLayout>
    <div className="flex h-full bg-gray-50 dark:bg-zinc-900 relative border border-gray">
      
      {/* Mobile Sidebar Overlay */}
      {showMobileSidebar && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setShowMobileSidebar(false)}
        />
      )}

      {/* Groups Sidebar */}
      <div className={`w-80 bg-white dark:bg-zinc-800 border-r border-gray-200 dark:border-zinc-700 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        showMobileSidebar ? 'translate-x-0' : '-translate-x-full'
      } fixed lg:relative h-full z-50 lg:z-0`}>
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-zinc-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowMobileSidebar(false)}
                className="lg:hidden p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Study Groups</h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowJoinModal(true)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-700 hover:bg-gray-200 dark:hover:bg-zinc-600 transition-colors"
                title="Join Group"
              >
                <UserPlus className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
              <button
                onClick={() => setShowCreateModal(true)}
                className="p-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors"
                title="Create Group"
              >
                <Plus className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search groups..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-zinc-700 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
        </div>

        {/* Groups List */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-2">
            {groups.map((group) => (
              <div key={group.id} className="space-y-2">
                <div
                  onClick={() => {
                    setActiveGroup(group.id);
                    setShowMobileSidebar(false);
                  }}
                  className={`p-3 rounded-lg cursor-pointer transition-all ${
                    activeGroup === group.id
                      ? "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
                      : "hover:bg-gray-50 dark:hover:bg-zinc-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                        {group.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {group.name}
                        {group.isOwner && <Crown className="w-4 h-4 text-yellow-500 inline ml-1" />}
                      </div>
                    </div>
                    {group.unreadCount > 0 && (
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        {group.unreadCount}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                    {group.description}
                  </p>
                  <div className="flex items-center justify-between mt-2 text-xs text-gray-400 dark:text-gray-500">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {group.memberCount} members
                    </span>
                    <span>{group.channels.length} channels</span>
                  </div>
                </div>

                {/* Channels for active group */}
                {activeGroup === group.id && (
                  <div className="ml-4 space-y-1">
                    {group.channels.map((channel) => (
                      <div
                        key={channel.id}
                        onClick={() => {
                          setActiveChannel(channel.id);
                          setShowMobileSidebar(false);
                        }}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                          activeChannel === channel.id
                            ? "bg-gray-100 dark:bg-zinc-700 text-gray-900 dark:text-white"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-750 hover:text-gray-800 dark:hover:text-gray-200"
                        }`}
                      >
                        <Hash className="w-4 h-4" />
                        <span className="text-sm font-medium">{channel.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {activeGroupData && activeChannelData ? (
          <>
            {/* Chat Header */}
            <div className="h-16 px-4 lg:px-6 flex items-center justify-between border-b border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowMobileSidebar(true)}
                  className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors"
                >
                  <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
                <Hash className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm lg:text-base">{activeChannelData.name}</h3>
                  <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 hidden sm:block">{activeGroupData.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors">
                  <Users className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors">
                  <MoreVertical className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className="flex items-start gap-3">
                  <div className="w-8 lg:w-10 h-8 lg:h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-xs lg:text-sm flex-shrink-0">
                    {msg.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-semibold text-gray-900 dark:text-white text-sm lg:text-base">{msg.user}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{msg.timestamp}</span>
                    </div>
                    <p className="text-gray-800 dark:text-gray-200 break-words text-sm lg:text-base">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 lg:p-6 border-t border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800">
              <div className="flex items-end gap-2 lg:gap-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(e)}
                    placeholder={`Message #${activeChannelData.name}`}
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 rounded-lg border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm lg:text-base"
                  />
                </div>
                <button
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className="px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1 lg:gap-2 text-sm lg:text-base"
                >
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">Send</span>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="text-center max-w-sm">
              <button
                onClick={() => setShowMobileSidebar(true)}
                className="lg:hidden mb-4 p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
              <MessageSquare className="w-12 h-12 mx-auto mb-4 text-gray-400 dark:text-gray-500" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Welcome to Study Groups
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm lg:text-base">
                Select a group and channel to start chatting with fellow learners, or create a new group to get started.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      {showCreateModal && <CreateGroupModal />}
      {showJoinModal && <JoinGroupModal />}
    </div>
    </DashboardLayout>
  );
}