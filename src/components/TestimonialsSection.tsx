import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  { name: "Carlos Eduardo", text: "Profissionais muito competentes! Instalação rápida, limpa e o ar funciona perfeitamente. Super recomendo.", stars: 5 },
  { name: "Juliana Martins", text: "Fizeram a manutenção do meu split e ficou como novo. Atendimento excelente e pontual. Nota 10!", stars: 5 },
  { name: "Roberto Silva", text: "Comprei um inverter com eles e fizeram toda a instalação. Equipe organizada, acabamento impecável.", stars: 5 },
  { name: "Ana Paula Costa", text: "Higienização profissional! A qualidade do ar melhorou demais. Equipe educada e atenciosa.", stars: 5 },
  { name: "Fernando Oliveira", text: "Atendimento rápido pelo WhatsApp, orçamento justo e serviço de primeira. Virei cliente fiel.", stars: 5 },
  { name: "Mariana Santos", text: "Instalaram em dois ambientes da minha empresa. Tudo perfeito, dentro do prazo e com garantia.", stars: 5 },
];

const TestimonialsSection = () => (
  <section id="depoimentos" className="py-16 sm:py-24 bg-background relative overflow-hidden">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-12 sm:mb-16">
        <span className="text-secondary font-medium text-sm tracking-widest uppercase">O que dizem sobre nós</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 text-foreground">
          Depoimentos de <span className="text-gradient">Clientes</span>
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.08}>
            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-secondary/30 transition-all duration-500 hover:shadow-lg">
              <div className="flex gap-1 mb-3 sm:mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 sm:mb-5 leading-relaxed italic text-sm sm:text-base">"{t.text}"</p>
              <p className="font-display font-bold text-foreground text-sm sm:text-base">{t.name}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
