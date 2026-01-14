import { PrismaClient } from '@prisma/client/extension';

export const prisma = new PrismaClient({
  datasource: {
    url: process.env.DATABASE_URL,
  },
});
