import { createTheme, MantineProvider } from '@mantine/core';
import type { ReactNode } from 'react';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export function AppThemeProvider({ children }: { children: ReactNode }) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      {children}
    </MantineProvider>
  );
}
