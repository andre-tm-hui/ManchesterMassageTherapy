import ConditionalWrapper from '@/app/_components/shared/ConditionalWrapper';
import IInstagramPost from '@/app/_types/instagramPost';
import Carousel from '@/app/_components/shared/Carousel';
import Image from 'next/image';
import InstagramLogo from '@/public/assets/icons/instagram.svg';

interface InstagramPostCardProps {
  post: IInstagramPost;
}

export default function InstagramPostCard({ post }: InstagramPostCardProps) {
  return (
    <div
      className='shadow-card relative mb-4 bg-black text-gray-200 shadow-md transition-all duration-100 hover:scale-[101%] hover:text-gray-200 hover:saturate-100 md:text-gray-500 md:saturate-50'
      style={{ aspectRatio: post.prefAspectRatio }}
    >
      {/** TODO: make sure this works with multiple images - implement navigation buttons/dots */}
      <ConditionalWrapper
        condition={post.imageUrls.length > 1}
        wrapper={(children) => <Carousel>{children}</Carousel>}
      >
        {post.imageUrls.map((url, idx) => {
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
          <p className='line-clamp-4 text-ellipsis text-sm'>
            {post.description}
          </p>
        </div>
        <p className='mt-auto h-4 basis-1/2 text-xs'>{post.uploadDate}</p>
        <a
          className='ml-auto h-6 text-logo'
          href={post.postUrl}
          target={'_blank'}
        >
          <InstagramLogo width={'1.5rem'} height={'1.5rem'} />
        </a>
      </div>
    </div>
  );
}
