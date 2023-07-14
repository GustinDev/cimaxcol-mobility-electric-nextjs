'use client';

import { CustomFilter, Hero, SearchBar } from '@/components';
import CarCard from '@/components/CarCard';
import { fetchCars } from '@/utils';
import Image from 'next/image';
import { HomeProps } from '@/types';
import { fuels, yearsOfProduction } from '@/constants';
import ShowMore from '@/components/ShowMore';
import { useEffect, useState } from 'react';
import { manufacturers } from '../constants/index';

//SearchParams es de Next, busca querys en la utl.
export default function Home() {
  //Data
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);
  //Search
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  //Filter
  const [fuel, setFuel] = useState('');
  const [year, setYear] = useState(2022);
  //Pagination
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    try {
      setLoading(true);
      const result = await fetchCars({
        manufacturer: manufacturer || '',
        year: year || 2022,
        fuel: fuel || '',
        limit: limit || 10,
        model: model || '',
      });
      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [fuel, year, limit, manufacturer, model]);

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
          <p>Te ayudaremos a encontrar la moto que más se acomode a ti.</p>
        </div>

        <div className='home__filters'>
          <SearchBar
            setManufacturer={setManufacturer}
            setModel={setModel}
          />
          <div className='home__filter-container'>
            <CustomFilter
              title='fuel'
              options={fuels}
              setFilter={setFuel}
            />
            <CustomFilter
              title='year'
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>
        {allCars.length > 0 ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car, index) => (
                <CarCard
                  key={index}
                  car={car}
                />
              ))}
            </div>

            {loading && (
              <div className='mt-16 w-full flex-center'>
                <h1>Cargando...</h1>
                <Image
                  src='/loader.svg'
                  alt='loading'
                  width={50}
                  height={50}
                  className='object-contain'
                />
              </div>
            )}

            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>
              Oops, no encontramos resultados.
            </h2>
          </div>
        )}
      </div>
    </main>
  );
}
