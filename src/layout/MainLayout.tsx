import { Footer } from "../shared/components/Footer";
import { Header } from "../shared/components/Header";


export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen text-text-primary-color">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

