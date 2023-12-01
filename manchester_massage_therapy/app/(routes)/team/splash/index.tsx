import BGImageDiv from '@/app/_components/shared/BGImageDiv';
import HeaderAndComment from '@/app/_components/shared/widgets/HeaderAndComment';

export default function Splash() {
  return (
    <BGImageDiv
      src='/assets/team/splash.jpg'
      className='flex h-auto w-full px-5 py-[25%] sm:h-1/2 sm:py-0 lg:px-0'
    >
      <HeaderAndComment
        dir='rtl'
        className='m-auto max-w-5xl'
        title='Our Mission'
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel
        congue est. Quisque malesuada tincidunt congue. Pellentesque ut
        sollicitudin justo. Morbi consequat metus sed sapien malesuada, ac
        volutpat nunc posuere.
      </HeaderAndComment>
    </BGImageDiv>
  );
}
