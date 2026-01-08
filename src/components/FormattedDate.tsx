import { AccessTime } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

export function FormattedDate({ date }: { date: string }) {
  return (
    <Box className="flex items-center gap-1 text-slate-400 ml-auto">
      <AccessTime fontSize={'small'} />
      <Typography variant="caption">{date}</Typography>
    </Box>
  );
}
