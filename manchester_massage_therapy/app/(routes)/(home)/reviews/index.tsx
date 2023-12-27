import Carousel from '@/app/_components/shared/carousel';
import Overlay from '@/app/_components/shared/widgets/Overlay';
import PlaceholderReviewCard from '@/app/(routes)/(home)/reviews/review/PlaceholderReviewCard';
import ReviewCard from '@/app/(routes)/(home)/reviews/review/ReviewCard';
import PrimarySection from '@/app/_components/shared/section/PrimarySection';
import { chelseaMarket } from '@/app/fonts';
import { prisma } from '@/libs/prisma';
import NoScrollLink from '@/app/_components/shared/widgets/NoScrollLink';
import StyledLink from '@/app/_components/shared/widgets/StyledLink';

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
        <StyledLink href='https://www.google.com/maps/place/Manchester+Massage+Therapy/@53.4722454,-2.2234628,12z/data=!4m6!3m5!1s0x44f81a7c982ec701:0x9dbcbe8a3301257e!8m2!3d53.4722454!4d-2.2234628!16s%2Fg%2F11vjxfphhx?hl=en-GB&entry=ttu'>
          See more
        </StyledLink>
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
