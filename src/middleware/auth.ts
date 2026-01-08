import { auth } from '@/setup/better-auth';
import { createMiddleware } from '@tanstack/react-start';
import { getRequestHeaders } from '@tanstack/react-start/server';
import { redirect } from '@tanstack/router-core';

export const authMiddleware = createMiddleware().server(async ({ next, request }) => {
  const headers = await getRequestHeaders();
  const session = await auth.api.getSession({ headers });
  const requestUrl = new URL(request.url);
  const isFrontpage = requestUrl.pathname === '/';
  const isLoggedIn = !!session;
  if (requestUrl.pathname === '/login') {
    const { url: redirectUrl } = await auth.api.signInSocial({
      body: {
        provider: 'github', // or any other provider id
      },
    });
    console.log('Logging in with github...');
    throw redirect({ href: redirectUrl });
  }
  if (isLoggedIn && isFrontpage) {
    throw redirect({ to: '/repos' });
  }
  return next();
});
