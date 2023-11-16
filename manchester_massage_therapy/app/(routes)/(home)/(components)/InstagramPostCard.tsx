import ConditionalWrapper from '@/app/_components/shared/ConditionalWrapper';
import IInstagramPost from '@/app/_types/instagramPost';
import Carousel from '@/app/_components/shared/Carousel';
import Image from 'next/image';
import InstagramLogo from '@/public/assets/icons/instagram.svg';

export default function InstagramPostCard({
  prefAspectRatio,
  imageUrls,
  description,
  uploadDate,
  postUrl,
}: IInstagramPost) {
  return (
    <div
      className='relative mb-4 cursor-default bg-black text-gray-200 shadow-md shadow-card transition-all duration-100 selection:bg-transparent hover:scale-[101%] hover:text-gray-200 hover:saturate-100 md:text-gray-500 md:saturate-50'
      style={{ aspectRatio: prefAspectRatio }}
    >
      {/** TODO: make sure this works with multiple images - implement navigation buttons/dots */}
      <ConditionalWrapper
        condition={imageUrls.length > 1}
        wrapper={(children) => <Carousel>{children}</Carousel>}
      >
        {imageUrls.map((url, idx) => {
          return (
            <Image
              key={idx}
              src={url}
              alt=''
              fill={true}
              className='h-auto object-contain'
            />
          );
        })}
      </ConditionalWrapper>
      <div className='instagram-fade relative flex h-full w-full flex-row flex-wrap content-end justify-end p-5'>
        <div className='mt-auto h-24 w-full'>
          <p className='line-clamp-4 text-ellipsis text-sm'>{description}</p>
        </div>
        <p className='mt-auto h-4 basis-1/2 text-xs'>{uploadDate}</p>
        <a className='ml-auto h-6 text-logo' href={postUrl} target={'_blank'}>
          <InstagramLogo width={'1.5rem'} height={'1.5rem'} />
        </a>
      </div>
    </div>
  );
}
