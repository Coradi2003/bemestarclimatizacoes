import { TrendingUp, ShieldCheck, Zap, Wind, Timer } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const benefits = [
  { icon: TrendingUp, title: "Melhora a eficiência", desc: "Aparelhos limpos funcionam com mais performance." },
  { icon: ShieldCheck, title: "Reduz risco de falhas", desc: "Previna quebras e problemas inesperados." },
  { icon: Zap, title: "Economiza energia", desc: "Equipamentos bem mantidos consomem menos." },
  { icon: Wind, title: "Qualidade do ar", desc: "Ar mais limpo e saudável para sua família." },
  { icon: Timer, title: "Maior vida útil", desc: "Aumente a durabilidade do seu aparelho." },
];

const MaintenanceSection = () => (
  <section className="py-16 sm:py-24 bg-background relative overflow-hidden">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-12 sm:mb-16">
        <span className="text-secondary font-medium text-sm tracking-widest uppercase">Cuide do seu aparelho</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 text-foreground">
          Manutenção <span className="text-gradient">Preventiva</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
          A manutenção regular é essencial para garantir o bom funcionamento, economia e a saúde de todos.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {benefits.map((b, i) => (
          <AnimatedSection key={b.title} delay={i * 0.1}>
            <div className="text-center p-4 sm:p-6 rounded-2xl bg-card border border-border hover:border-secondary/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <b.icon className="h-6 w-6 sm:h-7 sm:w-7 text-secondary" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-1 text-sm sm:text-base">{b.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">{b.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default MaintenanceSection;
