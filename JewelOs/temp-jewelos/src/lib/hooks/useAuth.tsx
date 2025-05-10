'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  onAuthStateChanged, 
  signInWithCustomToken,
  signOut as firebaseSignOut,
  User,
  ConfirmationResult,
  PhoneAuthProvider,
  signInWithCredential
} from 'firebase/auth';
import { auth } from '../firebase/config';

// Define the auth context type
interface AuthContextType {
  user: User | null;
  loading: boolean;
  sendOTP: (phoneNumber: string) => Promise<string | null>;
  confirmOTP: (verificationId: string, code: string) => Promise<User | null>;
  signOut: () => Promise<void>;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  sendOTP: async () => null,
  confirmOTP: async () => null,
  signOut: async () => {},
});

// Hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Provider component to wrap the app with
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Send OTP to the phone number
  const sendOTP = async (phoneNumber: string): Promise<string | null> => {
    try {
      // Validate phone number format
      if (!phoneNumber) {
        throw new Error('Phone number is required');
      }
      
      // Clean up phone number format: remove spaces and ensure it has a country code
      let cleanPhoneNumber = phoneNumber.replace(/\s+/g, '');
      if (!cleanPhoneNumber.startsWith('+')) {
        cleanPhoneNumber = `+91${cleanPhoneNumber}`; // Default to India
      }
      
      console.log(`Starting OTP send to ${cleanPhoneNumber}`);
      
      // For development purposes, we're using a hardcoded verification ID
      // This bypasses the actual SMS sending and reCAPTCHA verification
      // IMPORTANT: This should be replaced with proper verification in production
      const mockVerificationId = `mock-verification-id-${Date.now()}`;
      
      console.log('Development mode: Using mock verification ID');
      
      // In a real app, this would call an API endpoint to trigger the SMS
      // and return a real verification ID
      return mockVerificationId;
    } catch (error) {
      console.error("Error sending OTP:", error);
      throw error;
    }
  };

  // Confirm the OTP code
  const confirmOTP = async (verificationId: string, code: string): Promise<User | null> => {
    try {
      if (!code || code.length !== 6) {
        throw new Error('Invalid OTP code');
      }
      
      console.log(`Verifying OTP: ${code} for ID: ${verificationId}`);
      
      // For development purposes, we're accepting any 6-digit code
      // IMPORTANT: This should be replaced with proper verification in production
      if (/^\d{6}$/.test(code)) {
        // In development, we'll simulate a successful sign-in
        // This would normally be done using PhoneAuthProvider.credential
        
        // For demonstration purposes, we'll use a custom token
        // In a real app, this would come from your backend
        try {
          // Since we can't generate custom tokens on the client side,
          // we'll manually create a temporary anonymous user
          // NOTE: This is a workaround for development only!
          
          // Create a random user ID
          const tempUserId = `temp-user-${Date.now()}`;
          
          // Set a temporary user
          const tempUser = {
            uid: tempUserId,
            phoneNumber: verificationId.includes('+') ? verificationId : '+919876543210', // Use a mock phone number
            isAnonymous: false,
            displayName: null,
            email: null,
            photoURL: null,
            providerId: 'phone',
            emailVerified: false,
            metadata: {
              creationTime: new Date().toISOString(),
              lastSignInTime: new Date().toISOString()
            },
            providerData: []
          } as unknown as User;
          
          setUser(tempUser);
          return tempUser;
        } catch (error) {
          console.error("Error signing in with custom token:", error);
          throw error;
        }
      } else {
        throw new Error('Invalid verification code');
      }
    } catch (error) {
      console.error("Error confirming OTP:", error);
      throw error;
    }
  };

  // Sign out
  const signOut = async (): Promise<void> => {
    try {
      await firebaseSignOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
      throw error;
    }
  };

  // Subscribe to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    user,
    loading,
    sendOTP,
    confirmOTP,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Global type definition
declare global {
  interface Window {
    recaptchaVerifier: any;
  }
} 