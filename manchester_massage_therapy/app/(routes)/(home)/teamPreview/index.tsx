import { prisma } from '@/libs/prisma';
import Solo from './solo';
import Team from './team';

export default async function TeamPreview({
  hiring = false,
}: {
  hiring?: boolean;
}) {
  const practitioners = await prisma.practitioner.findMany({
    take: 5,
  });

  return hiring ? <Team practitioners={practitioners} /> : <Solo />;
}
