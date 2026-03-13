import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import heroImg from "@/assets/hero-ac.jpg";

const items = [
  "Instalação residencial e comercial",
  "Posicionamento estratégico do aparelho",
  "Acabamento limpo e profissional",
  "Orientação completa ao cliente",
  "Funcionamento testado após instalação",
  "Garantia no serviço executado",
];

const InstallationSection = () => (
  <section id="instalacao" className="py-16 sm:py-24 gradient-navy relative overflow-hidden">
    <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <AnimatedSection>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src={heroImg} alt="Instalação profissional" className="w-full h-56 sm:h-80 lg:h-[420px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-secondary/20 backdrop-blur-sm text-secondary text-xs sm:text-sm font-semibold">
                Instalação com excelência
              </span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <span className="text-secondary font-medium text-sm tracking-widest uppercase">Serviço destaque</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-3 mb-4 sm:mb-6 text-navy-foreground">
            Instalação de <span className="text-gradient">Ar-Condicionado</span>
          </h2>
          <p className="text-navy-foreground/70 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
            Nossa equipe realiza a instalação completa do seu ar-condicionado com acabamento impecável, seguindo todas as normas técnicas e garantindo o perfeito funcionamento do equipamento.
          </p>
          <ul className="space-y-3 sm:space-y-4">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-navy-foreground/80 font-medium text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default InstallationSection;
