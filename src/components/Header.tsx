import { useAuthData } from '@/contexts/auth';
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { Link } from '@tanstack/react-router';
import logoUrl from '../logo.svg';
import { UserMenu } from './UserMenuComponent';

export default function Header() {
  const { user } = useAuthData();

  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: 'none',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo and Brand */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
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
                variant="h6"
                noWrap
                sx={{
                  ml: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                DEVSHARE
              </Typography>
            </Link>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button component={Link} to="/" sx={{ color: 'gray', '&:hover': { color: '#22d3ee' } }}>
              Explore
            </Button>

            {user ? (
              <UserMenu user={user} />
            ) : (
              <Button
                variant="contained"
                sx={{
                  bg: '#06b6d4',
                  '&:hover': { bg: '#0891b2' },
                  textTransform: 'none',
                  fontWeight: 'bold',
                }}
                onClick={() => {
                  /* Add login logic here */
                }}
              >
                Sign In
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
