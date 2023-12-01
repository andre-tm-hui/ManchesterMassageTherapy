import SpeechMarkSVG from 'public/speechmark.svg';

export default function SpeechMark(rotate: boolean) {
  return (
    <div
      className={`flex h-full min-w-[4rem] justify-center py-4 text-secondary opacity-75 ${
        rotate && 'rotate-180'
      }`}
    >
      <SpeechMarkSVG width='1.5rem' height='1.5rem' />
    </div>
  );
}
