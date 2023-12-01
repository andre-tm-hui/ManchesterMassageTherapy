import BGImageDiv from '@/app/_components/shared/BGImageDiv';
import BookingButton from '@/app/_components/shared/widgets/BookingButton';
import { chelseaMarket } from '@/app/fonts';

export default function Splash() {
  return (
    <BGImageDiv
      src='/assets/home/splash.jpg'
      className='flex h-screen w-full px-5 lg:px-0'
    >
      <div className='m-auto grid space-y-5 text-center text-white'>
        <h1 className={`text-5xl md:text-7xl ${chelseaMarket.className}`}>
          Manchester Massage Therapy
        </h1>
        <h4 className='text-xl md:text-2xl'>
          CALL: +44 1234 567890
          <br />
          Lorem ipsum something something...
        </h4>
        <BookingButton className='z-10 mx-auto my-5 w-40 px-6 py-3' />
      </div>
    </BGImageDiv>
  );
}
