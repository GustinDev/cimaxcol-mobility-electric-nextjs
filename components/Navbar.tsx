import Image from 'next/image';
import Link from 'next/link';
import CustomButtom from './CustomButtom';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link
          className='flex justify center items-center'
          href='/'
        >
          <Image
            src='/logo.svg'
            alt='CMELogo'
            width={118}
            height={18}
            className='object-contain'
          ></Image>

          <CustomButtom
            title='Inicio'
            btnType='button'
            containerStyles='text-primary-blue rounded-full bg-white min-w-[100px]'
          />
        </Link>
        <div className='flex'>
          <CustomButtom
            title='Ingresar'
            btnType='button'
            containerStyles='text-primary-blue rounded-full bg-white min-w-[100px]'
          />
          <Link
            className='flex justify center items-center'
            href='/contact'
          >
            <CustomButtom
              title='Contacto'
              btnType='button'
              containerStyles='text-primary-blue rounded-full bg-white min-w-[100px]'
            />
          </Link>
          <Link
            className='flex justify center items-center'
            href='/about'
          >
            <CustomButtom
              title='Nosotros'
              btnType='button'
              containerStyles='text-primary-blue rounded-full bg-white min-w-[100px]'
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
