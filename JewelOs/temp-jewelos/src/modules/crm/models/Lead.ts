import { Timestamp } from 'firebase/firestore';

// Define tag types for categorizing leads
export type LeadTag = 'VIP' | 'Bride' | 'Family Referral' | 'Walk-in' | 'WhatsApp Inquiry' | 'Repeat Customer' | string;

// Define source types to track where leads came from
export type LeadSource = 'Walk-in' | 'WhatsApp' | 'Referral' | 'Website' | 'Instagram' | 'Campaign' | string;

// Define lead statuses to track sales pipeline
export type LeadStatus = 'New' | 'Contacted' | 'Qualified' | 'Proposal' | 'Negotiation' | 'Won' | 'Lost' | string;

// Define family member relationship for family contacts
export type FamilyRelationship = 'Spouse' | 'Parent' | 'Child' | 'Sibling' | 'In-law' | string;

// Define a family member contact
export interface FamilyMember {
  name: string;
  phone: string;
  relationship: FamilyRelationship;
  notes?: string;
}

// Main Lead model
export interface Lead {
  id?: string;
  name: string;
  phone: string;
  email?: string;
  address?: string;
  city?: string;
  tags: LeadTag[];
  source: LeadSource;
  status: LeadStatus;
  notes?: string;
  familyMembers?: FamilyMember[];
  showroomId: string;
  assignedTo?: string;
  budget?: number;
  interests?: string[];
  lastContactedAt?: Timestamp;
  nextFollowUpAt?: Timestamp;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

// Lead creation input type (omitting optional fields)
export type LeadInput = Omit<Lead, 'id' | 'createdAt' | 'updatedAt'>;

// Collection path for leads
export const LEADS_COLLECTION = 'leads'; 