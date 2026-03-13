import { Clock, Award, Users, Settings, Heart, Leaf, Building2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const diffs = [
  { icon: Clock, title: "Atendimento Rápido", desc: "Respondemos em minutos e agendamos com agilidade." },
  { icon: Award, title: "Acabamento Profissional", desc: "Instalação limpa, organizada e com capricho nos detalhes." },
  { icon: Users, title: "Equipe Especializada", desc: "Técnicos treinados e experientes no segmento." },
  { icon: Settings, title: "Manutenção Eficiente", desc: "Diagnósticos precisos e soluções rápidas." },
  { icon: Heart, title: "Confiança e Suporte", desc: "Garantia nos serviços e suporte pós-atendimento." },
  { icon: Leaf, title: "Economia de Energia", desc: "Foco em eficiência energética e redução de custos." },
  { icon: Building2, title: "Residencial e Comercial", desc: "Soluções personalizadas para todos os ambientes." },
];

const DifferentialsSection = () => (
  <section id="diferenciais" className="py-16 sm:py-24 gradient-navy relative overflow-hidden">
    <div className="absolute top-0 left-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-12 sm:mb-16">
        <span className="text-secondary font-medium text-sm tracking-widest uppercase">Por que nos escolher</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 text-navy-foreground">
          Nossos <span className="text-gradient">Diferenciais</span>
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {diffs.map((d, i) => (
          <AnimatedSection key={d.title} delay={i * 0.08}>
            <div className="p-4 sm:p-6 rounded-2xl bg-navy-foreground/5 border border-navy-foreground/10 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-1">
              <d.icon className="h-6 w-6 sm:h-8 sm:w-8 text-secondary mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-display font-bold text-navy-foreground mb-1">{d.title}</h3>
              <p className="text-navy-foreground/60 text-xs sm:text-sm">{d.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialsSection;
