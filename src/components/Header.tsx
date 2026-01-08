import { UserMenu } from '@/components/header/UserMenu';
import type { AuthenticatedUser } from '@/setup/better-auth';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from '@tanstack/react-router';
import logoUrl from '../logo.svg';

export function Header({ user }: { user: AuthenticatedUser | null }) {
  //
  return (
    <AppBar
      color={'transparent'}
      position="fixed"
      className="bg-slate-900/90 backdrop-blur-md border-b border-white/10 z-9999"
    >
      <Toolbar className="flex justify-between">
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
            <Typography
              component="span"
              variant="h6"
              noWrap
              className="ml-2 hidden md:flex font-mono font-bold tracking-widest text-white no-underline"
            >
              DEVSHARE
            </Typography>
          </Link>
        </Box>

        {/* User/Navigation Section */}

        <Box className="flex items-center gap-1">
          <Button component={Link} to="/" className="text-gray-400 hover:text-cyan-400">
            Create
          </Button>

          {user ? (
            <UserMenu user={user} />
          ) : (
            <Button
              variant="contained"
              className="bg-cyan-500 hover:bg-cyan-600 normal-case font-bold transition-colors"
              onClick={() => {
                /* Add login logic here */
              }}
            >
              Sign In
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
