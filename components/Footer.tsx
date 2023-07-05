import Image from 'next/image';
import Link from 'next/link';

import { footerLinks } from '@/constants';

const Footer = () => (
  <footer className='flex flex-col text-black-100  mt-5 border-t-2 border-blue-100'>
    <div className='flex max-md:flex-col flex-wrap gap-5 sm:px-16 px-6 py-10'>
      <div className='footer__links'>
        {footerLinks.map((item) => (
          <div
            key={item.title}
            className='footer__link'
          >
            <h3 className='font-bold underline'>{item.title}</h3>
            <div className='flex flex-col gap-5'>
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link?.url}
                  className='text-gray-500 hover:font-semibold'
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='flex justify-between items-center flex-wrap mt-10  border-t-2 border-blue-100 sm:px-16 px-6 py-10'>
      <p>CME© 2023 | Derechos Reservados</p>
      <p>
        Creado por:{' '}
        <span className='underline cursor-pointer hover:font-semibold '>
          <a
            target='_blank'
            href='https://gustindev.github.io/developer-portfolio/'
          >
            Juan Gustin
          </a>
        </span>
      </p>
    </div>
  </footer>
);

export default Footer;
