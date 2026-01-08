import { FormattedDate } from '@/components/FormattedDate';
import { Book, Star } from '@mui/icons-material';
import { Box, Card, CardActionArea, CardContent, Stack, Typography } from '@mui/material';
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
      variant="outlined"
      className="h-full transition-[transform,border-color] duration-200 hover:-translate-y-1 hover:border-cyan-400"
    >
      <CardActionArea className="h-full p-2" onClick={() => navigateToRepo(id)}>
        <CardContent>
          <Box className="flex items-center mb-6" gap={2}>
            <Book fontSize={'medium'} className="text-cyan-400" />
            <Typography variant="h6" component="div" className="text-white font-bold">
              {name}
            </Typography>
          </Box>

          <Typography variant="body2" className="text-slate-400 mb-12 line-clamp-2 overflow-hidden min-h-[3em]">
            {description || 'No description provided.'}
          </Typography>

          <Stack direction="row" spacing={2} alignItems="center">
            {language && (
              <Box className="flex items-center gap-2">
                <Box
                  className={`w-2.5 h-2.5 rounded-full ${language === 'TypeScript' ? 'bg-[#3178c6]' : 'bg-cyan-400'}`}
                />
                <Typography variant="caption" className="text-white">
                  {language}
                </Typography>
              </Box>
            )}

            <Box className="flex items-center gap-2 text-[#94a3b8]">
              <Star fontSize={'small'} />
              <Typography variant="caption">{stars}</Typography>
            </Box>
            <FormattedDate date={updatedAt} />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
