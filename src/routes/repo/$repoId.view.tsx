import { Badge, Box, Divider, Group, Stack, Text, Title } from '@mantine/core';
import { IconBook, IconStar } from '@tabler/icons-react';
import { createFileRoute, useLoaderData } from '@tanstack/react-router';

export const Route = createFileRoute('/repo/$repoId/view')({
  component: RouteComponent,
});

function RouteComponent() {
  const { repo } = useLoaderData({ from: '/repo/$repoId' });

  if (!repo) {
    return (
      <Box p="xl">
        <Text>Repository not found</Text>
      </Box>
    );
  }

  return (
    <Stack gap="xl" py="xl">
      <Group justify="space-between" align="flex-start">
        <Stack gap="xs">
          <Group gap="sm">
            <IconBook size={28} color="var(--mantine-color-cyan-4)" />
            <Title order={1} size="h2">
              {repo.name}
            </Title>
          </Group>
          <Text c="dimmed" size="lg" maw={600}>
            {repo.description || 'No description provided.'}
          </Text>
        </Stack>

        <Group gap="xs">
          <Badge color="cyan" variant="light" size="lg" radius="sm">
            {repo.language || 'Unknown'}
          </Badge>
          <Badge
            variant="outline"
            color="gray"
            size="lg"
            radius="sm"
            leftSection={<IconStar size={14} style={{ marginTop: -2 }} />}
          >
            {repo.stars}
          </Badge>
        </Group>
      </Group>

      <Divider />

      <Box>
        <Text size="sm" c="dimmed">
          Last updated: {repo.updatedAt}
        </Text>
      </Box>

      {/* Placeholder for more repo content */}
      <Box
        h={200}
        style={{
          border: '1px dashed var(--mantine-color-dark-4)',
          borderRadius: 'var(--mantine-radius-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text c="dimmed">Repository content will be displayed here</Text>
      </Box>
    </Stack>
  );
}
