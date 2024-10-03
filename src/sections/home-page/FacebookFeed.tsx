import React from 'react';
import { FaFacebook } from 'react-icons/fa';

interface FacebookFeedProps {
  pageUrl: string;
  height?: number;
  width?: number;
}

export const FacebookFeed: React.FC<FacebookFeedProps> = ({
  pageUrl,
  height = 600,
  width = 350,
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
      {/* Header con ícono de Facebook */}
      <div className="flex items-center space-x-2 mb-4">
        <FaFacebook className="text-blue-600 w-8 h-8" />
        <h2 className="text-2xl font-bold text-gray-800">Síguenos en Facebook</h2>
      </div>
      {/* Iframe que embebe la página de Facebook */}
      <div className="overflow-hidden w-full rounded-lg shadow-inner border-2 border-gray-200">
        <iframe
          title="Facebook Page"
          src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
            pageUrl
          )}&tabs=timeline&width=${width}&height=${height}&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
          width={width}
          height={height}
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </div>
    </div>
  );
};

