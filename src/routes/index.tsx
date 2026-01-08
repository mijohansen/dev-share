import { NotLoggedIn } from '@/components/NotLoggedIn';
import { AppShell } from '@mantine/core';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: IndexComponent });

function IndexComponent() {
  return (
    <AppShell.Main>
      <NotLoggedIn />
    </AppShell.Main>
  );
}
