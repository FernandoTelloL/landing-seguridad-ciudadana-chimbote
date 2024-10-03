
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Datos de los videos
const videos = [
  {
    id: 'x1',
    title: 'Reporte de Seguridad Ciudadana - Semana 1',
    date: '12 Septiembre 2024',
    videoUrl: 'https://www.youtube.com/watch?v=fVivk5zqn-Y',
    thumbnailUrl: 'https://img.youtube.com/vi/fVivk5zqn-Y/0.jpg'
  },
  {
    id: 'x2',
    title: 'Reporte de Incidentes - Semana 2',
    date: '19 Septiembre 2024',
    videoUrl: 'https://www.youtube.com/watch?v=CZSv43oBb9I',
    thumbnailUrl: 'https://img.youtube.com/vi/CZSv43oBb9I/0.jpg'
  },
  {
    id: 'x3',
    title: 'Reporte de Seguridad Ciudadana - Semana 3',
    date: '26 Septiembre 2024',
    videoUrl: 'https://www.youtube.com/watch?v=oXzKWFNoVi4',
    thumbnailUrl: 'https://img.youtube.com/vi/oXzKWFNoVi4/0.jpg'
  },
  {
    id: 'x4',
    title: 'Reporte de Incidentes - Semana 4',
    date: '03 Octubre 2024',
    videoUrl: 'https://www.youtube.com/watch?v=d122AWsnHYM',
    thumbnailUrl: 'https://img.youtube.com/vi/d122AWsnHYM/0.jpg'
  },
  {
    id: 'x5',
    title: 'Reporte de Seguridad Ciudadana - Semana 5',
    date: '10 Octubre 2024',
    videoUrl: 'https://www.youtube.com/watch?v=YaTunUnSOTM',
    thumbnailUrl: 'https://img.youtube.com/vi/YaTunUnSOTM/0.jpg'
  },
  {
    id: 'x6',
    title: 'Reporte de Incidentes - Semana 6',
    date: '17 Octubre 2024',
    videoUrl: 'https://www.youtube.com/watch?v=K-kzOvFuxFI',
    thumbnailUrl: 'https://img.youtube.com/vi/K-kzOvFuxFI/0.jpg'
  },
  {
    id: 'x7',
    title: 'Reporte de Seguridad Ciudadana - Semana 7',
    date: '24 Octubre 2024',
    videoUrl: 'https://www.youtube.com/watch?v=MMo2dnmSg2w',
    thumbnailUrl: 'https://img.youtube.com/vi/MMo2dnmSg2w/0.jpg'
  },
  {
    id: 'x8',
    title: 'Reporte de Incidentes - Semana 8',
    date: '31 Octubre 2024',
    videoUrl: 'https://www.youtube.com/watch?v=FcVcn4EZxP4',
    thumbnailUrl: 'https://img.youtube.com/vi/FcVcn4EZxP4/0.jpg'
  },
  {
    id: 'x9',
    title: 'Reporte de Seguridad Ciudadana - Semana 9',
    date: '24 Octubre 2024',
    videoUrl: 'https://www.youtube.com/watch?v=tWHCriUfEDI',
    thumbnailUrl: 'https://img.youtube.com/vi/tWHCriUfEDI/0.jpg'
  },
  {
    id: 'x10',
    title: 'Reporte de Incidentes - Semana 10',
    date: '31 Octubre 2024',
    videoUrl: 'https://www.youtube.com/watch?v=xC-F7EabX2I',
    thumbnailUrl: 'https://img.youtube.com/vi/xC-F7EabX2I/0.jpg'
  }
];

{ console.log('videos total: ', videos.length) }

export const ReporteSemanal: React.FC = () => {
  return (
    <section className="py-20 ">
      <div className='w-[80vw] mx-auto'>
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">REPORTE SEMANAL</h2>

        {/* Swiper Component */}
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 }, // Pantallas pequeñas (móviles)
            768: { slidesPerView: 2, spaceBetween: 30 }, // Tablets
            1024: { slidesPerView: 3, spaceBetween: 40 }, // Pantallas medianas
            1280: { slidesPerView: 4, spaceBetween: 40 }, // Pantallas grandes
          }}
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{video.title}</h3>
                    <p className="text-sm text-gray-500">{video.date}</p>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
};