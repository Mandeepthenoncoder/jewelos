'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Mock chat types
interface ChatMessage {
  id: string;
  text: string;
  timestamp: string;
  sender: 'user' | 'customer';
  status?: 'sent' | 'delivered' | 'read';
  attachments?: string[];
}

interface ChatContact {
  id: string;
  name: string;
  phone: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  avatar?: string;
  status: 'online' | 'offline';
  tags: string[];
}

export default function WhatsAppPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContactId, setSelectedContactId] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [activeTab, setActiveTab] = useState<'chats' | 'broadcasts' | 'templates'>('chats');

  // Mock contacts data
  const contacts: ChatContact[] = [
    {
      id: '1',
      name: 'Rajesh Kumar',
      phone: '+91 98765 43210',
      lastMessage: 'I will visit the store tomorrow to check the collection',
      lastMessageTime: '10:30 AM',
      unreadCount: 2,
      status: 'online',
      tags: ['VIP', 'Wedding']
    },
    {
      id: '2',
      name: 'Priya Sharma',
      phone: '+91 87654 32109',
      lastMessage: 'Can you send me photos of the diamond sets?',
      lastMessageTime: 'Yesterday',
      unreadCount: 0,
      status: 'offline',
      tags: ['Diamond', 'Anniversary']
    },
    {
      id: '3',
      name: 'Amit Patel',
      phone: '+91 76543 21098',
      lastMessage: 'Thank you for the information',
      lastMessageTime: 'Yesterday',
      unreadCount: 0,
      status: 'offline',
      tags: ['Gold', 'Investment']
    },
    {
      id: '4',
      name: 'Deepika Singh',
      phone: '+91 65432 10987',
      lastMessage: 'What are your store hours today?',
      lastMessageTime: '3 days ago',
      unreadCount: 0,
      status: 'offline',
      tags: ['Bride', 'Custom']
    }
  ];

  // Mock messages for selected contact
  const messages: Record<string, ChatMessage[]> = {
    '1': [
      {
        id: '101',
        text: 'Hello, I\'m interested in your gold jewelry collection',
        timestamp: '2025-05-08T10:15:00',
        sender: 'customer'
      },
      {
        id: '102',
        text: 'Welcome to Sharma Jewellers! We have a great selection of gold jewelry. Are you looking for something specific?',
        timestamp: '2025-05-08T10:18:00',
        sender: 'user',
        status: 'read'
      },
      {
        id: '103',
        text: 'I\'m looking for wedding jewelry sets',
        timestamp: '2025-05-08T10:20:00',
        sender: 'customer'
      },
      {
        id: '104',
        text: 'We have exclusive wedding collections. Would you like to visit our store or should I send you some photos?',
        timestamp: '2025-05-08T10:22:00',
        sender: 'user',
        status: 'read'
      },
      {
        id: '105',
        text: 'Please send some photos first',
        timestamp: '2025-05-08T10:25:00',
        sender: 'customer'
      },
      {
        id: '106',
        text: 'Here are some of our best-selling wedding sets',
        timestamp: '2025-05-08T10:28:00',
        sender: 'user',
        status: 'read',
        attachments: ['wedding_set_1.jpg', 'wedding_set_2.jpg']
      },
      {
        id: '107',
        text: 'I will visit the store tomorrow to check the collection',
        timestamp: '2025-05-08T10:30:00',
        sender: 'customer'
      }
    ],
    '2': [
      {
        id: '201',
        text: 'Hi, do you have diamond necklaces?',
        timestamp: '2025-05-07T14:10:00',
        sender: 'customer'
      },
      {
        id: '202',
        text: 'Yes, we have a beautiful collection of diamond necklaces. Are you looking for something specific?',
        timestamp: '2025-05-07T14:12:00',
        sender: 'user',
        status: 'read'
      },
      {
        id: '203',
        text: 'Can you send me photos of the diamond sets?',
        timestamp: '2025-05-07T14:15:00',
        sender: 'customer'
      }
    ]
  };

  // Filter contacts based on search
  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone.includes(searchTerm)
  );

  // Get selected contact's messages
  const selectedContactMessages = selectedContactId ? messages[selectedContactId] || [] : [];
  const selectedContact = contacts.find(contact => contact.id === selectedContactId);

  // Format timestamp
  const formatMessageTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Format date
  const formatMessageDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString();
    }
  };

  // Handle sending a new message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim() || !selectedContactId) return;
    
    // In a real app, this would send the message to your backend
    console.log(`Sending message to ${selectedContactId}: ${newMessage}`);
    
    // Clear the input
    setNewMessage('');
  };

  // Templates mock data
  const templates = [
    {
      id: '1',
      name: 'Welcome Message',
      content: 'Thank you for contacting Sharma Jewellers! Our team will assist you shortly. In the meantime, you can browse our catalog at jewellerwebsite.com'
    },
    {
      id: '2',
      name: 'Follow-up After Store Visit',
      content: 'Hello {{name}}, thank you for visiting our store today. We hope you liked our collection. Feel free to reach out if you have any questions!'
    },
    {
      id: '3',
      name: 'New Collection Announcement',
      content: 'Introducing our new {{season}} collection! Exclusive designs now available at all our stores. Visit today to get early access and special discounts!'
    }
  ];

  // Broadcast campaigns mock data
  const broadcasts = [
    {
      id: '1',
      name: 'Diwali Special Offer',
      recipients: 342,
      sent: '2025-05-01',
      status: 'completed',
      delivered: 315,
      read: 203
    },
    {
      id: '2',
      name: 'New Diamond Collection',
      recipients: 158,
      sent: '2025-04-15',
      status: 'completed',
      delivered: 150,
      read: 122
    },
    {
      id: '3',
      name: 'Wedding Season Showcase',
      recipients: 0,
      sent: '',
      status: 'draft',
      delivered: 0,
      read: 0
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">WhatsApp Business</h1>
          <p className="text-neutral-500 mt-1">Connect with customers via WhatsApp</p>
        </div>
        <div className="flex gap-2">
          <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
            <Link href="/whatsapp/broadcast/new">
              <span className="mr-2">📢</span> New Broadcast
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/whatsapp/templates/new">
              <span className="mr-2">📝</span> New Template
            </Link>
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-neutral-200">
        <div className="flex -mb-px">
          <button
            onClick={() => setActiveTab('chats')}
            className={`py-2 px-4 font-medium text-sm ${
              activeTab === 'chats'
                ? 'border-b-2 border-green-600 text-green-600'
                : 'text-neutral-500 hover:text-neutral-700'
            }`}
          >
            Chats
          </button>
          <button
            onClick={() => setActiveTab('broadcasts')}
            className={`py-2 px-4 font-medium text-sm ${
              activeTab === 'broadcasts'
                ? 'border-b-2 border-green-600 text-green-600'
                : 'text-neutral-500 hover:text-neutral-700'
            }`}
          >
            Broadcasts
          </button>
          <button
            onClick={() => setActiveTab('templates')}
            className={`py-2 px-4 font-medium text-sm ${
              activeTab === 'templates'
                ? 'border-b-2 border-green-600 text-green-600'
                : 'text-neutral-500 hover:text-neutral-700'
            }`}
          >
            Templates
          </button>
        </div>
      </div>

      {/* Chats Tab */}
      {activeTab === 'chats' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contacts List */}
          <div className="lg:col-span-1">
            <Card className="border h-[600px] flex flex-col">
              <div className="p-3 border-b">
                <Input
                  placeholder="Search contacts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="overflow-y-auto flex-1">
                {filteredContacts.length === 0 ? (
                  <div className="p-4 text-center text-neutral-500">
                    No contacts found
                  </div>
                ) : (
                  <div className="divide-y">
                    {filteredContacts.map((contact) => (
                      <div
                        key={contact.id}
                        onClick={() => setSelectedContactId(contact.id)}
                        className={`p-3 hover:bg-neutral-50 cursor-pointer ${
                          selectedContactId === contact.id ? 'bg-neutral-100' : ''
                        }`}
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-green-100 text-green-800 rounded-full flex items-center justify-center mr-3">
                            {contact.name.charAt(0).toUpperCase()}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between">
                              <p className="font-medium text-neutral-900 truncate">{contact.name}</p>
                              <p className="text-xs text-neutral-500">{contact.lastMessageTime}</p>
                            </div>
                            <div className="flex justify-between mt-1">
                              <p className="text-sm text-neutral-600 truncate">{contact.lastMessage}</p>
                              {contact.unreadCount > 0 && (
                                <span className="ml-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                  {contact.unreadCount}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Chat Window */}
          <div className="lg:col-span-2">
            <Card className="border h-[600px] flex flex-col">
              {selectedContactId ? (
                <>
                  {/* Chat Header */}
                  <div className="p-3 border-b flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-100 text-green-800 rounded-full flex items-center justify-center mr-3">
                        {selectedContact?.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-medium">{selectedContact?.name}</p>
                        <p className="text-xs text-neutral-500">{selectedContact?.phone}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/crm/leads/${selectedContactId}`}>
                          View Profile
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50">
                    {selectedContactMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[70%] p-3 rounded-lg ${
                            message.sender === 'user'
                              ? 'bg-green-100 text-neutral-800'
                              : 'bg-white text-neutral-800 border'
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          {message.attachments && message.attachments.length > 0 && (
                            <div className="mt-2 flex gap-2">
                              {message.attachments.map((attachment, index) => (
                                <div key={index} className="bg-neutral-200 text-neutral-700 px-2 py-1 rounded text-xs">
                                  📎 {attachment}
                                </div>
                              ))}
                            </div>
                          )}
                          <div className="mt-1 text-right">
                            <span className="text-xs text-neutral-500">
                              {formatMessageTime(message.timestamp)}
                            </span>
                            {message.sender === 'user' && message.status && (
                              <span className="ml-1 text-xs text-neutral-500">
                                {message.status === 'sent' && '✓'}
                                {message.status === 'delivered' && '✓✓'}
                                {message.status === 'read' && '✓✓'}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="p-3 border-t">
                    <form onSubmit={handleSendMessage} className="flex gap-2">
                      <Input
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="flex-1"
                      />
                      <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
                        Send
                      </Button>
                    </form>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">💬</span>
                    </div>
                    <h3 className="text-lg font-medium text-neutral-900">Select a conversation</h3>
                    <p className="text-neutral-500 mt-1">
                      Choose a contact from the list to start chatting
                    </p>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      )}

      {/* Broadcasts Tab */}
      {activeTab === 'broadcasts' && (
        <div className="space-y-4">
          <Card className="border">
            <div className="p-4 border-b">
              <h2 className="font-semibold">Recent Broadcasts</h2>
            </div>
            <div className="divide-y">
              {broadcasts.map((broadcast) => (
                <div key={broadcast.id} className="p-4 hover:bg-neutral-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-neutral-900">{broadcast.name}</h3>
                      <p className="text-sm text-neutral-500 mt-1">
                        {broadcast.status === 'completed' 
                          ? `Sent on ${broadcast.sent} to ${broadcast.recipients} contacts` 
                          : 'Draft - Not sent yet'}
                      </p>
                    </div>
                    <div>
                      {broadcast.status === 'completed' ? (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          Completed
                        </span>
                      ) : (
                        <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                          Draft
                        </span>
                      )}
                    </div>
                  </div>
                  {broadcast.status === 'completed' && (
                    <div className="grid grid-cols-3 gap-4 mt-3">
                      <div className="text-center p-2 bg-neutral-50 rounded">
                        <p className="text-sm text-neutral-600">Delivered</p>
                        <p className="text-lg font-semibold text-neutral-900">
                          {Math.round((broadcast.delivered / broadcast.recipients) * 100)}%
                        </p>
                      </div>
                      <div className="text-center p-2 bg-neutral-50 rounded">
                        <p className="text-sm text-neutral-600">Read</p>
                        <p className="text-lg font-semibold text-neutral-900">
                          {Math.round((broadcast.read / broadcast.recipients) * 100)}%
                        </p>
                      </div>
                      <div className="text-center p-2 bg-neutral-50 rounded">
                        <p className="text-sm text-neutral-600">Recipients</p>
                        <p className="text-lg font-semibold text-neutral-900">{broadcast.recipients}</p>
                      </div>
                    </div>
                  )}
                  <div className="mt-3 flex justify-end gap-2">
                    {broadcast.status === 'draft' ? (
                      <>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/whatsapp/broadcast/${broadcast.id}/edit`}>
                            Edit
                          </Link>
                        </Button>
                        <Button className="bg-green-600 hover:bg-green-700 text-white" size="sm" asChild>
                          <Link href={`/whatsapp/broadcast/${broadcast.id}/send`}>
                            Send
                          </Link>
                        </Button>
                      </>
                    ) : (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/whatsapp/broadcast/${broadcast.id}`}>
                          View Report
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {broadcasts.length === 0 && (
              <div className="p-8 text-center">
                <p className="text-neutral-500">No broadcasts created yet</p>
                <Button asChild className="mt-4 bg-green-600 hover:bg-green-700 text-white">
                  <Link href="/whatsapp/broadcast/new">
                    Create Broadcast
                  </Link>
                </Button>
              </div>
            )}
          </Card>
        </div>
      )}

      {/* Templates Tab */}
      {activeTab === 'templates' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((template) => (
            <Card key={template.id} className="border">
              <div className="p-4 border-b">
                <h3 className="font-medium text-neutral-900">{template.name}</h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-neutral-600 whitespace-pre-line">{template.content}</p>
              </div>
              <div className="p-3 border-t flex justify-end gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/whatsapp/templates/${template.id}/edit`}>
                    Edit
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/whatsapp/templates/${template.id}/use`}>
                    Use Template
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
          
          {/* Add New Template Card */}
          <Card className="border flex flex-col items-center justify-center p-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl text-green-600">+</span>
            </div>
            <h3 className="font-medium text-neutral-900 mb-2">Create New Template</h3>
            <p className="text-sm text-neutral-500 text-center mb-4">
              Create reusable message templates for common responses
            </p>
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
              <Link href="/whatsapp/templates/new">
                Add Template
              </Link>
            </Button>
          </Card>
        </div>
      )}
    </div>
  );
} 