import { chelseaMarket } from '@/app/fonts';

export default function InstagramFeed() {
  return (
    <div className='relative h-screen w-full bg-secondary'>
      <div className='mx-auto flex h-full w-full justify-center py-16 md:py-12 lg:w-4/5'>
        <h1 className={`${chelseaMarket.className} text-7xl`}>Gallery</h1>
      </div>
      <div className='fade-to-footer overlay-filter h-full w-full' />
    </div>
  );
}
