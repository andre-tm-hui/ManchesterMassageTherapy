export default function FadeToFooter() {
  return (
    <div
      style={{
        background: `linear-gradient(
            0deg,
            var(--bg-menu-color) 0%,
            var(--bg-menu-color) 5%,
            rgba(0, 0, 0, 0) 95%,
            rgba(0, 0, 0, 0) 100%
          )`,
      }}
      className='pointer-events-none mt-[-16rem] h-[25rem] w-full'
    />
  );
}
