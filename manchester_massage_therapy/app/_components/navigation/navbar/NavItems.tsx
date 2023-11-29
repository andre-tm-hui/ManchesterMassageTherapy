import { usePathname } from 'next/navigation';
import NoScrollLink from '../../shared/NoScrollLink';

const menuOptions = [
  { label: 'Home', href: '/' },
  { label: 'Services & Packages', href: '/services' },
  { label: 'Meet the Team', href: '/team' },
  { label: 'Get in Touch', href: '/contact' },
];

export default function NavItems({ onClick }: { onClick?: () => void }) {
  const path = usePathname();
  return (
    <>
      {menuOptions.map(({ label, href }, idx) => {
        return (
          <li key={idx}>
            <NoScrollLink
              className={`transition-all ease-linear selection:bg-transparent hover:brightness-125 ${
                href === path
                  ? 'pointer-events-none brightness-150'
                  : 'brightness-75'
              }`}
              href={href}
              onClick={onClick}
            >
              {label}
            </NoScrollLink>
          </li>
        );
      })}
    </>
  );
}
