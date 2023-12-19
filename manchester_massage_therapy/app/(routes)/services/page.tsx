import AccentSection from '@/app/_components/shared/section/AccentSection';
import PrimarySection from '@/app/_components/shared/section/PrimarySection';
import HeaderAndComment from '@/app/_components/shared/widgets/HeaderAndComment';
import PriceTable from './pricing/priceTable';
import { chelseaMarket } from '@/app/fonts';
import BookingButton from '@/app/_components/shared/widgets/BookingButton';
import SecondarySection from '@/app/_components/shared/section/SecondarySection';
import { prisma } from '@/libs/prisma';
import TreatmentCard from '../(home)/services/TreatmentCard';

export default async function ServicesAndPricing() {
  const therapies = await prisma.therapy.findMany();

  return (
    <div className='flex flex-col justify-center'>
      <AccentSection className='mt-12'>
        <HeaderAndComment
          className='m-auto max-w-5xl'
          title='Services & Packages'
        >
          We offer a range of services and packages to suit your needs. From a
          one-off massage to a monthly subscription, we have something for
          everyone.
        </HeaderAndComment>
      </AccentSection>

      <PrimarySection className='mx-auto flex max-w-6xl flex-col'>
        <div className='mx-auto w-full items-center px-4 text-center md:px-0'>
          <h1
            className={`${chelseaMarket.className} m-auto w-min text-5xl text-secondary md:text-7xl`}
          >
            Pricing
          </h1>
          <p className='py-6'>
            Fair and affordable, and stays the same across all our therapies.
          </p>
        </div>
        <div className='flex flex-col px-6 md:flex-row md:px-0'>
          <div className='w-full px-6 md:w-1/2'>
            <PriceTable
              className='w-full'
              title='Solo'
              servicePrices={[
                { service: '60 mins', price: 60 },
                { service: '90 mins', price: 80 },
                { service: '60 x 3 mins', price: 160 },
              ]}
            />
            <PriceTable
              className='mt-6 w-full'
              title='Group'
              servicePrices={[
                { service: 'First 60 mins', price: 70 },
                { service: 'Every following 60 mins', price: 20 },
              ]}
            />
          </div>
          <div className='mt-6 w-full px-6 md:mt-0 md:w-1/2'>
            <PriceTable
              className='w-full'
              title='Add-ons'
              servicePrices={[{ service: 'Aromatherapy', price: 10 }]}
            />
          </div>
        </div>
        <BookingButton className='mx-auto my-6 px-20 py-4' />
      </PrimarySection>

      <SecondarySection className='xs:grid-cols-2 mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        {therapies.map((therapy) => (
          <TreatmentCard key={therapy.uid} {...therapy} />
        ))}
      </SecondarySection>
    </div>
  );
}
