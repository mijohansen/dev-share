import { FormattedDate } from '@/components/FormattedDate';
import { Box, Card, Group, Text } from '@mantine/core';
import { IconBook, IconStar } from '@tabler/icons-react';
import { useNavigate } from '@tanstack/react-router';
import styles from './styles.module.css';

interface ProjectCardProps {
  id: string;
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  updatedAt: string;
}

export function RepoCard({ id, name, description, language, stars, updatedAt }: ProjectCardProps) {
  const navigate = useNavigate();
  const navigateToRepo = () => navigate({ to: '/repo/$repoId/view', params: { repoId: id } });

  return (
    <Card
      withBorder
      padding="lg"
      radius="md"
      onClick={navigateToRepo}
      bg="var(--mantine-color-dark-6)"
      className={styles.RepoCard}
      style={{
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'transform 200ms ease, border-color 200ms ease',
      }}
    >
      <Group justify="flex-start" mb="md">
        <IconBook size={24} color="var(--mantine-color-cyan-4)" />
        <Text size="lg" fw={700} c="white">
          {name}
        </Text>
      </Group>

      <Text size="sm" c="dimmed" mb="xl" style={{ lineClamp: 2, overflow: 'hidden', minHeight: '3em' }}>
        {description || 'No description provided.'}
      </Text>

      <Card.Section inheritPadding py="md" mt="auto">
        <Group justify="space-between" align="center">
          <Group gap="md">
            {language && (
              <Group gap="xs">
                <Box
                  w={10}
                  h={10}
                  style={{
                    borderRadius: '50%',
                    backgroundColor: language === 'TypeScript' ? '#3178c6' : 'var(--mantine-color-cyan-4)',
                  }}
                />
                <Text size="xs" c="white">
                  {language}
                </Text>
              </Group>
            )}

            <Group gap={4} c="var(--mantine-color-dark-2)">
              <IconStar size={14} />
              <Text size="xs">{stars}</Text>
            </Group>
          </Group>
          <FormattedDate date={updatedAt} />
        </Group>
      </Card.Section>
    </Card>
  );
}
