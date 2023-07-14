'use client';
import Image from 'next/image';
import CustomButtom from './CustomButtom';

type Props = {};

const Hero = (props: Props) => {
  const handleScroll = () => {};
  return (
    <div>
      <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
          <h1 className='hero__title'>Cimaxcol Mobility Electric</h1>
          <h2 className='hero__subtitle'>
            Busca, encuentra y compra la moto de tus sueños.
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
              src='/motorbikes-hero.png'
              alt='HeroImg'
              fill
              className='object-contain'
            />
          </div>
          <div className='absolute xl:-top-24 lg:w-3/6  bg-hero-bg bg-repeat-round -z-10 w-full xl:h-full md:w-full h-[300px] mb-36 sm:m-0  md:h-[590px] overflow-hidden 2xl:-mr-[80px] xl:w-[850px] xl:mt-[100px] 2xl:mt-[180px] 2xl:h-[750px] 2xl:w-[950px]' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
