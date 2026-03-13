import { Phone } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import logo from "@/assets/logo.jpg";
import { WHATSAPP_URL } from "./WhatsAppFloat";

const Footer = () => (
  <footer className="bg-navy border-t border-navy-foreground/10 pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Bem Estar Climatizações" className="h-12 w-12 rounded-lg object-cover" />
            <span className="font-display text-lg font-bold text-navy-foreground">
              Bem Estar <span className="text-secondary">Climatizações</span>
            </span>
          </div>
          <p className="text-navy-foreground/60 text-sm leading-relaxed">
            Venda, Instalação & Higienização de ar-condicionado com qualidade profissional e atendimento diferenciado.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-navy-foreground mb-4">Serviços</h4>
          <ul className="space-y-2 text-navy-foreground/60 text-sm">
            <li>Instalação de Ar-Condicionado</li>
            <li>Manutenção Preventiva e Corretiva</li>
            <li>Limpeza e Higienização</li>
            <li>Compra e Venda</li>
            <li>Suporte Técnico</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-navy-foreground mb-4">Contato</h4>
          <div className="space-y-3">
            <a href="tel:+5549999683580" className="flex items-center gap-2 text-navy-foreground/60 hover:text-secondary transition-colors text-sm">
              <Phone className="h-4 w-4" />
              (49) 99968-3580
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-card text-sm font-semibold hover:scale-105 transition-all">
              <WhatsAppIcon className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10 pt-6 text-center">
        <p className="text-navy-foreground/40 text-sm">
          © {new Date().getFullYear()} Bem Estar Climatizações. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
