import { prisma } from '@/libs/prisma';

export async function treatmentIdsToNames(expertIn: number[]) {
  return await Promise.all(
    expertIn.map(async (uid) => {
      return await prisma.therapy
        .findFirst({ where: { uid: uid } })
        .then((res) => {
          return res?.name;
        });
    })
  ).then((res) => res.join(', '));
}

export function getYears(joinDate: Date) {
  return (
    (Date.now() - joinDate.getTime()) /
    (1000 * 60 * 60 * 24 * 365.25)
  ).toFixed(0);
}

