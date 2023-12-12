import Logo from '../../shared/widgets/Logo';
import InstagramLogo from '@/public/assets/icons/instagram.svg';
import FooterItem from './FooterItem';

const footerItems = [
  {
    title: 'About MMT',
    links: [
      { href: './', text: 'Home' },
      { href: '/services', text: 'Services' },
      //{ href: '/team', text: 'Meet the Team' },
      { href: '/safety', text: 'Safety' },
      { href: '/legal', text: 'Legal' },
    ],
  },
  {
    title: 'Interested in Helping?',
    links: [
      //{ href: '/careers', text: 'Join the Team' },
      { href: '/contact', text: 'Business Inquiries' },
    ],
  },
  {
    title: 'Need Help?',
    links: [
      { href: '/faq', text: 'FAQ' },
      { href: '/contact', text: 'Contact Us' },
      { href: '/sitemap', text: 'Sitemap' },
    ],
  },
];

export default function Footer() {
  return (
    <div className='w-full bg-menu text-sm text-secondary'>
      <div className='mx-auto w-[90%] max-w-7xl lg:w-4/5'>
        <div className='my-auto w-full max-w-5xl pb-8 md:pt-8'>
          <table className='hidden h-full w-full table-fixed md:table lg:w-4/5'>
            <thead className='text-left align-top text-primary'>
              <tr>
                {footerItems.map((item) => (
                  <th key={item.title}>{item.title}</th>
                ))}
              </tr>
            </thead>
            <tbody className='transition-all ease-linear'>
              <tr className='h-4' />
              {footerItems[0].links.map((_, index) => (
                <tr key={index}>
                  {footerItems.map((item) => (
                    <FooterItem
                      key={item.links[index]?.href}
                      href={item.links[index]?.href}
                    >
                      {item.links[index]?.text}
                    </FooterItem>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {footerItems.map((item) => (
            <table key={item.title} className='mb-8 h-full w-full md:hidden'>
              <thead className='pb-8 text-left align-top text-primary'>
                <tr>
                  <th>{item.title}</th>
                </tr>
              </thead>
              <tbody className='transition-all ease-linear'>
                {item.links.map((link) => (
                  <tr key={link.href}>
                    <FooterItem href={link.href}>{link.text}</FooterItem>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </div>
        <div className='h-px w-full bg-zinc-600'></div>
        <div className='flex h-auto w-full justify-start py-3 align-middle'>
          <Logo className='text-logo' size='72px'></Logo>
          <div className='m-auto w-1/2 text-center text-zinc-400'>
            Copyright © 2023 Manchester Massage Therapy
          </div>
          <div className='my-auto'>
            <a
              className='text-logo saturate-50 transition-all duration-100 hover:saturate-100'
              href='https://www.instagram.com/manchester_massage_therapy/'
              target={'_blank'}
            >
              <InstagramLogo width={'2rem'} height={'2rem'} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
