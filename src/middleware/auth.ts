import { auth } from '@/setup/better-auth';
import { createMiddleware } from '@tanstack/react-start';
import { redirect } from '@tanstack/router-core';

export const authMiddleware = createMiddleware().server(async ({ next, request }) => {
  const requestUrl = new URL(request.url);
  if (requestUrl.pathname === '/login') {
    const { url: redirectUrl } = await auth.api.signInSocial({
      body: {
        provider: 'github', // or any other provider id
      },
    });
    console.log('Logging in with github...');
    throw redirect({ href: redirectUrl });
  }
  return next();
});
