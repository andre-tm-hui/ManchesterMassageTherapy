import Link from 'next/link';
import Logo from '../../shared/Logo';

export default function Footer() {
  interface FooterItemProps {
    href?: string;
    children?: JSX.Element | JSX.Element[] | string;
  }
  function FooterItem({ href, children }: FooterItemProps) {
    return (
      <td>
        <Link
          href={href!}
          className='transition-all ease-linear hover:brightness-125'
        >
          {children}
        </Link>
      </td>
    );
  }

  return (
    <div className='w-full bg-menu text-sm text-secondary'>
      <div className='mx-auto w-[90%] max-w-7xl lg:w-4/5'>
        <div className='my-auto w-full max-w-5xl py-8'>
          <table className='h-full w-full table-fixed lg:w-4/5'>
            <thead className='pb-8 text-left align-top text-primary'>
              <tr>
                <th>About MMT</th>
                <th>Interested in Helping?</th>
                <th>Need Help?</th>
              </tr>
            </thead>
            <tbody className='transition-all ease-linear'>
              <tr className='h-6'></tr>
              <tr>
                <FooterItem href='./'>Home</FooterItem>
                <FooterItem href='/careers'>Join the Team</FooterItem>
                <FooterItem href='/faq'>FAQ</FooterItem>
              </tr>
              <tr>
                <FooterItem href='/services'>Services</FooterItem>
                <FooterItem href='/team'>Business Inquiries</FooterItem>
                <FooterItem href='/contact'>Contact Us</FooterItem>
              </tr>
              <tr>
                <FooterItem href='/team'>Meet the Team</FooterItem>
                <td />
                <FooterItem href='/sitemap'>Sitemap</FooterItem>
              </tr>
              <tr>
                <FooterItem href='/safety'>Safety</FooterItem>
              </tr>
              <tr>
                <FooterItem href='/legal'>Legal</FooterItem>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='h-px w-full bg-dividerLine'></div>
        <div className='flex h-auto w-full justify-start py-3 align-middle'>
          <Logo size='72px'></Logo>
          <div className='m-auto w-1/2 text-center'>
            Copyright © 2023 Manchester Massage Therapy
          </div>
          <div className='my-auto'>Goodbye</div>
        </div>
      </div>
    </div>
  );
}
