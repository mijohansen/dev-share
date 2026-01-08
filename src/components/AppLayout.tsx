import { AppHeader } from '@/components/AppHeader';
import { AppShell, Container } from '@mantine/core';
import { Outlet } from '@tanstack/react-router';
import type { ReactNode } from 'react';

export function AppLayout({ children, menuComponent }: { children?: ReactNode; menuComponent?: ReactNode }) {
  console.log('AppLayout rendered');
  return (
    <AppShell
      header={{ height: 64 }}
      padding={'md'}
      navbar={menuComponent ? { width: 250, breakpoint: 'md' } : undefined}
    >
      <AppShell.Section>fsadfs</AppShell.Section>
      <AppHeader />
      {menuComponent && <AppShell.Navbar p="xs">{menuComponent}</AppShell.Navbar>}
      <AppShell.Main>
        <Container size="lg">
          {children}
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
