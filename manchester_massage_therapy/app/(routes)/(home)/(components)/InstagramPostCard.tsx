import ConditionalWrapper from '@/app/_components/shared/ConditionalWrapper';
import Carousel from '@/app/_components/shared/carousel';
import Image from 'next/image';
import InstagramLogo from '@/public/assets/icons/instagram.svg';
import { IGPost } from '@prisma/client';
import Hyperlink from '@/app/_components/shared/Hyperlink';

export default function InstagramPostCard({
  uid,
  prefAspectRatio,
  albumUrls,
  caption,
  uploadDate,
  postUrl,
}: IGPost) {
  const condition = albumUrls.length > 1;

  const images = albumUrls.map((url, idx) => (
    <div
      key={idx}
      className={`${condition && 'relative'} flex h-auto flex-[0_0_100%]`}
    >
      <Image src={url} alt={url} fill={true} className='object-contain' />
    </div>
  ));

  return (
    <div
      className='relative mb-4 cursor-default bg-black text-gray-200 shadow-md shadow-card transition-all duration-100 selection:bg-transparent hover:scale-[101%] hover:text-gray-200 hover:saturate-100 md:text-gray-500 md:saturate-50'
      style={{
        aspectRatio: uid > 0 ? prefAspectRatio : 0.7,
      }}
    >
      <ConditionalWrapper
        condition={condition}
        wrapper={(children) => (
          <Carousel
            className='h-full w-full overflow-hidden'
            showButtons={true}
            showDots={true}
            axis='x'
          >
            {children}
          </Carousel>
        )}
      >
        {uid > 0 ? images : <div className='h-full w-full bg-zinc-900' />}
      </ConditionalWrapper>
      <div className='instagram-fade overlay-filter relative flex h-full w-full flex-row flex-wrap content-end justify-end p-5'>
        <div className='mt-auto h-24 w-full'>
          <p className='line-clamp-4 text-ellipsis text-sm'>
            {uid > 0 ? caption : 'Coming soon...'}
          </p>
        </div>
        <p className='mt-auto h-4 basis-1/2 text-xs'>
          {uid > 0 && uploadDate.toDateString()}
        </p>
        <Hyperlink
          className='pointer-events-auto z-10 ml-auto mr-0 h-6 text-logo'
          href={postUrl}
        >
          <InstagramLogo width={'1.5rem'} height={'1.5rem'} />
        </Hyperlink>
      </div>
    </div>
  );
}
