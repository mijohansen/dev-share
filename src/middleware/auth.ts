import { auth } from '@/setup/better-auth';
import { createMiddleware } from '@tanstack/react-start';
import { getRequestHeaders } from '@tanstack/react-start/server';
import { redirect } from '@tanstack/router-core';

export const authMiddleware = createMiddleware().server(async ({ next, request }) => {
  const headers = getRequestHeaders();
  const session = await auth.api.getSession({ headers });
  const requestUrl = new URL(request.url);
  if (requestUrl.pathname.startsWith('/api/auth/')) {
    return next();
  }
  if (session) {
    return next();
  }
  const { url: redirectUrl } = await auth.api.signInSocial({
    body: {
      provider: 'github', // or any other provider id
    },
  });
  throw redirect({ href: redirectUrl });
});
