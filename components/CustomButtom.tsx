'use client';
import Image from 'next/image';
//Importamos los types de los props.
import { CustomButtomProps } from '@/types';

const CustomButtom = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}: CustomButtomProps) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={() => {
        handleClick();
      }}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image
            src={rightIcon}
            alt='icon-right'
            fill
            className='object-contain'
          />
        </div>
      )}
    </button>
  );
};

export default CustomButtom;
