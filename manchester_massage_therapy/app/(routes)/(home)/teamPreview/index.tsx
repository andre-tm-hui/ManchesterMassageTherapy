import { prisma } from '@/libs/prisma';
import Solo from './solo';
import Team from './team';
import { env } from 'process';

export default async function TeamPreview() {
  const practitioners = await prisma.practitioner.findMany({
    take: 5,
  });

  return env.IS_SOLO === "true" ? <Team practitioners={practitioners} /> : <Solo />;
}
