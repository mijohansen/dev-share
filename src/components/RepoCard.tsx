import { FormattedDate } from '@/components/FormattedDate';
import { Box, Card, Group, Text, UnstyledButton } from '@mantine/core';
import { IconBook, IconStar } from '@tabler/icons-react';
import { useNavigate } from '@tanstack/react-router';

interface ProjectCardProps {
  id: string;
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  updatedAt: string;
}

export function RepoCard({ id, name, description, language, stars, updatedAt }: ProjectCardProps) {
  // Format the date to a readable "2 days ago" or similar would be better,
  // but using a simple local date for now.
  const navigate = useNavigate();
  const navigateToRepo = (repoId: string) => navigate({ to: '/repo/$repoId/view', params: { repoId } });
  return (
    <Card
      withBorder
      padding="lg"
      radius="md"
      className="h-full transition-[transform,border-color] duration-200 hover:-translate-y-1 hover:border-cyan-400 bg-slate-800"
    >
      <UnstyledButton className="h-full w-full" onClick={() => navigateToRepo(id)}>
        <Box className="flex items-center mb-6" gap="md">
          <IconBook size={24} className="text-cyan-400" />
          <Text size="lg" fw={700} className="text-white">
            {name}
          </Text>
        </Box>

        <Text size="sm" className="text-slate-400 mb-12 line-clamp-2 overflow-hidden min-h-[3em]">
          {description || 'No description provided.'}
        </Text>

        <Group justify="space-between" align="center" mt="auto">
          <Group gap="md">
            {language && (
              <Group gap="xs">
                <Box
                  className={`w-2.5 h-2.5 rounded-full ${language === 'TypeScript' ? 'bg-[#3178c6]' : 'bg-cyan-400'}`}
                />
                <Text size="xs" className="text-white">
                  {language}
                </Text>
              </Group>
            )}

            <Group gap={4} className="text-[#94a3b8]">
              <IconStar size={14} />
              <Text size="xs">{stars}</Text>
            </Group>
          </Group>
          <FormattedDate date={updatedAt} />
        </Group>
      </UnstyledButton>
    </Card>
  );
}
