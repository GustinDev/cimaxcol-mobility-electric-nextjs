import Image from 'next/image';
import Link from 'next/link';
import CustomButtom from './CustomButtom';

type Props = {};

const Navbar = (props: Props) => {
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

          <CustomButtom
            title='Inicio'
            btnType='button'
            containerStyles='text-primary-blue rounded-full  w-[90px] hover:font-semibold '
          />
        </Link>
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
      </nav>
    </header>
  );
};

export default Navbar;
