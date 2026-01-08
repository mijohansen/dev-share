import { Box, Text } from '@mantine/core';
import { IconClock } from '@tabler/icons-react';

export function FormattedDate({ date }: { date: string }) {
  return (
    <Box className="flex items-center gap-1 text-slate-400 ml-auto">
      <IconClock size={14} />
      <Text size="xs">{date}</Text>
    </Box>
  );
}
