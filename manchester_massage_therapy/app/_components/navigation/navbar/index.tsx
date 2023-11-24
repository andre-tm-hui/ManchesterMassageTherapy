'use client';

import Link from 'next/link';
import Logo from '../../shared/Logo';
import BurgerMenu from '../../../../public/burgerMenu.svg';
import style from './navbar.module.css';
import { useEffect, useState } from 'react';
import BookingButton from '../../shared/BookingButton';
import { usePathname } from 'next/navigation';
import { motion, useCycle } from 'framer-motion';
import NoScrollLink from '../../shared/NoScrollLink';

const menuOptions = [
  { label: 'Home', href: '/' },
  { label: 'Services & Packages', href: '/services' },
  { label: 'Meet the Team', href: '/team' },
  { label: 'Get in Touch', href: '/contact' },
];

const menuState = {
  open: {
    clipPath: 'circle(200vh at 100vw -36px)',
    transition: {
      duration: 0.75,
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: 'circle(0px at 100vw -36px)',
    transition: {
      delay: 0.5,
      duration: 0.75,
      stiffness: 400,
      damping: 40,
    },
  },
};

const navState = {
  show: {
    y: 0,
  },
  hidden: {
    y: '-100%',
  },
};

export default function Navbar() {
  const path = usePathname();

  const [init, setInit] = useState(false);
  const [showNav, setShowNav] = useState(2);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMenu, toggleShowMenu] = useCycle(false, true);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && !showMenu) {
      setShowNav(0);
    } else {
      setShowNav(window.scrollY == 0 ? 2 : 1);
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    if (!init) {
      setLastScrollY(window.scrollY);
      setShowNav(window.scrollY == 0 ? 2 : 1);
      setInit(true);
    }

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <motion.nav
      initial='show'
      animate={showNav || showMenu ? 'show' : 'hidden'}
      variants={navState}
      transition={{ duration: 0.1 }}
      className={`fixed z-50 h-[5rem] w-screen text-menu`}
    >
      <div
        className={`h-full w-full transition-all delay-100 duration-300 ${
          showNav == 2 ? 'bg-transparent' : 'bg-menu'
        }`}
      >
        <div className='mx-auto flex h-full max-w-7xl items-center px-4 transition-all duration-100 ease-linear md:px-8'>
          <Logo
            href='/'
            className='transition-all ease-linear hover:brightness-125'
            size='60px'
          />
          <ul className='hidden flex-grow gap-x-3 font-bold md:ml-10 md:flex lg:gap-x-10'>
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
                  >
                    {label}
                  </NoScrollLink>
                </li>
              );
            })}
            <li className='ml-auto'>
              <BookingButton className='w-40 px-6 py-3'></BookingButton>
            </li>
          </ul>
          <button
            onClick={() => {
              toggleShowMenu();
              document.body.style.overflow = showMenu ? 'scroll' : 'hidden';
            }}
            className='ml-auto text-logo transition-all duration-200 hover:brightness-125 md:hidden'
          >
            <BurgerMenu width={'40px'} height={'40px'} />
          </button>
        </div>
        <motion.div
          initial={'closed'}
          animate={showMenu ? 'open' : 'closed'}
          variants={menuState}
          custom='100%'
          className='fixed left-0 top-0 z-[-10] h-screen w-screen bg-menu p-0 md:hidden'
        >
          <div className='flex h-screen w-screen overflow-hidden overscroll-none'>
            <ul className='content-right my-16 flex h-auto w-full flex-col justify-center gap-8 px-12 pt-[72px] text-right text-2xl font-bold'>
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
                      onClick={() => toggleShowMenu()}
                    >
                      {label}
                    </NoScrollLink>
                  </li>
                );
              })}
              <li className='mt-auto'>
                <BookingButton className='w-40 px-6 py-3'></BookingButton>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
