import { theme } from '@/setup/material-ui';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import type { ReactNode } from 'react';

export function MuiProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
