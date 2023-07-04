'use client';

import SearchManufacturer from './SearchManufacturer';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Props = {};

const SearchBar = (props: Props) => {
  const [manufacturer, setManuFacturer] = useState('');
  return (
    <form>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
        {/* <SearchButton otherClasses='sm:hidden' /> */}
      </div>
    </form>
  );
};

export default SearchBar;
