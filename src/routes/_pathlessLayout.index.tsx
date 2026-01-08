import { NotLoggedIn } from '@/components/NotLoggedIn';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_pathlessLayout/')({ component: NotLoggedIn });
