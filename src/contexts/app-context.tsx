import type { AuthenticatedUser } from '@/setup/better-auth';
import { createContext, ReactNode, useContext } from 'react';

type AppContextType = {
  user: AuthenticatedUser | null;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppContextProvider({ children, user }: { children: ReactNode; user: AuthenticatedUser | null }) {
  return <AppContext.Provider value={{ user }}>{children}</AppContext.Provider>;
}

export function useAppContext(): AppContextType {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppContextProvider');
  }
  return context;
}
