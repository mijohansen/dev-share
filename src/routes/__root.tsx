/// <reference types="vite/client" />
import { Header } from '@/components/Header';
import { NotFound } from '@/components/NotFound';
import { AppContextProvider } from '@/contexts/app-context';
import { MuiProvider } from '@/contexts/mui-provider';
import { authMiddleware } from '@/middleware/auth';
import { getCurrentUserFn } from '@/setup/better-auth';
import { Box } from '@mui/material';
import { QueryClient } from '@tanstack/query-core';
import { TanStackDevtools } from '@tanstack/react-devtools';
import { createRootRouteWithContext, HeadContent, Scripts } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
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
  beforeLoad: async () => ({
    user: await getCurrentUserFn(),
  }),
  server: {
    middleware: [authMiddleware],
  },
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: ReactNode }) {
  const { user } = Route.useRouteContext();
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <MuiProvider>
          <AppContextProvider user={user}>
            <Header user={user} />
            <Box className="h-20" />
            {children}
          </AppContextProvider>
        </MuiProvider>
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
