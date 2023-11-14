import Splash from './Splash';
import Reviews from './Reviews';
import HowItWorks from './HowItWorks';
import TeamPreview from './TeamPreview';
import InstagramFeed from './InstagramFeed';
import Services from './Services';

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
