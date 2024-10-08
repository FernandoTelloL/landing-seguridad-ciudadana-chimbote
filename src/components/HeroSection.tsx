import './hero-section.css';

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-image h-[80vh] flex items-center justify-center " >
      <div className="bg-black bg-opacity-60 w-full h-full p-6 text-white text-center flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold mb-10">SEGURIDAD CIUDADANA</h1>
        <p className="mt-4 text-4xl font-bold">Juntos lo haremos mejor!</p>
      </div>
    </section>
  );
}
