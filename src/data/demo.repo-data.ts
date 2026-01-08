import { formatDate } from '@/utils/date-utils';
import { createServerFn } from '@tanstack/react-start';

const exampleRepoData = [
  {
    id: '1',
    name: 'tanstack-router-helper',
    description:
      'A powerful utility library for managing complex route transitions and breadcrumbs in TanStack Start applications.',
    language: 'TypeScript',
    stars: 1240,
    updatedAt: formatDate(new Date('2024-03-15T10:00:00Z')),
  },
  {
    id: '2',
    name: 'dev-share-cli',
    description:
      'Command line interface for fast file sharing between developer workstations. Support for SSH and zero-config transfers.',
    language: 'Rust',
    stars: 85,
    updatedAt: formatDate(new Date('2024-03-18T14:30:00Z')),
  },
  {
    id: '3',
    name: 'awesome-material-ui-themes',
    description:
      'A curated list of high-quality dark mode themes specifically designed for dashboard applications and developer tools.',
    language: 'CSS',
    stars: 432,
    updatedAt: formatDate(new Date('2024-01-05T08:15:00Z')),
  },
];

export const getUserRepoListFn = createServerFn({
  method: 'GET',
}).handler(async () => exampleRepoData);

export const getUserRepoFn = createServerFn({
  method: 'GET',
})
  .inputValidator((repoId: string) => repoId) // Validate the input
  .handler(async ({ data: repoId }) => {
    return exampleRepoData.find((repo) => repo.id === repoId);
  });
