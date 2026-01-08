import { AppLayout } from '@/components/AppLayout';
import { RepoMenu } from '@/components/RepoMenu';
import { getUserRepoFn } from '@/data/demo.repo-data';
import { createFileRoute } from '@tanstack/react-router';

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
  return <AppLayout menuComponent={<RepoMenu />} />;
}
