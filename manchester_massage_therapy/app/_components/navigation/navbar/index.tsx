'use client';

import Link from 'next/link';
import Logo from '../../shared/Logo';
import BurgerMenu from '../../../../public/burgerMenu.svg';
import style from './navbar.module.css';
import { useEffect, useState } from 'react';
import BookingButton from '../../shared/BookingButton';

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const linkStyles = 'ease-linear transition-all hover:brightness-125';

  return (
    <nav
      className={`fixed z-50 h-20 w-full bg-menu transition-all duration-[250ms] ease-linear ${
        show ? 'top-0' : style.hide
      }`}
    >
      <div className='container mx-auto h-full px-3'>
        <div className='flex h-full items-center text-menu'>
          <Logo href='./' className={linkStyles} size='60px' />
          <ul className='hidden flex-grow gap-x-3 font-bold md:ml-10 md:flex lg:gap-x-10'>
            <li>
              <Link className={linkStyles} href='./'>
                Home
              </Link>
            </li>
            <li>
              <Link className={linkStyles} href='/services'>
                Services & Packages
              </Link>
            </li>
            <li>
              <Link className={linkStyles} href='/team'>
                Meet the Team
              </Link>
            </li>
            <li>
              <Link className={linkStyles} href='/contact'>
                Get in Touch
              </Link>
            </li>
            <li className='ml-auto'>
              <BookingButton className='w-40 px-6 py-3'></BookingButton>
            </li>
          </ul>
          <button className='ml-auto text-logo transition-all duration-200 hover:brightness-125 md:hidden'>
            <BurgerMenu width={'40px'} height={'40px'} />
          </button>
        </div>
      </div>
    </nav>
  );
}
