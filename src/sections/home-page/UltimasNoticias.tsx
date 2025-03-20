// UltimasNoticias.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookFeed } from './FacebookFeed';

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
    titulo: 'Sexagenária deambulando',
    fecha: '19 de marzo, 2025',
    resumen: 'Agentes de patrullaje integrado (Serenazgo y PNP) encontraron deambulando a una fémina adulto mayor por las inmediaciones del kilómetro #6 de la autopista de Cambio Puente, quien refería no recordar la dirección de su vivienda.',
    imagen: './assets/images/news/img1.jpg',
  },
  {
    id: 2,
    titulo: 'Auxilian a motociclista',
    fecha: '19 de Marzo, 2025',
    resumen: 'El hecho se habría registrado en la mañana de hoy (jueves), por  inmediaciones del Camal Municipal; donde el conductor de la camioneta Toyota de color blanco, con placa de rodaje CBK-729, habría impactado al conductor del vehículo menor con placa de rodaje 2958-8H, y de iniciales D. A. B. R. (20).',
    imagen: './assets/images/news/img2.jpg',
  },
  {
    id: 3,
    titulo: 'Seguridad en colegios',
    fecha: '19 de marzo 2025',
    resumen: 'En cumplimiento al acuerdo de autoridades que conforman el Comité Provincial de Seguridad Ciudadana (COPROSEC), la Gerencia de Seguridad Ciudadana, a través del área de Serenazgo brindan resguardo en el ingreso y salidas del alumnado de las diferentes instituciones educativas de Chimbote.',
    imagen: './assets/images/news/img3.jpg',
  },
  {
    id: 4,
    titulo: 'Ayuda a sexagenaria ',
    fecha: '20 de Marzo, 2025',
    resumen: 'Siempre al servicio de la comunidad, personal de rescate de Serenazgo, trasladó a adulto mayor que sufrió caída por epilepsia en su domicilio ubicado en la Urb. 21 de abril, trasladándolo hasta el Hospital la Caleta. Teniendo en cuenta su estado de salud, los agentes brindaron los cuidados necesarios para que la sexagenaria con iniciales M. M. Q. V. (67), llegue a su destino para su atención inmediata en compañía de su familiar.',
    imagen: './assets/images/news/img4.jpg',
  },
  {
    id: 5,
    titulo: 'Siempre al servicio',
    fecha: '18 de Marzo, 2025',
    resumen: 'Atendiendo el llamado de emergencia de nuestros vecinos, personal paramédico y enfermeros de la unidad de rescate que integran el cuerpo de Serenazgo, vienen brindando asistencia a quien lo necesita de manera oportuna en el lugar donde se suscite alguna urgencia o emergencia.',
    imagen: './assets/images/news/img5.jpg',
  },
  {
    id: 6,
    titulo: 'Operativo Nocturno',
    fecha: '18 de Marzo, 2025',
    resumen: 'Como medida preventiva y disuasiva, los agentes de Serenazgo continúan ejecutando su patrullaje por inmediaciones del Malecón Grau y La Costanera, a fin de retirar a extranjeros y personas de mal vivir quienes consumen sustancias tóxicas.',
    imagen: './assets/images/news/img6.jpg',
  },
];

export const UltimasNoticias: React.FC = () => {
  return (

    <div className="flex flex-col md:flex-row md:justify-between md:mx-auto md:w-[80vw] my-16">
      <div className="md:w-2/3">
        <section className='py-16'>
          <h2 className='text-4xl font-bold my-10 text-center'>Últimas Noticias</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {noticias.map((noticia) => (
              <a
                // href={`/noticia/${noticia.id}`}
                href={`#`}
                key={noticia.id}
                className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 h-fit"
              >
                <img
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="py-2 px-6 w-fit rounded-lg text-xs my-2 bg-red-personal-color text-text-primary-color font-bold shadow-lg">{noticia.fecha}</p>
                  <h3 className="text-base font-bold my-4 leading-4">{noticia.titulo.toUpperCase()}</h3>
                  <p className="text-[12px] leading-tight text-ellipsis h-[90px] line-clamp-6">{noticia.resumen}</p>
                  <Link to={'#'} className=" block text-sm font-extrabold underline-offset-4 mt-4 text-green-700 font-poppins underline">Leer más</Link>
                  {/* <Link to={`/noticia/${noticia.id}`} className=" block text-sm font-extrabold underline-offset-4 mt-4 text-green-700 font-poppins underline">Leer más</Link> */}
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
      <div className="md:w-1/3 md:ml-4">
        <FacebookFeed />
      </div>
    </div>




  );
};
