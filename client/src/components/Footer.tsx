import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { imageConfig } from '@/config/images';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0E27] border-t border-[#2D3748] py-12 md:py-16">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img 
                src={imageConfig.logo.footer} 
                alt="NEXUS STORE" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-white font-bold text-lg">NEXUS</span>
            </div>
            <p className="text-[#B0B5C0] text-sm leading-relaxed">
              A loja de tecnologia mais confiável do DF. Produtos originais, atendimento especializado e garantia de qualidade.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-lg">Contato</h3>
            <a 
              href="tel:+5561994226402"
              className="flex items-center gap-2 text-[#B0B5C0] hover:text-[#0080FF] transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm">(61) 99422-6402</span>
            </a>
            <a 
              href="https://wa.me/5561994226402"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#B0B5C0] hover:text-[#0080FF] transition-colors"
            >
              <MessageCircle size={18} />
              <span className="text-sm">WhatsApp</span>
            </a>
            <a 
              href="mailto:contato@nexusstore.com.br"
              className="flex items-center gap-2 text-[#B0B5C0] hover:text-[#0080FF] transition-colors"
            >
              <Mail size={18} />
              <span className="text-sm">Email</span>
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-lg">Localização</h3>
            <div className="flex items-start gap-2">
              <MapPin size={18} className="text-[#0080FF] flex-shrink-0 mt-1" />
              <div className="text-sm text-[#B0B5C0]">
                <p>Feira dos Importados</p>
                <p>Bloco A14, Brasília - DF</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Clock size={18} className="text-[#0080FF] flex-shrink-0 mt-1" />
              <div className="text-sm text-[#B0B5C0]">
                <p>Ter-Dom: 8h às 18h</p>
                <p>Segunda: Fechado</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-lg">Redes Sociais</h3>
            <div className="flex flex-col gap-2">
              <a 
                href="https://instagram.com/nexustoredf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B0B5C0] hover:text-[#0080FF] transition-colors text-sm font-medium"
              >
                Instagram
              </a>
              <a 
                href="https://wa.me/5561994226402"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B0B5C0] hover:text-[#0080FF] transition-colors text-sm font-medium"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-[#0A0E27] via-[#2D3748] to-[#0A0E27] my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6B7280] text-sm text-center md:text-left">
            © {currentYear} NEXUS STORE. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#6B7280] hover:text-[#0080FF] transition-colors text-sm">
              Privacidade
            </a>
            <a href="#" className="text-[#6B7280] hover:text-[#0080FF] transition-colors text-sm">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
