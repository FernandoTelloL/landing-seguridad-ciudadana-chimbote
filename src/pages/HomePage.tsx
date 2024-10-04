import { Banner } from "../components/Banner";
import { HeroSection } from "../components/HeroSection";
import { EmergencyNumbers } from "../sections/home-page/EmergencyNumbers";
import { Organigrama } from "../sections/home-page/Organigrama";
import { ReporteSemanal } from "../sections/home-page/ReporteSemanal";
import { UltimasNoticias } from "../sections/home-page/UltimasNoticias";
import { ScrollToTop } from "../shared/components/ScrollToTop";
import WhatsAppWidget from "../shared/components/WhatsAppWidget";

export const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <UltimasNoticias />
      <EmergencyNumbers />
      <Banner backgroundImage="./assets/images/bg-blue.jpg" pngImage="./assets/images/sereno-caricatura.png" />
      <Organigrama />
      <ReporteSemanal />

      <ScrollToTop />
      <WhatsAppWidget />
    </div>
  );
};
