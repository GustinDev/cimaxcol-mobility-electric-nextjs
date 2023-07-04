import { MouseEventHandler } from 'react';

export interface CustomButtomProps {
  title: string;
  containerStyles?: string;
  btnType?: 'button' | 'submit' | 'reset' | undefined;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}
