import WhatsAppIcon from "./WhatsAppIcon";

const WHATSAPP_URL = "https://wa.me/5549999683580?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20solicitar%20um%20or%C3%A7amento%20para%20ar-condicionado.";

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-300 hover:scale-110 animate-pulse-glow"
    aria-label="WhatsApp"
  >
    <WhatsAppIcon className="h-8 w-8 text-card" />
  </a>
);

export { WHATSAPP_URL };
export default WhatsAppFloat;
