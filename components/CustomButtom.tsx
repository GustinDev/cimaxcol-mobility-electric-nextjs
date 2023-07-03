'use client';
import Image from 'next/image';
//Importamos los types de los props.
import { CustomButtomProps } from '@/types';

const CustomButtom = ({
  title,
  containerStyles,
  handleClick,
}: CustomButtomProps) => {
  return (
    <button
      disabled={false}
      type={'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={() => {
        handleClick;
      }}
    >
      {title}
    </button>
  );
};

export default CustomButtom;
