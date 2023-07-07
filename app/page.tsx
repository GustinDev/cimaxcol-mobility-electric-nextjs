import { CustomFilter, Hero, SearchBar } from '@/components';
import CarCard from '@/components/CarCard';
import { fetchCars } from '@/utils';
import Image from 'next/image';
import { HomeProps } from '@/types';
import { fuels, yearsOfProduction } from '@/constants';
import ShowMore from '@/components/ShowMore';

//SearchParams es de Next, busca querys en la utl.
export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow'>
      <Hero />
      {/* CATALOGO */}
      <div
        className='mt-12 padding-x padding-y max-width'
        id='discover'
      >
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Novedades</h1>
          <p>Te ayudaremos a encontrar la moto que más se acomode a ti.</p>
        </div>

        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter
              title='fuel'
              options={fuels}
            />
            <CustomFilter
              title='year'
              options={yearsOfProduction}
            />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car, index) => (
                <CarCard
                  key={index}
                  car={car}
                />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>
              Oops, no encontramos resultados.
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}

        <div>
          <h1 className='text-2xl text-center  font-bold mt-36'>
            Demás cosas de hero, información general.
          </h1>
        </div>
      </div>
    </main>
  );
}
