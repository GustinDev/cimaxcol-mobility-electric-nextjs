'use client';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

type FormData = {
  nombre: string;
  email: string;
  celular: string;
  mensaje: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    Swal.fire({
      icon: 'success',
      title: '¡Enviado!',
      text: 'Te contactaremos pronto.',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#192C8C',
    });
  };

  const formData = watch(); // Obtiene la data actual del formulario

  return (
    <div className='flex-1 pt-28 '>
      <h1 className='text-center text-6xl font-bold mb-16'>CONTACTO</h1>

      {/* DATA */}
      <div className='flex padding-x w-full md:w-full lg:w-3/4 xl:w-4/6 mx-auto mb-16 flex-col lg:flex-row'>
        <div className='grow border-b-2 border-blue-600 py-8 w-full lg:w-1/3'>
          <p className='mb-2 font-bold text-3xl'>Información</p>
          <p className='text-neutral-800 text-xl'>Teléfono: 6023489128</p>
          <p className='text-neutral-800 text-xl'>Celular: 3182581421</p>
          <p className='text-neutral-800 text-xl'>
            gerencia.teesasas <br className='flex md:hidden' /> @gmail.com
          </p>
        </div>
        <div className='grow border-b-2 border-blue-600 pb-6 w-full lg:w-1/3 py-8'>
          <p className='mb-2 font-bold text-3xl'>Ubicación</p>
          <p className='text-neutral-800 text-xl'>Carrera 21 # 19a -03</p>
          <p className='text-neutral-800 text-xl'>Aranjuez, Cali, Colombia</p>
          <p className='text-neutral-800 text-xl'>Horarios: L-V 7:30 - 17:30</p>
        </div>
        <div className='flex grow flex-col text-start border-b-2 border-blue-600 pb-6 w-full lg:w-1/3  justify-center lg:justify-start py-8'>
          <p className='mb-2 font-bold text-3xl'>Redes Sociales</p>
          <div className='flex justify-start gap-6 items-center '>
            <a
              href='https://wa.link/76pmz1'
              target='_blank'
              rel='noreferrer'
            >
              <FaWhatsapp style={{ color: '#192C8C', width: 50, height: 50 }} />
            </a>
            <a
              href='https://www.facebook.com/profile.php?id=100068661421832&mibextid=ZbWKwL'
              target='_blank'
              rel='noreferrer'
            >
              <FaFacebook style={{ color: '#192C8C', width: 50, height: 50 }} />
            </a>
            <a
              href='https://www.instagram.com/teesa.tec/?igshid=YmMyMTA2M2Y%3D'
              target='_blank'
              rel='noreferrer'
            >
              <FaInstagram
                style={{ color: '#192C8C', width: 50, height: 50 }}
              />
            </a>
          </div>
        </div>
      </div>
      {/* FORM & MAP */}
      <div className='w-full flex flex-col justify-center lg:flex-row items-center'>
        <div className=' padding-x w-full md:w-3/4 lg:w-2/4 xl:w-2/6 '>
          <h1 className='font-extrabold text-4xl'>
            ¿Quieres recibir más información?
          </h1>
          <h2 className='mt-2 mb-4'>
            Escribe tu información y déjanos un mensaje, nos contactaremos
            contigo lo más pronto posible.
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className='font-bold'>Nombre:</label>
              <input
                {...register('nombre', { required: true })}
                className={`min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none border-2 border-blue-500 shadow-lg ${
                  errors.nombre ? 'border-red-500' : ''
                }`}
              />
              {errors.nombre && (
                <span className='text-red-500'>Este campo es requerido</span>
              )}
              {!errors.nombre && <div className='h-[24px]'></div>}
            </div>

            <div>
              <label className='font-bold'>Email:</label>
              <input
                className={`min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none border-2 border-blue-500 shadow-lg ${
                  errors.email ? 'border-red-500' : ''
                }`}
                {...register('email', {
                  required: true,
                  pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                })}
              />
              {errors.email?.type === 'required' && (
                <span className='text-red-500'>Este campo es requerido</span>
              )}
              {errors.email?.type === 'pattern' && (
                <span className='text-red-500'>Ingresa un email válido</span>
              )}
              {!errors.email && <div className='h-[24px]'></div>}
            </div>

            <div>
              <label className='font-bold'>Celular:</label>
              <input
                className={`min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none border-2 border-blue-500 shadow-lg ${
                  errors.celular ? 'border-red-500' : ''
                }`}
                {...register('celular', {
                  required: true,
                  pattern: /^[\d\s\S]{6,}$/, // Nueva expresión regular
                })}
              />
              {errors.celular?.type === 'required' && (
                <span className='text-red-500'>Este campo es requerido</span>
              )}
              {errors.celular?.type === 'pattern' && (
                <span className='text-red-500'>
                  Ingresa un número de celular válido.
                </span>
              )}
              {!errors.celular && <div className='h-[24px]'></div>}
            </div>

            <div>
              <label className='font-bold'>Mensaje:</label>
              <textarea
                rows={3}
                className={`min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none border-2 border-blue-500 shadow-lg ${
                  errors.mensaje ? 'border-red-500' : ''
                }`}
                {...register('mensaje', { required: true })}
              />

              {errors.mensaje && (
                <span className='text-red-500'>Este campo es requerido</span>
              )}
              {!errors.mensaje && <div className='h-[24px]'></div>}
            </div>

            <button
              className='mb-[50px] inline-block w-full rounded-lg bg-blue-500  px-6 pt-2.5 pb-2 text-md  uppercase leading-normal text-white shadow-lg hover:bg-blue-600 cursor-pointer my-4 font-bold'
              type='submit'
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
        {/* MAP */}
        <div className='ml-10 md:px-0 w-[300px] md:w-[500px] h-[605px] shadow-gray-400 shadow-md rounded-lg'>
          <section className='mb-32 text-center'>
            <div className='relative h-[605px] rounded-lg shadow-lg '>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.641228168729!2d-76.52390572526835!3d3.437165596537331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f3c0eb7bef%3A0x7aa457419aa6e22!2sCra.%2021%20%2319a-3%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1685841525689!5m2!1ses!2sco'
                className='absolute left-0 top-0 h-full w-full rounded-lg'
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                width='800px'
              ></iframe>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
