import { Box, Text } from '@mantine/core';
import { IconClock } from '@tabler/icons-react';

export function FormattedDate({ date }: { date: string }) {
  return (
    <Box display="flex" style={{ alignItems: 'center', gap: '4px' }} c="dimmed" ml="auto">
      <IconClock size={14} />
      <Text size="xs">{date}</Text>
    </Box>
  );
}
