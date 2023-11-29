import Carousel from '@/app/_components/shared/carousel';
import Overlay from '@/app/_components/shared/Overlay';
import PlaceholderReviewCard from '@/app/_components/shared/review/PlaceholderReviewCard';
import ReviewCard from '@/app/_components/shared/review/ReviewCard';
import PrimarySection from '@/app/_components/shared/section/PrimarySection';
import { chelseaMarket } from '@/app/fonts';
import { prisma } from '@/libs/prisma';

export default async function Reviews() {
  let googleReviews = await prisma.googleReview
    .findMany({ take: 3 })
    .then((reviews) =>
      reviews.map((review) => <ReviewCard key={review.uid} {...review} />)
    );

  let i = -1;
  while (googleReviews.length < 5) {
    googleReviews.push(<PlaceholderReviewCard key={i--} />);
  }

  return (
    <PrimarySection className='flex flex-col justify-center md:flex-row md:space-x-10'>
      <div className='my-auto grid space-y-5 px-5 text-center md:max-w-md'>
        <h1
          className={`text-5xl text-secondary md:text-6xl ${chelseaMarket.className}`}
        >
          Why Us?
        </h1>
        <p>See what our customers have to say!</p>
      </div>
      <div className='relative h-[50vh] w-full md:my-[-6rem] md:h-[32rem] md:max-w-2xl'>
        <Carousel
          className='hidden h-full w-full overflow-hidden md:block'
          autoplay={true}
          axis='y'
          loop={true}
        >
          {googleReviews}
        </Carousel>
        <Carousel
          className='min-h-64 h-full md:hidden'
          autoplay={true}
          axis='x'
          loop={true}
        >
          {googleReviews}
        </Carousel>
        <Overlay
          className='hidden md:block'
          style={{
            background: `linear-gradient(
              0deg,
              var(--bg-primary-color) 5%,
              rgba(0, 0, 0, 0) 25%,
              rgba(0, 0, 0, 0) 75%,
              var(--bg-primary-color) 95%
            )`,
          }}
        />
      </div>
    </PrimarySection>
  );
}
