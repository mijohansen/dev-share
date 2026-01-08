import { Box, Title } from '@mantine/core';
import { createFileRoute, useLoaderData } from '@tanstack/react-router';

export const Route = createFileRoute('/repo/$repoId/view')({
  component: RouteComponent,
});

function RouteComponent() {
  const repoData = useLoaderData({ from: '/repo/$repoId' });
  return (
    <Box>
      <Title order={3}>Repo View</Title>
      <pre>{JSON.stringify(repoData, null, 2)}</pre>
    </Box>
  );
}
