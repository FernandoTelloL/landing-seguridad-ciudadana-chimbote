

export const FacebookFeed: React.FC = () => {
  return (
    <div className="w-full rounded-xl p-4 flex flex-col items-center mt-14">

      <h2 className='text-2xl font-bold my-10 text-center'>Síguenos en Facebook</h2>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61556328152467&tabs=timeline&width=300&height=1000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="300"
        height="1000"
        style={{ overflow: 'hidden' }}
        scrolling="no"
        allowFullScreen={true}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        className="border-2 border-gray-400 rounded-lg p-2"
      />
    </div>
  );
};

