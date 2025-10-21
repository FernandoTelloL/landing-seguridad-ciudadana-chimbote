import { ScrollToTop } from "../shared/components/ScrollToTop";
import WhatsAppWidget from "../shared/components/WhatsAppWidget";

export const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/img7.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center text-white text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Acerca de Nosotros
          </h1>
          <p className="text-lg md:text-xl">
            Comprometidos con la seguridad y el bienestar de Chimbote
          </p>
        </div>
      </section>

      {/* Misión Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-title-color mb-6">
            Nuestra Misión
          </h2>
          <p className="text-lg text-text-primary-color leading-relaxed">
            En la Municipalidad de Chimbote, nuestra misión es promover un
            entorno seguro y tranquilo para todos los ciudadanos. Trabajamos
            incansablemente para prevenir el delito, fomentar la participación
            comunitaria y garantizar que cada residente se sienta protegido en
            su hogar y en las calles de nuestra ciudad.
          </p>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-title-color text-center mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="/assets/images/sereno.png"
                alt="Vigilancia"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Vigilancia Nocturna
              </h3>
              <p className="text-text-primary-color">
                Seremos proporcionan patrullas nocturnas para mantener la
                seguridad en las calles.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="/assets/images/sereno-caricatura.png"
                alt="Prevención"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Prevención del Delito
              </h3>
              <p className="text-text-primary-color">
                Programas educativos y campañas para reducir la incidencia
                delictiva en la comunidad.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="/assets/images/organigrama.png"
                alt="Coordinación"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Coordinación con Autoridades
              </h3>
              <p className="text-text-primary-color">
                Trabajo conjunto con la policía y otras entidades para una
                respuesta efectiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-title-color text-center mb-8">
            Nuestra Historia
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <img
              src="/assets/images/img8.jpg"
              alt="Historia de Chimbote"
              className="w-full md:w-1/2 rounded-lg shadow-md mb-6 md:mb-0 md:mr-8"
            />
            <div>
              <p className="text-lg text-text-primary-color leading-relaxed mb-4">
                La seguridad ciudadana en Chimbote ha sido una prioridad desde
                los inicios de nuestra municipalidad. A lo largo de los años,
                hemos implementado diversas estrategias para adaptarnos a las
                necesidades cambiantes de nuestra comunidad, siempre con el
                objetivo de crear un entorno seguro y próspero.
              </p>
              <p className="text-lg text-text-primary-color leading-relaxed">
                Hoy, continuamos innovando con tecnología moderna y colaboración
                comunitaria para mantener a Chimbote como una ciudad modelo en
                seguridad y convivencia pacífica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section className="py-16 px-6 md:px-12 bg-alternative-bg-color">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-title-color mb-6">
            Contáctanos
          </h2>
          <p className="text-lg text-text-primary-color mb-8">
            ¿Tienes preguntas o necesitas reportar una emergencia? Estamos aquí
            para ayudarte.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <span className="text-2xl mr-2">📞</span>
              <span className="text-lg">Emergencias: 105</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">📧</span>
              <span className="text-lg">seguridad@munichimbote.gob.pe</span>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
      <WhatsAppWidget />
    </div>
  );
};
