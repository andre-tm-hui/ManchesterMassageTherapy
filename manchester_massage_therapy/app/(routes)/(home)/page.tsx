import Splash from './splash';
import Reviews from './reviews';
import HowItWorks from './howItWorks';
import TeamPreview from './teamPreview';
import InstagramFeed from './instagramFeed';
import Services from './services';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Splash />
      <Reviews />
      <HowItWorks />
      <TeamPreview />
      <Services />
      <InstagramFeed />
    </main>
  );
}
