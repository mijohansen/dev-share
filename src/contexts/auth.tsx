import { getCurrentUserFn } from '@/setup/better-auth';
import { useQuery } from '@tanstack/react-query';
import { useServerFn } from '@tanstack/react-start';
import { createContext, ReactNode, useContext } from 'react';

type AuthenticatedUser = {
  id: string;
  email: string;
  name: string;
  image?: string | null | undefined;
};

type AuthContextType = {
  user: AuthenticatedUser | null | undefined;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const getCurrentUser = useServerFn(getCurrentUserFn);
  const { data: user, isLoading } = useQuery({
    queryKey: ['getCurrentUser'],
    queryFn: getCurrentUser,
  });
  return <AuthContext.Provider value={{ user, isLoading }}>{children}</AuthContext.Provider>;
}

export function useAuthData(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
