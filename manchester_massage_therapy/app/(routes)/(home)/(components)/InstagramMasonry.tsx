import InstagramPostCard from './InstagramPostCard';
import {
  altInstagramPost,
  defaultInstagramPost,
} from '@/app/_types/instagramPost';
import Masonry from 'react-masonry-css';

export default function InstagramMasonry() {
  const breakpointColsObj = {
    default: 4,
    1024: 3,
    768: 2,
    640: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColsObj}
      className='masonry py-16 md:py-12'
      columnClassName='masonry-column'
    >
      <InstagramPostCard post={defaultInstagramPost}></InstagramPostCard>
      <InstagramPostCard post={defaultInstagramPost}></InstagramPostCard>
      <InstagramPostCard post={defaultInstagramPost}></InstagramPostCard>
      <InstagramPostCard post={defaultInstagramPost}></InstagramPostCard>
      <InstagramPostCard post={altInstagramPost}></InstagramPostCard>
      <InstagramPostCard post={altInstagramPost}></InstagramPostCard>
      <InstagramPostCard post={altInstagramPost}></InstagramPostCard>
      <InstagramPostCard post={altInstagramPost}></InstagramPostCard>
    </Masonry>
  );
}
