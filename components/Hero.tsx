'use client';
import Image from 'next/image';
import CustomButtom from './CustomButtom';

type Props = {};

const Hero = (props: Props) => {
  const handleScroll = () => {};
  return (
    <div>
      <div className='Hero'>
        <div className='flex-1 pt-36 padding-x'>
          <h1 className='hero__title'>
            Cimaxcol Mobility Electric - Motos Eléctricas.
          </h1>
          <h2 className='hero__subtitle'>
            Encuentra, compara y compra la moto de tus sueños.
          </h2>
          <CustomButtom
            title='Ver Catálogo'
            containerStyles='bg-primary-blue text-white rounded-full mt-10'
            handleClick={handleScroll}
          />
        </div>
        <div className='hero__image-container'>
          <div className='hero__image'>
            <Image
              src='/hero.png'
              alt='HeroImg'
              fill
              className='object-contain'
            />
            <div className='hero__image-overlay' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
