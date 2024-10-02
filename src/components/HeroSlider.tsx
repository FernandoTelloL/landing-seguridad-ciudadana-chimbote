// src/components/HeroSlider.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const HeroSlider: React.FC = () => {
  const slides = [
    {
      id: 1,
      image: 'assets/images/hero1.jpg',
      title: 'Bienvenidos al Serenazgo',
      description: 'Su seguridad es nuestra prioridad.',
    },
    {
      id: 2,
      image: 'assets/images/img2.jpg',
      title: 'Compromiso con la Comunidad',
      description: 'Trabajando juntos por un mejor distrito.',
    },
    {
      id: 3,
      image: 'assets/images/img3.jpg',
      title: 'Protegiendo a Todos',
      description: 'Nuestra misión es mantener el orden y la paz.',
    },
  ];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="w-full h-96"
    >
      {slides.map(slide => (
        <SwiperSlide key={slide.id}>
          <div className="relative h-96">
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
              <h1 className="text-4xl font-bold">{slide.title}</h1>
              <p className="mt-4 text-lg">{slide.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
