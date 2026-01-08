import { NotLoggedIn } from '@/components/NotLoggedIn';
import { Container } from '@mantine/core';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: IndexComponent });

function IndexComponent() {
  return (
    <Container size="lg">
      <NotLoggedIn />
    </Container>
  );
}
