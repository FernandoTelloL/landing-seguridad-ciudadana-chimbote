// src/modules/landing/components/CarouselSection.tsx
import React from 'react';

interface Props {
  title: string;
  videos: { title: string; url: string }[];
}

export const CarouselSection: React.FC<Props> = ({ title, videos }) => {
  return (
    <section className="py-12">
      <h2 className="text-3xl text-center mb-8">{title}</h2>
      <div className="flex justify-center space-x-4">
        {videos.map((video, index) => (
          <div key={index} className="w-full md:w-1/3">
            <iframe
              title={video.title}
              src={video.url}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-64"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
