import { AppLayout } from '@/components/AppLayout';
import { RepoCard } from '@/components/RepoCard';
import { getUserRepoListFn } from '@/data/demo.repo-data';
import { Grid, Stack, Title } from '@mantine/core';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/repos/')({
  loader: async () => await getUserRepoListFn(),
  component: RouteComponent,
});

function RouteComponent() {
  const userRepos = Route.useLoaderData();
  return (
    <AppLayout>
      <Stack gap={'lg'}>
        <Title order={2}>Dine prosjekter</Title>
        <Grid gutter="lg">
          {userRepos.map((repoData) => (
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={repoData.id}>
              <RepoCard repoData={repoData} />
            </Grid.Col>
          ))}
        </Grid>
      </Stack>
    </AppLayout>
  );
}
