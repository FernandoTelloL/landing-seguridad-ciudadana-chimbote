
import { Banner } from "../components/Banner";
import { HeroSection } from "../components/HeroSection";
import { EmergencyNumbers } from "../sections/home-page/EmergencyNumbers";
import { ReporteSemanal } from "../sections/home-page/ReporteSemanal";
import { UltimasNoticias } from "../sections/home-page/UltimasNoticias";


export const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      {/* <div className="my-16 p-6 max-w-screen-xl mx-auto text-center">
        <h2 className="text-2xl font-bold">Bienvenidos a nuestra página de Seguridad Ciudadana</h2>
        <p className="mt-2">Aquí encontrarás información sobre nuestras actividades y servicios. ESTO VA A SER UN BANNER.</p>
      </div> */}
      <UltimasNoticias />
      <EmergencyNumbers />
      <Banner backgroundImage="./assets/images/bg-blue.jpg" pngImage="./assets/images/sereno-caricatura.png" />
      <ReporteSemanal />

    </div>
  );
};
