import { Box, Button, Container, Stack, Text, Title } from '@mantine/core';
import { IconArrowLeft, IconQuestionMark } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';

export function NotFound() {
  return (
    <Container size="sm">
      <Stack align="center" justify="center" style={{ minHeight: '60vh' }} p="xl">
        <Box
          bg="var(--mantine-color-dark-6)"
          p="xl"
          style={{
            borderRadius: 'var(--mantine-radius-xl)',
            border: '1px solid var(--mantine-color-dark-4)',
            backdropFilter: 'blur(8px)',
            boxShadow: 'var(--mantine-shadow-xl)',
            textAlign: 'center',
            width: '100%',
          }}
        >
          <IconQuestionMark
            size={80}
            color="var(--mantine-color-cyan-4)"
            style={{ marginBottom: 'var(--mantine-spacing-xl)', opacity: 0.8 }}
          />

          <Title order={1} size={48} c="white" mb="xs" fw={900}>
            404
          </Title>
          <Title order={2} size="xl" c="gray.2" mb="sm" fw={600}>
            Page Not Found
          </Title>
          <Text c="dimmed" maw={320} mx="auto" mb="xl">
            The page you're looking for doesn't exist or has been moved.
          </Text>

          <Button
            component={Link}
            to="/"
            leftSection={<IconArrowLeft size={16} />}
            color="cyan"
            size="md"
            radius="md"
            style={{
              boxShadow: '0 10px 15px -3px rgba(34, 184, 207, 0.3)',
            }}
          >
            Back to Home
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
