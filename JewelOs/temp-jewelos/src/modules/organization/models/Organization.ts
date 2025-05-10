import { Timestamp } from 'firebase/firestore';

// Define organization modules
export interface OrgModules {
  crm: boolean;
  whatsapp: boolean;
  campaigns: boolean;
  tasks: boolean;
  catalog: boolean;
}

// Define organization plan type
export type OrgPlanType = 'free' | 'basic' | 'premium' | 'enterprise';

// Define organization model
export interface Organization {
  id?: string;
  name: string;
  ownerName?: string;
  logoUrl?: string;
  city?: string;
  state?: string;
  phone?: string;
  email?: string;
  createdBy: string;
  plan: OrgPlanType;
  modules: OrgModules;
  maxUsers?: number;
  maxShowrooms?: number;
  isActive: boolean;
  settings?: {
    whatsappTemplates?: boolean;
    customFields?: boolean;
    aiMarketing?: boolean;
    multipleShowrooms?: boolean;
  };
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

// Define organization user roles
export type UserRole = 'owner' | 'admin' | 'manager' | 'sales' | 'staff';

// Define organization user
export interface OrgUser {
  id?: string;
  uid: string;
  organizationId: string;
  name: string;
  phone: string;
  email?: string;
  role: UserRole;
  showroomId?: string;
  isActive: boolean;
  lastLoginAt?: Timestamp;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

// Define team invitation
export interface TeamInvite {
  id?: string;
  organizationId: string;
  name: string;
  phone: string;
  email?: string;
  role: UserRole;
  showroomId?: string;
  status: 'pending' | 'accepted' | 'expired';
  invitedBy: string;
  expiresAt: Timestamp;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

// Define showroom model for org locations
export interface Showroom {
  id?: string;
  organizationId: string;
  name: string;
  address?: string;
  city?: string;
  state?: string;
  phone?: string;
  email?: string;
  isHeadOffice: boolean;
  isActive: boolean;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

// Collection paths
export const ORGANIZATIONS_COLLECTION = 'organizations';
export const USERS_COLLECTION = 'users';
export const TEAM_INVITES_COLLECTION = 'teamInvites';
export const SHOWROOMS_COLLECTION = 'showrooms'; 