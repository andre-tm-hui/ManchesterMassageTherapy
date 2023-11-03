import Carousel from '@/app/_components/shared/Carousel';
import ReviewCard from '@/app/_components/shared/review/ReviewCard';
import { defaultReviews } from '@/app/_types/review/Reviews';
import { chelseaMarket } from '@/app/fonts';

export default function Reviews() {
  const googleReviews = defaultReviews.reviews.map((review, _) => {
    return (
      <ReviewCard
        classNames='md:flex-[0_0_60%] flex-[0_0_90%]'
        key={review.reviewId}
        review={review}
      ></ReviewCard>
    );
  });

  return (
    <div className='flex w-full justify-center bg-primary'>
      <div className='flex max-w-7xl flex-col justify-center py-16 md:flex-row md:space-x-10 md:py-8'>
        <div className='my-auto grid space-y-5 px-5 text-center lg:w-auto'>
          <h1 className={`text-5xl md:text-7xl ${chelseaMarket.className}`}>
            Why Us?
          </h1>
          <p>See what our customers have to say!</p>
        </div>
        <div className='relative h-[50vh] max-h-80 w-screen max-w-3xl md:h-[60vh] md:w-auto'>
          <Carousel
            classNames='hidden md:block overflow-hidden h-full w-full'
            autoplay={true}
            axis='y'
            loop={true}
          >
            {googleReviews}
          </Carousel>
          <Carousel
            classNames='md:hidden h-full min-h-64'
            autoplay={true}
            axis='x'
            loop={true}
          >
            {googleReviews}
          </Carousel>
          <div className='fade-y-mirror overlay-filter hidden h-full w-full md:block' />
        </div>
      </div>
    </div>
  );
}
