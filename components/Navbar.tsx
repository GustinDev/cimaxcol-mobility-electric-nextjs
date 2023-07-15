'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import CustomButtom from './CustomButtom';
import useMediaQuery from '@/hooks/useMediaQuery';

type Props = {};

const Navbar = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <header className='w-full fixed top-0 z-10 bg-gray-50 border-b-2 border-blue-500'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link
          className='flex justify center items-center'
          href='/'
        >
          <Image
            src='/motorbike.svg'
            alt='CMELogo'
            width={30}
            height={30}
            className='object-contain mr-2'
          ></Image>

          <h1 className='font-extrabold text-2xl'>CME</h1>

          {isAboveMediumScreens && (
            <CustomButtom
              title='Inicio'
              btnType='button'
              containerStyles='text-primary-blue rounded-full  w-[90px] hover:font-semibold '
            />
          )}
        </Link>
        {isAboveMediumScreens ? (
          <div className='flex'>
            <Link
              className='flex justify center items-center'
              href='/login'
            >
              <CustomButtom
                title='Ingresar'
                btnType='button'
                containerStyles='text-primary-blue rounded-full  w-[90px] hover:font-semibold'
              />
            </Link>
            <Link
              className='flex justify center items-center'
              href='/contact'
            >
              <CustomButtom
                title='Contacto'
                btnType='button'
                containerStyles='text-primary-blue rounded-full  w-[90px] hover:font-semibold'
              />
            </Link>
            <Link
              className='flex justify center items-center'
              href='/about'
            >
              <CustomButtom
                title='Nosotros'
                btnType='button'
                containerStyles='text-primary-blue rounded-full  w-[90px] hover:font-semibold'
              />
            </Link>
          </div>
        ) : (
          <button
            className='rounded-full bg-secondary-500 p-2'
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            BUTTON
          </button>
        )}

        {/* MOBILE MENU MODAL */}
        {!isAboveMediumScreens && !isMenuToggled && (
          <div className='fixed bottom-0 right-0 z-40 h-full w-[200px] md:w-[300px] bg-primary-100 drop-shadow-xl'>
            {/* CLOSE ICON */}
            <div className='flex justify-end p-12 bg-red-200'>
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                X
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className=' flex flex-col gap-10 text-2xl bg-red-200 h-full z-50'>
              <div
                className={`text-md flex w-full flex-col items-center gap-8 font-bold`}
              >
                <Link
                  className='flex justify center items-center'
                  href='/'
                >
                  <CustomButtom
                    title='Inicio'
                    btnType='button'
                    containerStyles='text-primary-blue rounded-full  w-[90px] hover:font-semibold '
                  />
                </Link>
                <Link
                  className='flex justify center items-center'
                  href='/login'
                >
                  <CustomButtom
                    title='Ingresar'
                    btnType='button'
                    containerStyles='text-primary-blue rounded-full  w-[90px] hover:font-semibold'
                  />
                </Link>
                <Link
                  className='flex justify center items-center'
                  href='/contact'
                >
                  <CustomButtom
                    title='Contacto'
                    btnType='button'
                    containerStyles='text-primary-blue rounded-full  w-[90px] hover:font-semibold'
                  />
                </Link>
                <Link
                  className='flex justify center items-center'
                  href='/about'
                >
                  <CustomButtom
                    title='Nosotros'
                    btnType='button'
                    containerStyles='text-primary-blue rounded-full  w-[90px] hover:font-semibold'
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
