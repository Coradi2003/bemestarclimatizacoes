import { MessageSquare, Search, FileText, Hammer, HeartHandshake } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  { icon: MessageSquare, title: "Entre em Contato", desc: "Fale conosco pelo WhatsApp ou telefone." },
  { icon: Search, title: "Entendemos a Necessidade", desc: "Avaliamos seu ambiente e necessidade." },
  { icon: FileText, title: "Enviamos Orçamento", desc: "Orçamento transparente e sem compromisso." },
  { icon: Hammer, title: "Executamos o Serviço", desc: "Equipe técnica realiza com excelência." },
  { icon: HeartHandshake, title: "Garantimos Suporte", desc: "Suporte pós-serviço e garantia." },
];

const HowItWorksSection = () => (
  <section className="py-16 sm:py-24 gradient-navy relative overflow-hidden">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-12 sm:mb-16">
        <span className="text-secondary font-medium text-sm tracking-widest uppercase">Processo simples</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 text-navy-foreground">
          Como <span className="text-gradient">Funciona</span>
        </h2>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {steps.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.12}>
            <div className="flex items-start sm:items-center gap-4 sm:gap-6">
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center glow-cyan-sm">
                  <s.icon className="h-6 w-6 sm:h-7 sm:w-7 text-secondary" />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-secondary text-card text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-navy-foreground mb-1">{s.title}</h3>
                <p className="text-navy-foreground/60 text-sm sm:text-base">{s.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
