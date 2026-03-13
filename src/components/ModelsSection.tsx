import { Wind, Zap, SquareStack, ArrowUpDown, Grid3X3, Layers } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const models = [
  { icon: Wind, name: "Split", desc: "O mais popular para residências. Silencioso e eficiente." },
  { icon: Zap, name: "Inverter", desc: "Tecnologia que economiza até 60% de energia elétrica." },
  { icon: SquareStack, name: "Janela", desc: "Compacto e prático para espaços menores." },
  { icon: ArrowUpDown, name: "Piso Teto", desc: "Ideal para ambientes comerciais e salas amplas." },
  { icon: Grid3X3, name: "Cassete", desc: "Instalação embutida no teto para visual discreto." },
  { icon: Layers, name: "Multi Split", desc: "Climatize vários ambientes com uma única condensadora." },
];

const ModelsSection = () => (
  <section id="modelos" className="py-16 sm:py-24 bg-background relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-glow/5 rounded-full blur-[100px]" />
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-12 sm:mb-16">
        <span className="text-secondary font-medium text-sm tracking-widest uppercase">Tipos de aparelhos</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 text-foreground">
          Modelos de <span className="text-gradient">Ar-Condicionado</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
          Ajudamos você a escolher o modelo ideal para o seu ambiente.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {models.map((m, i) => (
          <AnimatedSection key={m.name} delay={i * 0.08}>
            <div className="group relative p-5 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:bg-primary/20 transition-colors">
                <m.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-base sm:text-xl font-display font-bold mb-1 sm:mb-2 text-foreground">{m.name}</h3>
              <p className="text-muted-foreground text-xs sm:text-base">{m.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ModelsSection;
