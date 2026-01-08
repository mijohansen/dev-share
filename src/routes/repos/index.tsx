import { RepoCard } from '@/components/RepoCard';
import { getUserRepoListFn } from '@/data/demo.repo-data';
import { Container, Stack, Typography } from '@mui/material';
import { Grid } from '@mui/system';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/repos/')({
  loader: async () => await getUserRepoListFn(),
  component: RouteComponent,
});

function RouteComponent() {
  const userRepos = Route.useLoaderData();
  return (
    <Container maxWidth="lg">
      <Stack spacing={2}>
        <Typography variant={'h2'}>Dine prosjekter</Typography>
        <Grid container spacing={3}>
          {userRepos.map((project) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
              <RepoCard
                id={project.id}
                name={project.name}
                description={project.description}
                language={project.language}
                stars={project.stars}
                updatedAt={project.updatedAt}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}
