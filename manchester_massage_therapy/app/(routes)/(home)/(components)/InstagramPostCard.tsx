import ConditionalWrapper from '@/app/_components/shared/ConditionalWrapper';
import Carousel from '@/app/_components/shared/Carousel';
import Image from 'next/image';
import InstagramLogo from '@/public/assets/icons/instagram.svg';
import { IGPost } from '@prisma/client';

export default function InstagramPostCard({
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
      style={{ aspectRatio: prefAspectRatio }}
    >
      {/** TODO: make sure this works with multiple images - implement navigation buttons/dots */}
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
        {images}
      </ConditionalWrapper>
      <div className='instagram-fade overlay-filter relative flex h-full w-full flex-row flex-wrap content-end justify-end p-5'>
        <div className='mt-auto h-24 w-full'>
          <p className='line-clamp-4 text-ellipsis text-sm'>{caption}</p>
        </div>
        <p className='mt-auto h-4 basis-1/2 text-xs'>
          {uploadDate.toDateString()}
        </p>
        <a
          className='pointer-events-auto z-10 ml-auto h-6 text-logo'
          href={postUrl}
          target={'_blank'}
        >
          <InstagramLogo width={'1.5rem'} height={'1.5rem'} />
        </a>
      </div>
    </div>
  );
}
