import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  onAuthStateChanged, 
  signInWithPhoneNumber, 
  RecaptchaVerifier,
  signOut as firebaseSignOut,
  User,
  ConfirmationResult
} from 'firebase/auth';
import { auth } from '../firebase/config';

// Define the auth context type
interface AuthContextType {
  user: User | null;
  loading: boolean;
  sendOTP: (phoneNumber: string) => Promise<ConfirmationResult | null>;
  confirmOTP: (confirmationResult: ConfirmationResult, code: string) => Promise<User | null>;
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
  
  // Setup recaptcha verifier
  const setupRecaptcha = (phoneNumber: string) => {
    if (typeof window !== 'undefined') {
      const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: () => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        }
      });
      
      return recaptchaVerifier;
    }
    return null;
  };

  // Send OTP to the phone number
  const sendOTP = async (phoneNumber: string): Promise<ConfirmationResult | null> => {
    try {
      const recaptchaVerifier = setupRecaptcha(phoneNumber);
      if (!recaptchaVerifier) return null;
      
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
      return confirmationResult;
    } catch (error) {
      console.error("Error sending OTP:", error);
      return null;
    }
  };

  // Confirm the OTP code
  const confirmOTP = async (confirmationResult: ConfirmationResult, code: string): Promise<User | null> => {
    try {
      const result = await confirmationResult.confirm(code);
      setUser(result.user);
      return result.user;
    } catch (error) {
      console.error("Error confirming OTP:", error);
      return null;
    }
  };

  // Sign out
  const signOut = async (): Promise<void> => {
    try {
      await firebaseSignOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Subscribe to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    // Cleanup subscription
    return () => unsubscribe();
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