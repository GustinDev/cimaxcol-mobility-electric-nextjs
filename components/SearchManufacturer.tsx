'use client';

import { Combobox, Transition } from '@headlessui/react';

import React, { useState, Fragment } from 'react';
import { SearchManuFacturerProps } from '@/types/index';
import Image from 'next/image';

import { manufacturers } from '@/constants';

type Props = {};

const SearchManufacturer = ({
  manufacturer,
  setManuFacturer,
}: SearchManuFacturerProps) => {
  const [query, setQuery] = useState('');

  //Si no hay querys, mandamos todos los manufacturers a rederizar, sino mandamos los filtrados-.
  const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div className='search-manufacturer'>
      <Combobox
        value={manufacturer}
        onChange={setManuFacturer}
      >
        <div className='relative w-full'>
          <Combobox.Button className='absolute top-[14px]'>
            <Image
              src='/car-logo.svg'
              width={20}
              height={20}
              className='ml-4'
              alt='motorbike-logo'
            />
          </Combobox.Button>
          <Combobox.Input
            className='search-manufacturer__input'
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)}
            placeholder='Volkswagen...'
          />
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
