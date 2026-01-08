import { RepoMenu } from '@/components/RepoMenu';
import { getUserRepoFn } from '@/data/demo.repo-data';
import { Box, Container, Group } from '@mantine/core';
import { createFileRoute, Outlet } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/repo/$repoId')({
  loader: async ({ params }) => {
    const repo = await getUserRepoFn({ data: params.repoId });

    // If repo not found, you could throw a 404 here
    if (!repo) {
      throw new Error('Repository not found');
    }

    return { repo };
  },
  component: RepoLayoutComponent,
});

function RepoLayoutComponent() {
  const drawerWidth = 240;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <RepoMenu drawerWidth={drawerWidth} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Container size="lg" className="mt-48">
        <Group align="flex-start" wrap="nowrap">
          <Box className={`w-[${drawerWidth}px] hidden md:block shrink-0`} />
          <Box className="flex-grow">
            <Outlet />
          </Box>
        </Group>
      </Container>
    </>
  );
}
