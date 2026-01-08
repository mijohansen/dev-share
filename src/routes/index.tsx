import { NotLoggedIn } from '@/components/NotLoggedIn';
import { Container } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: IndexComponent });

function IndexComponent() {
  return (
    <Container maxWidth="lg">
      <NotLoggedIn />
    </Container>
  );
}
