import { UserMenu } from '@/components/header/UserMenu';
import { useAppContext } from '@/contexts/app-context';
import { AppShell, Box, Button, Group, Text } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import logoUrl from '../logo.svg';

export function AppHeader() {
  const { user } = useAppContext();
  return (
    <AppShell.Header
      bg="var(--mantine-color-slate-900-90)"
      style={{ backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}
      px="md"
    >
      <Group justify="space-between" h="100%">
        <Box display="flex" style={{ alignItems: 'center', gap: '4px' }}>
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
              ml="xs"
              visibleFrom="md"
              c="white"
              style={{ fontFamily: 'var(--mantine-font-mono)', tracking: '0.1em' }}
            >
              DEVSHARE
            </Text>
          </Link>
        </Box>

        {/* User/Navigation Section */}

        <Group gap="xs">
          <Button
            component={Link}
            to="/create"
            variant="subtle"
            color="gray"
            c="dimmed"
            style={{ '&:hover': { color: 'var(--mantine-color-cyan-4)' } }}
          >
            Create
          </Button>
          <Button
            component={Link}
            to="/repos"
            variant="subtle"
            color="gray"
            c="dimmed"
            style={{ '&:hover': { color: 'var(--mantine-color-cyan-4)' } }}
          >
            Repos
          </Button>

          {user ? (
            <UserMenu user={user} />
          ) : (
            <Button
              variant="filled"
              color="cyan"
              fw="bold"
              onClick={() => {
                /* Add login logic here */
              }}
            >
              Sign In
            </Button>
          )}
        </Group>
      </Group>
    </AppShell.Header>
  );
}
