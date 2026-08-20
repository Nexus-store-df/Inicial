import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { imageConfig } from '@/config/images';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const whatsappLink = 'https://wa.me/5561994226402?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20falar%20com%20a%20Nexus%21';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0E27]/95 backdrop-blur-md border-b border-[#2D3748]">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center">
          <div className="h-16 w-20 rounded-lg bg-white flex items-center justify-center overflow-hidden ring-1 ring-white/80 shadow-[0_0_18px_rgba(0,128,255,0.35)]">
            <img
              src={imageConfig.logo.header}
              alt="NEXUS STORE"
              className="h-full w-full object-contain p-1"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('sobre')}
            className="text-[#B0B5C0] hover:text-[#0080FF] transition-colors duration-200 text-sm font-medium"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('prova-social')}
            className="text-[#B0B5C0] hover:text-[#0080FF] transition-colors duration-200 text-sm font-medium"
          >
            Clientes
          </button>
          <button 
            onClick={() => scrollToSection('aparelhos')}
            className="text-[#B0B5C0] hover:text-[#0080FF] transition-colors duration-200 text-sm font-medium"
          >
            Produtos
          </button>
          <button 
            onClick={() => scrollToSection('assistencia')}
            className="text-[#B0B5C0] hover:text-[#0080FF] transition-colors duration-200 text-sm font-medium"
          >
            Assistência
          </button>
          <button 
            onClick={() => scrollToSection('localizacao')}
            className="text-[#B0B5C0] hover:text-[#0080FF] transition-colors duration-200 text-sm font-medium"
          >
            Localização
          </button>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="nexus-btn-primary text-sm"
          >
            Falar com Nexus
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#0080FF] hover:bg-[#1A1F3A] rounded-lg transition-colors"
          >
            <MessageCircle size={20} />
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white hover:bg-[#1A1F3A] rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1A1F3A] border-t border-[#2D3748] p-4 space-y-3">
          <button 
            onClick={() => scrollToSection('sobre')}
            className="block w-full text-left text-[#B0B5C0] hover:text-[#0080FF] transition-colors py-2 px-4 rounded hover:bg-[#0A0E27]"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('prova-social')}
            className="block w-full text-left text-[#B0B5C0] hover:text-[#0080FF] transition-colors py-2 px-4 rounded hover:bg-[#0A0E27]"
          >
            Clientes
          </button>
          <button 
            onClick={() => scrollToSection('aparelhos')}
            className="block w-full text-left text-[#B0B5C0] hover:text-[#0080FF] transition-colors py-2 px-4 rounded hover:bg-[#0A0E27]"
          >
            Produtos
          </button>
          <button 
            onClick={() => scrollToSection('assistencia')}
            className="block w-full text-left text-[#B0B5C0] hover:text-[#0080FF] transition-colors py-2 px-4 rounded hover:bg-[#0A0E27]"
          >
            Assistência
          </button>
          <button 
            onClick={() => scrollToSection('localizacao')}
            className="block w-full text-left text-[#B0B5C0] hover:text-[#0080FF] transition-colors py-2 px-4 rounded hover:bg-[#0A0E27]"
          >
            Localização
          </button>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full nexus-btn-primary text-center text-sm mt-4"
          >
            Falar com Nexus
          </a>
        </div>
      )}
    </header>
  );
}
