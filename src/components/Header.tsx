import { UserMenu } from '@/components/header/UserMenu';
import type { AuthenticatedUser } from '@/setup/better-auth';
import { Box, Button, Group, Text } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import logoUrl from '../logo.svg';

export function Header({ user }: { user: AuthenticatedUser | null }) {
  //
  return (
    <Box
      component="header"
      className="fixed top-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-b border-white/10 z-[9999] h-16 px-4"
    >
      <Group justify="space-between" h="100%">
        <Box className="flex items-center gap-1">
          {/* Logo Section */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <img src={logoUrl} alt="Logo" style={{ width: 40, height: 40 }} />
            <Text
              component="span"
              size="lg"
              fw={700}
              className="ml-2 hidden md:flex font-mono tracking-widest text-white no-underline"
            >
              DEVSHARE
            </Text>
          </Link>
        </Box>

        {/* User/Navigation Section */}

        <Group gap="xs">
          <Button component={Link} to="/" variant="subtle" color="gray" className="text-gray-400 hover:text-cyan-400">
            Create
          </Button>

          {user ? (
            <UserMenu user={user} />
          ) : (
            <Button
              variant="filled"
              color="cyan"
              className="bg-cyan-500 hover:bg-cyan-600 normal-case font-bold transition-colors"
              onClick={() => {
                /* Add login logic here */
              }}
            >
              Sign In
            </Button>
          )}
        </Group>
      </Group>
    </Box>
  );
}
