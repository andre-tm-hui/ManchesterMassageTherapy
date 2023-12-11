export default function FadeToFooter() {
  return (
    <div
      style={{
        background: `linear-gradient(
            0deg,
            var(--bg-menu-color) 0%,
            var(--bg-menu-color) 5rem,
            rgba(0, 0, 0, 0) 20rem,
            rgba(0, 0, 0, 0) 100%
          )`,
      }}
      className='mt-[-16rem] h-[25rem] w-full'
    />
  );
}
