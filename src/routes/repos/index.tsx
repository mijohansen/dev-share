import { RepoCard } from '@/components/RepoCard';
import { getUserRepoListFn } from '@/data/demo.repo-data';
import { Container, Grid, Stack, Title } from '@mantine/core';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/repos/')({
  loader: async () => await getUserRepoListFn(),
  component: RouteComponent,
});

function RouteComponent() {
  const userRepos = Route.useLoaderData();
  return (
    <Container size="lg">
      <Stack gap="lg">
        <Title order={2}>Dine prosjekter</Title>
        <Grid gutter="lg">
          {userRepos.map((project) => (
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={project.id}>
              <RepoCard
                id={project.id}
                name={project.name}
                description={project.description}
                language={project.language}
                stars={project.stars}
                updatedAt={project.updatedAt}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}
