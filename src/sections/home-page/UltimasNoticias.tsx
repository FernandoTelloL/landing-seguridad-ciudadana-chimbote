// UltimasNoticias.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface Noticia {
  id: number;
  titulo: string;
  fecha: string;
  resumen: string;
  imagen: string;
}

const noticias: Noticia[] = [
  {
    id: 1,
    titulo: 'Título Noticia 1',
    fecha: '01 de octubre, 2024',
    resumen: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    imagen: './assets/images/news/img1.jpg',
  },
  {
    id: 2,
    titulo: 'Título Noticia 2',
    fecha: '02 de octubre, 2024',
    resumen: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    imagen: './assets/images/news/img2.jpg',
  },
  {
    id: 3,
    titulo: 'Título Noticia 3',
    fecha: '03 de octubre, 2024',
    resumen: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    imagen: './assets/images/news/img3.jpg',
  },
  {
    id: 4,
    titulo: 'Título Noticia 4',
    fecha: '04 de octubre, 2024',
    resumen: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    imagen: './assets/images/news/img4.jpg',
  },
  {
    id: 5,
    titulo: 'Título Noticia 5',
    fecha: '05 de octubre, 2024',
    resumen: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    imagen: './assets/images/news/img5.jpg',
  },
  {
    id: 6,
    titulo: 'Título Noticia 6',
    fecha: '06 de octubre, 2024',
    resumen: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard .',
    imagen: './assets/images/news/img6.jpg',
  },
];

export const UltimasNoticias: React.FC = () => {
  return (
    <section className='py-16'>
      <h2 className='text-4xl font-bold my-10 text-center'>Últimas Noticias</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[80vw] mx-auto">


        {noticias.map((noticia) => (
          <a
            href={`/noticia/${noticia.id}`}
            key={noticia.id}
            className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={noticia.imagen}
              alt={noticia.titulo}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="py-2 px-6 w-fit rounded-lg text-xs my-2 bg-red-personal-color text-white font-bold ">{noticia.fecha}</p>
              <h3 className="text-xl font-bold my-4 ">{noticia.titulo.toUpperCase()}</h3>
              <p className="text-sm leading-6">{noticia.resumen}</p>
              <Link to={`/noticia/${noticia.id}`} className=" block text-sm font-extrabold underline-offset-4 mt-4 text-red-personal-color underline">Leer más</Link>
            </div>
          </a>
        ))}
      </div>
    </section>

  );
};
