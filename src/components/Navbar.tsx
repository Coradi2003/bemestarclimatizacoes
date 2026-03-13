import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const links = [
  { label: "Início", href: "#hero" },
  { label: "Serviços", href: "#servicos" },
  { label: "Instalação", href: "#instalacao" },
  { label: "Modelos", href: "#modelos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-navy/95 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#hero" className="flex items-center gap-3">
          <img src={logo} alt="Bem Estar Climatizações" className="h-12 w-12 rounded-lg object-cover" />
          <span className="hidden sm:block font-display text-lg font-bold text-navy-foreground">
            Bem Estar <span className="text-secondary">Climatizações</span>
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-navy-foreground/80 hover:text-secondary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-navy-foreground p-2">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-navy/98 backdrop-blur-md border-t border-primary/10 pb-4">
          <ul className="flex flex-col items-center gap-4 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-navy-foreground/80 hover:text-secondary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
