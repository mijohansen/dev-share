import { Box, Typography } from '@mui/material';
import { createFileRoute, useLoaderData } from '@tanstack/react-router';

export const Route = createFileRoute('/repo/$repoId/view')({
  component: RouteComponent,
});

function RouteComponent() {
  const repoData = useLoaderData({ from: '/repo/$repoId' });
  return (
    <Box>
      <Typography variant={'h3'}>Repo View</Typography>
      <pre>{JSON.stringify(repoData, null, 2)}</pre>
    </Box>
  );
}
