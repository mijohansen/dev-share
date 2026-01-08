/// <reference types="vite/client" />
import { NotFound } from '@/components/NotFound';
import { AppContextProvider } from '@/contexts/app-context';
import { AppThemeProvider } from '@/contexts/app-theme-provider';
import { authMiddleware } from '@/middleware/auth';
import { getCurrentUserFn } from '@/setup/better-auth';
import { QueryClient } from '@tanstack/query-core';
import { TanStackDevtools } from '@tanstack/react-devtools';
import { createRootRouteWithContext, HeadContent, Scripts } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { redirect } from '@tanstack/router-core';
import { type ReactNode } from 'react';
import appCss from '../styles.css?url';

const head = () => ({
  meta: [
    {
      charSet: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      title: 'DEVSHARE',
    },
  ],
  links: [{ rel: 'stylesheet', href: appCss }],
});

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => head(),
  beforeLoad: async ({ location }) => {
    const user = await getCurrentUserFn();
    if (!user && location.pathname !== '/') {
      throw redirect({
        to: '/',
      });
    }
    return {
      user,
    };
  },
  server: {
    middleware: [authMiddleware],
  },
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: ReactNode }) {
  const { user } = Route.useRouteContext();
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <AppThemeProvider>
          <AppContextProvider user={user}>{children}</AppContextProvider>
        </AppThemeProvider>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
