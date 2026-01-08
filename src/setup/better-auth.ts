import { createServerFn } from '@tanstack/react-start';
import { getRequestHeaders } from '@tanstack/react-start/server';
import { betterAuth } from 'better-auth';
import { createAuthClient } from 'better-auth/react';
import { tanstackStartCookies } from 'better-auth/tanstack-start';

export const auth = betterAuth({
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
  plugins: [tanstackStartCookies()], // make sure this is the last plugin in the array
});
export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: 'http://localhost:3000',
});
export function signOutOfGithub({ onSuccess }: { onSuccess: () => void }) {
  return authClient.signOut({
    fetchOptions: {
      onSuccess,
    },
  });
}

export const getCurrentUserFn = createServerFn({ method: 'GET' }).handler(
  async (): Promise<AuthenticatedUser | null> => {
    const headers = await getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (session?.user) {
      const { id, name, email, image } = session.user;
      return { id, name, email, image };
    }
    return null;
  },
);

export type AuthenticatedUser = {
  id: string;
  email: string;
  name: string;
  image?: string | null | undefined;
};
