import { Wrench, Wind, ShieldCheck, Sparkles, ShoppingCart, Headphones } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { WHATSAPP_URL } from "./WhatsAppFloat";
import WhatsAppIcon from "./WhatsAppIcon";

const services = [
  { icon: Wind, title: "Instalação de Ar-Condicionado", desc: "Instalação profissional com acabamento impecável e teste de funcionamento." },
  { icon: Wrench, title: "Manutenção Preventiva", desc: "Revisão completa para garantir performance e economia de energia." },
  { icon: ShieldCheck, title: "Manutenção Corretiva", desc: "Diagnóstico e reparo rápido para seu aparelho voltar a funcionar." },
  { icon: Sparkles, title: "Limpeza e Higienização", desc: "Higienização profunda que melhora a qualidade do ar e a saúde." },
  { icon: ShoppingCart, title: "Compra e Venda", desc: "As melhores marcas e modelos com orientação especializada." },
  { icon: Headphones, title: "Suporte Técnico", desc: "Assistência técnica dedicada com atendimento ágil e eficiente." },
];

const ServicesSection = () => (
  <section id="servicos" className="py-16 sm:py-24 bg-background relative overflow-hidden">
    <div className="absolute top-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-[100px]" />
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-12 sm:mb-16">
        <span className="text-secondary font-medium text-sm tracking-widest uppercase">O que fazemos</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 text-foreground">
          Nossos <span className="text-gradient">Serviços</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
          Soluções completas em climatização com qualidade, agilidade e garantia.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
            <div className="group relative p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-secondary/40 transition-all duration-500 hover:shadow-xl hover:shadow-secondary/5 hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-secondary/20 transition-colors">
                <s.icon className="h-6 w-6 sm:h-7 sm:w-7 text-secondary" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold mb-2 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.4} className="text-center mt-12">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-card font-semibold text-lg shadow-lg hover:scale-105 transition-all duration-300"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Solicitar Orçamento
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default ServicesSection;
