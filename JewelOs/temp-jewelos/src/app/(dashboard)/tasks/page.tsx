'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Task types
interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'pending' | 'in-progress' | 'completed' | 'overdue';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignedTo: string;
  assignedBy: string;
  dueDate: string;
  createdAt: string;
  completedAt?: string;
  tags: string[];
  relatedTo?: {
    type: 'lead' | 'campaign' | 'collection' | 'other';
    id: string;
    name: string;
  };
}

// User type
interface User {
  id: string;
  name: string;
  role: string;
  avatar?: string;
}

export default function TasksPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterAssignee, setFilterAssignee] = useState<string>('all');
  const [view, setView] = useState<'list' | 'board'>('list');

  // Mock tasks data
  const tasks: Task[] = [
    {
      id: '1',
      title: 'Follow up with Priya Sharma about diamond collection',
      description: 'Call and send WhatsApp catalog for the latest diamond necklace designs',
      status: 'pending',
      priority: 'high',
      assignedTo: 'user1',
      assignedBy: 'user3',
      dueDate: '2025-05-15',
      createdAt: '2025-05-08',
      tags: ['follow-up', 'vip-customer'],
      relatedTo: {
        type: 'lead',
        id: '2',
        name: 'Priya Sharma'
      }
    },
    {
      id: '2',
      title: 'Update website with Diwali collection',
      description: 'Add new product photos and update prices',
      status: 'in-progress',
      priority: 'medium',
      assignedTo: 'user2',
      assignedBy: 'user3',
      dueDate: '2025-05-12',
      createdAt: '2025-05-05',
      tags: ['website', 'collection'],
      relatedTo: {
        type: 'campaign',
        id: '1',
        name: 'Diwali Collection'
      }
    },
    {
      id: '3',
      title: 'Prepare monthly sales report',
      description: 'Compile sales data and create presentation for management meeting',
      status: 'completed',
      priority: 'medium',
      assignedTo: 'user1',
      assignedBy: 'user3',
      dueDate: '2025-05-01',
      createdAt: '2025-04-25',
      completedAt: '2025-05-01',
      tags: ['report', 'monthly']
    },
    {
      id: '4',
      title: 'Order new packaging materials',
      description: 'Contact supplier for new gift boxes and bags with updated branding',
      status: 'overdue',
      priority: 'urgent',
      assignedTo: 'user2',
      assignedBy: 'user3',
      dueDate: '2025-05-05',
      createdAt: '2025-04-25',
      tags: ['inventory', 'packaging']
    },
    {
      id: '5',
      title: 'Send anniversary gift to Vikram Mehta',
      description: 'Prepare and dispatch gift as per discussion',
      status: 'pending',
      priority: 'high',
      assignedTo: 'user1',
      assignedBy: 'user3',
      dueDate: '2025-05-20',
      createdAt: '2025-05-08',
      tags: ['customer-experience', 'vip-customer'],
      relatedTo: {
        type: 'lead',
        id: '5',
        name: 'Vikram Mehta'
      }
    },
    {
      id: '6',
      title: 'Create WhatsApp templates for wedding season',
      description: 'Design 5 new message templates for wedding collection promotion',
      status: 'in-progress',
      priority: 'medium',
      assignedTo: 'user2',
      assignedBy: 'user1',
      dueDate: '2025-05-18',
      createdAt: '2025-05-07',
      tags: ['marketing', 'whatsapp'],
      relatedTo: {
        type: 'campaign',
        id: '2',
        name: 'Wedding Season Special'
      }
    }
  ];

  // Mock users data
  const users: User[] = [
    {
      id: 'user1',
      name: 'Rahul Singh',
      role: 'Sales Executive',
    },
    {
      id: 'user2',
      name: 'Neha Gupta',
      role: 'Marketing Specialist',
    },
    {
      id: 'user3',
      name: 'Amit Kumar',
      role: 'Store Manager',
    }
  ];

  // Filter tasks based on search term and filters
  const filteredTasks = tasks.filter(task => {
    const matchesSearch = 
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      (task.description && task.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (task.relatedTo && task.relatedTo.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesStatus = filterStatus === 'all' || task.status === filterStatus;
    const matchesAssignee = filterAssignee === 'all' || task.assignedTo === filterAssignee;
    
    return matchesSearch && matchesStatus && matchesAssignee;
  });

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Get days until due or days overdue
  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Get task status badge color
  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-blue-100 text-blue-800';
      case 'in-progress':
        return 'bg-amber-100 text-amber-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-neutral-100 text-neutral-800';
    }
  };

  // Get priority badge color
  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'low':
        return 'bg-neutral-100 text-neutral-800';
      case 'medium':
        return 'bg-blue-100 text-blue-800';
      case 'high':
        return 'bg-amber-100 text-amber-800';
      case 'urgent':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-neutral-100 text-neutral-800';
    }
  };

  // Get user name by ID
  const getUserName = (userId: string) => {
    const user = users.find(u => u.id === userId);
    return user ? user.name : 'Unknown User';
  };

  // Group tasks by status for board view
  const groupedTasks = {
    pending: filteredTasks.filter(task => task.status === 'pending'),
    'in-progress': filteredTasks.filter(task => task.status === 'in-progress'),
    completed: filteredTasks.filter(task => task.status === 'completed'),
    overdue: filteredTasks.filter(task => task.status === 'overdue')
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Task Manager</h1>
          <p className="text-neutral-500 mt-1">Assign, track, and manage team tasks</p>
        </div>
        <Button asChild className="bg-amber-500 hover:bg-amber-600 text-white">
          <Link href="/tasks/new">
            <span className="mr-2">+</span> New Task
          </Link>
        </Button>
      </div>

      {/* Filters and View Toggle */}
      <Card className="p-4 border">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="overdue">Overdue</option>
            </select>
            <select
              value={filterAssignee}
              onChange={(e) => setFilterAssignee(e.target.value)}
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="all">All Assignees</option>
              {users.map(user => (
                <option key={user.id} value={user.id}>{user.name}</option>
              ))}
            </select>
            <div className="flex border rounded-md overflow-hidden">
              <button
                onClick={() => setView('list')}
                className={`px-3 py-2 text-sm ${
                  view === 'list' 
                    ? 'bg-amber-500 text-white' 
                    : 'bg-white text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                List
              </button>
              <button
                onClick={() => setView('board')}
                className={`px-3 py-2 text-sm ${
                  view === 'board' 
                    ? 'bg-amber-500 text-white' 
                    : 'bg-white text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                Board
              </button>
            </div>
          </div>
        </div>
      </Card>

      {/* List View */}
      {view === 'list' && (
        <Card className="border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-50 border-b">
                <tr>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-700">Task</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-700">Assignee</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-700">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-700">Priority</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-700">Due Date</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-neutral-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredTasks.map((task) => (
                  <tr key={task.id} className="hover:bg-neutral-50">
                    <td className="py-3 px-4">
                      <Link href={`/tasks/${task.id}`} className="font-medium text-neutral-900 hover:text-amber-600">
                        {task.title}
                      </Link>
                      {task.relatedTo && (
                        <div className="text-xs text-neutral-500 mt-1">
                          Related to: <Link href={`/${task.relatedTo.type === 'lead' ? 'crm/leads' : 'campaigns'}/${task.relatedTo.id}`} className="text-amber-600 hover:underline">{task.relatedTo.name}</Link>
                        </div>
                      )}
                    </td>
                    <td className="py-3 px-4 text-neutral-700">
                      {getUserName(task.assignedTo)}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                        {task.status.charAt(0).toUpperCase() + task.status.slice(1).replace('-', ' ')}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                        {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-neutral-700">{formatDate(task.dueDate)}</div>
                      {task.status !== 'completed' && (
                        <div className={`text-xs ${
                          getDaysUntilDue(task.dueDate) < 0 
                            ? 'text-red-600' 
                            : getDaysUntilDue(task.dueDate) === 0 
                              ? 'text-amber-600' 
                              : 'text-neutral-500'
                        }`}>
                          {getDaysUntilDue(task.dueDate) < 0 
                            ? `${Math.abs(getDaysUntilDue(task.dueDate))} days overdue` 
                            : getDaysUntilDue(task.dueDate) === 0 
                              ? 'Due today' 
                              : `${getDaysUntilDue(task.dueDate)} days left`}
                        </div>
                      )}
                    </td>
                    <td className="py-3 px-4 text-right space-x-2">
                      {task.status !== 'completed' && (
                        <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-800" asChild>
                          <Link href={`/tasks/${task.id}/complete`}>
                            Complete
                          </Link>
                        </Button>
                      )}
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/tasks/${task.id}/edit`}>
                          Edit
                        </Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredTasks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-500">No tasks found. Try changing your filters or create a new task.</p>
              <Button asChild className="mt-4 bg-amber-500 hover:bg-amber-600 text-white">
                <Link href="/tasks/new">
                  Create Task
                </Link>
              </Button>
            </div>
          )}
        </Card>
      )}

      {/* Board View */}
      {view === 'board' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(Object.keys(groupedTasks) as Array<keyof typeof groupedTasks>).map((status) => (
            <div key={status} className="flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <h3 className={`font-medium ${
                  status === 'pending' 
                    ? 'text-blue-700' 
                    : status === 'in-progress' 
                      ? 'text-amber-700' 
                      : status === 'completed' 
                        ? 'text-green-700' 
                        : 'text-red-700'
                }`}>
                  {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
                </h3>
                <span className="text-xs font-medium bg-neutral-100 text-neutral-800 px-2 py-1 rounded-full">
                  {groupedTasks[status].length}
                </span>
              </div>
              
              <div className={`space-y-3 min-h-[200px] ${
                status === 'pending' 
                  ? 'bg-blue-50' 
                  : status === 'in-progress' 
                    ? 'bg-amber-50' 
                    : status === 'completed' 
                      ? 'bg-green-50' 
                      : 'bg-red-50'
              } p-3 rounded-md`}>
                {groupedTasks[status].length === 0 ? (
                  <div className="flex items-center justify-center h-full text-center p-4">
                    <p className="text-neutral-500 text-sm">No tasks</p>
                  </div>
                ) : (
                  groupedTasks[status].map((task) => (
                    <Link key={task.id} href={`/tasks/${task.id}`}>
                      <Card className="border hover:shadow-md transition-all p-3">
                        <div className="flex flex-col space-y-2">
                          <h4 className="font-medium text-neutral-900">{task.title}</h4>
                          <div className="flex justify-between text-xs">
                            <span className={`px-2 py-1 rounded-full font-medium ${getPriorityColor(task.priority)}`}>
                              {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                            </span>
                            <span className="text-neutral-500">
                              {formatDate(task.dueDate)}
                            </span>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <div className="text-xs text-neutral-500">
                              Assigned to: {getUserName(task.assignedTo)}
                            </div>
                            {task.relatedTo && (
                              <div className="text-xs text-amber-600">
                                {task.relatedTo.name}
                              </div>
                            )}
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 border">
          <p className="text-sm text-neutral-600 font-medium">Total Tasks</p>
          <p className="text-2xl font-bold text-neutral-900 mt-1">{tasks.length}</p>
        </Card>
        <Card className="p-4 border">
          <p className="text-sm text-neutral-600 font-medium">Completed</p>
          <p className="text-2xl font-bold text-green-600 mt-1">
            {tasks.filter(task => task.status === 'completed').length}
          </p>
        </Card>
        <Card className="p-4 border">
          <p className="text-sm text-neutral-600 font-medium">Overdue</p>
          <p className="text-2xl font-bold text-red-600 mt-1">
            {tasks.filter(task => task.status === 'overdue').length}
          </p>
        </Card>
        <Card className="p-4 border">
          <p className="text-sm text-neutral-600 font-medium">Completion Rate</p>
          <p className="text-2xl font-bold text-amber-600 mt-1">
            {Math.round((tasks.filter(task => task.status === 'completed').length / tasks.length) * 100)}%
          </p>
        </Card>
      </div>
    </div>
  );
} 