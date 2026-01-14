import { NotLoggedIn } from '@/components/NotLoggedIn';
import { createFileRoute } from '@tanstack/react-router';
import { redirect } from '@tanstack/router-core';

export const Route = createFileRoute('/_pathlessLayout/')({
  component: NotLoggedIn,
  beforeLoad: async ({ context }) => {
    if (context.user) {
      throw redirect({ to: '/repos' });
    }
    return {};
  },
});
