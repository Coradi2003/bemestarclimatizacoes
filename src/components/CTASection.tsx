import WhatsAppIcon from "./WhatsAppIcon";
import AnimatedSection from "./AnimatedSection";
import { WHATSAPP_URL } from "./WhatsAppFloat";

const CTASection = () => (
  <section id="contato" className="py-16 sm:py-24 gradient-hero relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-glow/10 rounded-full blur-[100px]" />
    </div>
    <div className="container relative z-10 mx-auto px-4 text-center">
      <AnimatedSection>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy-foreground mb-5 sm:mb-6 max-w-3xl mx-auto leading-tight">
          Seu ambiente merece climatização com{" "}
          <span className="text-gradient">eficiência, conforto e profissionalismo</span>.
        </h2>
        <p className="text-navy-foreground/70 text-base sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto">
          Fale agora e solicite seu orçamento pelo WhatsApp. Atendimento rápido e personalizado.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 sm:gap-3 px-7 sm:px-10 py-4 sm:py-5 rounded-2xl bg-[#25D366] text-card font-bold text-lg sm:text-xl shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse-glow"
        >
          <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          Solicitar Orçamento Agora
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default CTASection;
