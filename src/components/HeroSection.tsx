import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import heroImg from "@/assets/hero-ac.jpg";
import logoFull from "@/assets/logo-full.png";
import { WHATSAPP_URL } from "./WhatsAppFloat";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 gradient-hero" />
    <div className="absolute inset-0">
      <img src={heroImg} alt="Ar-condicionado moderno" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
    </div>
    {/* Frost overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/90" />
    {/* Glow orbs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-glow/10 rounded-full blur-[100px]" />

    <div className="container relative z-10 mx-auto px-4 pt-24 pb-12 sm:pb-16">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-xs sm:text-sm font-medium tracking-wide">
              ❄️ Venda, Instalação & Higienização
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-navy-foreground mb-5 sm:mb-6"
          >
            Instalação, Manutenção e Venda de{" "}
            <span className="text-gradient">Ar-Condicionado</span>{" "}
            com Qualidade Profissional
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-navy-foreground/70 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Atendimento rápido, instalação com acabamento impecável, manutenção especializada e as melhores soluções em climatização para seu ambiente.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-center lg:justify-start"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#25D366] text-card font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-secondary/30 text-secondary font-semibold text-base sm:text-lg hover:bg-secondary/10 transition-all duration-300"
            >
              Ver Serviços
              <ArrowDown className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        {/* Logo animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center mt-6 lg:mt-0"
        >
          <motion.img
            src={logoFull}
            alt="Bem Estar Climatizações"
            className="w-48 sm:w-64 lg:w-[420px] drop-shadow-2xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
