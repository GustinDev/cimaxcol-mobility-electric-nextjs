import { CustomFilter, Hero, SearchBar } from '@/components';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='overflow'>
      <Hero />
      {/* CATALOGO */}
      <div
        className='mt-12 padding-x padding-y max-width'
        id='discover'
      >
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Catálogo</h1>
          <p>Te ayudaremos a encontrar la moto que mas se acomode a ti.</p>
        </div>
      </div>
      <div className='home__filters'>
        <SearchBar />

        <div className='home__filter-container'>
          <CustomFilter
          // title='fuel'
          // options={fuels}
          />
          <CustomFilter
          // title='year'
          // options={yearsOfProduction}
          />
        </div>
      </div>
    </main>
  );
}
