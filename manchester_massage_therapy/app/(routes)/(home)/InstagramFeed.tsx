import { chelseaMarket } from '@/app/fonts';
import InstagramPostCard from './(components)/InstagramPostCard';
import {
  altInstagramPost,
  defaultInstagramPost,
} from '@/app/_types/instagramPost';
import PillButton from '@/app/_components/shared/PillButton';

export default function InstagramFeed() {
  return (
    <div className='relative col-span-1 h-auto w-full overflow-hidden bg-secondary'>
      <div className='mx-auto flex h-full w-full flex-col items-center px-5 py-16 md:py-12 lg:w-4/5'>
        <h1 className={`${chelseaMarket.className} text-7xl`}>Gallery</h1>
        {/* TODO: fix columns not starting in new column, figure out how to order l-to-r */}
        <div className='columns-1 py-16 sm:columns-2 md:columns-3 md:py-12 lg:columns-4 '>
          <InstagramPostCard post={defaultInstagramPost}></InstagramPostCard>
          <InstagramPostCard post={defaultInstagramPost}></InstagramPostCard>
          <InstagramPostCard post={altInstagramPost}></InstagramPostCard>
          <InstagramPostCard post={defaultInstagramPost}></InstagramPostCard>
          <InstagramPostCard post={defaultInstagramPost}></InstagramPostCard>
          <InstagramPostCard post={altInstagramPost}></InstagramPostCard>
          <InstagramPostCard post={altInstagramPost}></InstagramPostCard>
          <InstagramPostCard post={altInstagramPost}></InstagramPostCard>
        </div>
      </div>
      <div className='fade-to-footer overlay-filter h-full w-full' />
      <PillButton
        classNames='py-4 z-10 w-72 text-center m-auto overlay-button'
        href='https://www.instagram.com/manchester_massage_therapy/'
      >
        Check out more photos!
      </PillButton>
    </div>
  );
}
