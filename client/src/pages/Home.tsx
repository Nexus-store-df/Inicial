import { ArrowRight, Play, MapPin, Phone, MessageCircle, Zap, Users, Headphones, Truck, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { imageConfig } from '@/config/images';

export default function Home() {
  const whatsappLink = 'https://wa.me/5561994226402?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20falar%20com%20a%20Nexus%21';

  return (
    <div className="min-h-screen bg-[#0A0E27]">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-b from-[#0A0E27] via-[#1A1F3A] to-[#0A0E27]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6">
              <div className="nexus-brand-accent mx-auto lg:mx-0">
                <span>Premium Tech Store</span>
              </div>
              
              <h1 className="text-center lg:text-left text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                Tecnologia que <span className="nexus-gradient-text">conecta</span> você ao que realmente importa.
              </h1>
              
              <p className="mx-auto text-center lg:mx-0 lg:text-left text-lg md:text-xl text-[#B0B5C0] leading-relaxed max-w-lg">
                iPhones, iPads, MacBooks e muito mais, com atendimento especializado, aparelhos novos e seminovos e uma equipe pronta para encontrar a melhor opção para você.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nexus-btn-primary flex items-center justify-center gap-2 text-center"
                >
                  Falar com a Nexus
                  <ArrowRight size={20} />
                </a>
                <button
                  onClick={() => document.getElementById('localizacao')?.scrollIntoView({ behavior: 'smooth' })}
                  className="nexus-btn-secondary flex items-center justify-center gap-2 text-center"
                >
                  Conhecer a Loja
                  <MapPin size={20} />
                </button>
              </div>
            </div>

            {/* Right Image - Foto real da loja */}
            <div className="relative aspect-[4/5] w-full max-w-[500px] md:aspect-auto md:h-[560px] md:justify-self-end rounded-lg overflow-hidden nexus-glow bg-[#1A1F3A] border-2 border-[#2D3748] flex items-center justify-center">
              {imageConfig.hero.image ? (
                <>
                  <img
                    src={imageConfig.hero.image}
                    alt={imageConfig.hero.alt}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E27] via-transparent to-transparent"></div>
                </>
              ) : (
                <div className="text-center">
                  <p className="text-[#B0B5C0] font-medium">Espaco para imagem real da loja</p>
                  <p className="text-[#6B7280] text-sm mt-2">Configure em: client/src/config/images.ts</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="nexus-divider"></div>
      </div>

      {/* About Section */}
      <section id="sobre" className="py-12 md:py-16 bg-[#0A0E27]">
        <div className="container">
          <div className="mb-8">
            <h2 className="nexus-section-title">Mais do que tecnologia.</h2>
            <p className="nexus-section-subtitle">Uma experiência de compra em que você pode confiar.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="text-[#0080FF]" size={24} />
                  <h3 className="text-2xl font-black text-white">Quem é a Nexus?</h3>
                </div>
                <p className="text-[#B0B5C0] leading-relaxed">
                  Somos uma loja especializada em tecnologia premium, com foco em produtos Apple (iPhones, iPads, MacBooks), além de outras marcas líderes como Xiaomi e acessórios de qualidade.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Zap className="text-[#0080FF]" size={24} />
                  <h3 className="text-2xl font-black text-white">Aparelhos Novos e Seminovos</h3>
                </div>
                <p className="text-[#B0B5C0] leading-relaxed">
                  Oferecemos produtos em perfeito estado, com garantia e procedência garantida. Cada aparelho passa por rigoroso controle de qualidade.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Headphones className="text-[#0080FF]" size={24} />
                  <h3 className="text-2xl font-black text-white">Assistência Técnica Especializada</h3>
                </div>
                <p className="text-[#B0B5C0] leading-relaxed">
                  Além de vender, cuidamos do seu dispositivo. Nossa equipe realiza reparos e manutenção com expertise e peças originais.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Users className="text-[#0080FF]" size={24} />
                  <h3 className="text-2xl font-black text-white">Atendimento Próximo e Humano</h3>
                </div>
                <p className="text-[#B0B5C0] leading-relaxed">
                  Você não está comprando de um vendedor desconhecido pela internet. Visite nossa loja física e conheça a equipe que cuida de você.
                </p>
              </div>
            </div>

            {/* Image - Foto real da equipe */}
            <div className="relative h-72 md:h-[460px] w-full max-w-[440px] lg:justify-self-end rounded-lg overflow-hidden nexus-glow bg-[#1A1F3A] border-2 border-[#2D3748] flex items-center justify-center">
              {imageConfig.about.image ? (
                <img
                  src={imageConfig.about.image}
                  alt={imageConfig.about.alt}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="text-center">
                  <p className="text-[#B0B5C0] font-medium">Espaco para foto da equipe</p>
                  <p className="text-[#6B7280] text-sm mt-2">Configure em: client/src/config/images.ts</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="nexus-divider"></div>
      </div>

      {/* Social Proof Section */}
      <section id="prova-social" className="py-12 md:py-16 bg-gradient-to-b from-[#0A0E27] to-[#1A1F3A]">
        <div className="container">
          <div className="mb-8">
            <h2 className="nexus-section-title">Quem compra, volta.</h2>
            <p className="nexus-section-subtitle">Quem conhece, indica.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {imageConfig.socialProof.items.map((item) => (
              <div key={item.id} className="nexus-card aspect-[4/5] overflow-hidden p-0">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name || 'Registro real de cliente da NEXUS STORE'}
                    className="h-full w-full object-cover"
                  />
                )}
                {(item.testimonial || item.name || item.product) && (
                  <div className="p-5 space-y-2">
                    {item.testimonial && <p className="text-[#B0B5C0] text-sm italic">“{item.testimonial}”</p>}
                    {item.name && <p className="text-white font-bold text-sm">{item.name}</p>}
                    {item.product && <p className="text-[#0080FF] text-xs font-semibold">{item.product}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="aparelhos" className="py-12 md:py-16 bg-gradient-to-b from-[#0A0E27] to-[#1A1F3A]">
        <div className="container">
          <div className="mb-8">
            <h2 className="nexus-section-title">Alguns dos nossos destaques.</h2>
            <p className="nexus-section-subtitle">Produtos selecionados com qualidade garantida.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Product Cards - Configurados em imageConfig.products */}
            {imageConfig.products.map((product, i) => (
              <div key={i} className="nexus-card-premium">
                <div className="aspect-[4/5] mb-3 flex items-center justify-center overflow-hidden rounded-md border-2 border-[#3D4758] bg-[#2D3748]">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <p className="text-[#B0B5C0] text-sm">Imagem do produto</p>
                      <p className="text-[#6B7280] text-xs mt-1">Configure em: imageConfig.products</p>
                    </div>
                  )}
                </div>
                <div className="space-y-3">
                  <h3 className="text-white font-black text-lg">{product.name}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#B0B5C0] font-medium">{product.storage}</span>
                    <span className="text-[#0080FF] font-black">{product.condition}</span>
                  </div>
                  <p className="text-[#0080FF] font-black text-lg">{product.price}</p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nexus-btn-primary w-full text-center text-sm block"
                  >
                    Tenho Interesse
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="nexus-divider"></div>
      </div>

      {/* Technical Support Section */}
      <section id="assistencia" className="py-12 md:py-16 bg-[#0A0E27]">
        <div className="container">
          <div className="mb-8">
            <h2 className="nexus-section-title">Seu aparelho também precisa de quem entende dele.</h2>
            <p className="nexus-section-subtitle">Assistência técnica especializada para cuidar do seu dispositivo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Service Cards */}
            {[
              { icon: Zap, title: 'Bateria', desc: 'Troca de bateria com qualidade garantida' },
              { icon: Headphones, title: 'Áudio', desc: 'Reparo de fones e alto-falantes' },
              { icon: Users, title: 'Diagnóstico', desc: 'Avaliação completa do dispositivo' },
              { icon: Truck, title: 'Entrega', desc: 'Serviço rápido e confiável' },
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="nexus-card text-center">
                  <Icon className="mx-auto mb-4 text-[#0080FF]" size={32} />
                  <h3 className="text-white font-black mb-2">{service.title}</h3>
                  <p className="text-[#B0B5C0] text-sm">{service.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="nexus-btn-primary inline-flex items-center gap-2"
            >
              Falar com a Assistência
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-12 md:py-16 bg-[#0A0E27]">
        <div className="container">
          <div className="mb-8">
            <h2 className="nexus-section-title">Acompanhe a Nexus de perto.</h2>
            <p className="nexus-section-subtitle">Conteúdo exclusivo, novidades e promoções.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {imageConfig.instagram.items.map((post, i) => (
              <a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir Reel ${i + 1} da NEXUS STORE no Instagram`}
                className="group relative aspect-[4/5] overflow-hidden rounded-lg border-2 border-[#2D3748] bg-[#1A1F3A] hover:border-[#0080FF] transition-colors"
              >
                <img
                  src={post.image}
                  alt={post.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-[#0A0E27] to-transparent px-4 pb-3 pt-8 text-sm font-bold text-white">
                  Assistir no Instagram
                  <ArrowRight size={18} className="text-[#0080FF]" />
                </span>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://instagram.com/nexustoredf"
              target="_blank"
              rel="noopener noreferrer"
              className="nexus-btn-primary inline-flex items-center gap-2"
            >
              Seguir no Instagram
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="nexus-divider"></div>
      </div>

      {/* Final CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-[#0A0E27] to-[#1A1F3A]">
        <div className="container">
          <div className="text-center space-y-6">
            <h2 className="nexus-section-title">Está procurando seu próximo aparelho?</h2>
            
            <p className="text-base md:text-lg text-[#B0B5C0] max-w-2xl mx-auto">
              Fale com a nossa equipe, conte o que você procura e encontre a opção que faz sentido para você.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="nexus-btn-primary flex items-center justify-center gap-2"
              >
                Falar com a Nexus no WhatsApp
                <MessageCircle size={20} />
              </a>
              <button
                onClick={() => document.getElementById('localizacao')?.scrollIntoView({ behavior: 'smooth' })}
                className="nexus-btn-secondary flex items-center justify-center gap-2"
              >
                Como Chegar à Loja
                <MapPin size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="nexus-divider"></div>
      </div>

      {/* Location Section */}
      <section id="localizacao" className="py-12 md:py-16 bg-[#0A0E27]">
        <div className="container">
          <div className="mb-8">
            <h2 className="nexus-section-title">Venha conhecer a Nexus.</h2>
            <p className="nexus-section-subtitle">Visite nossa loja física e conheça nossos produtos pessoalmente.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map image — substituir por imageConfig.map.officialLink quando disponível */}
            <div className="relative aspect-[653/335] overflow-hidden rounded-lg border-2 border-[#2D3748] bg-[#1A1F3A] nexus-glow">
              {imageConfig.map.image ? (
                <img
                  src={imageConfig.map.image}
                  alt="Mapa da localização da NEXUS STORE na Feira dos Importados, Bloco A14"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-center">
                  <div>
                    <MapPin className="mx-auto mb-4 text-[#0080FF]" size={48} />
                    <p className="text-[#B0B5C0]">Mapa será integrado aqui</p>
                  </div>
                </div>
              )}
            </div>

            {/* Location Info */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-black text-white flex items-center gap-2">
                  <MapPin className="text-[#0080FF]" size={24} />
                  Endereço
                </h3>
                <p className="text-[#B0B5C0] text-lg">
                  Feira dos Importados, Bloco A14<br />
                  Brasília - DF
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-black text-white flex items-center gap-2">
                  <Phone className="text-[#0080FF]" size={24} />
                  Telefone
                </h3>
                <a href="tel:+5561994226402" className="text-[#0080FF] text-lg hover:text-[#00D4FF] transition-colors font-bold">
                  (61) 99422-6402
                </a>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-black text-white flex items-center gap-2">
                  <MessageCircle className="text-[#0080FF]" size={24} />
                  WhatsApp
                </h3>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0080FF] text-lg hover:text-[#00D4FF] transition-colors font-bold"
                >
                  Clique para conversar
                </a>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-black text-white">Horário de Funcionamento</h3>
                <div className="text-[#B0B5C0] space-y-2">
                  <p>Terça a Domingo: 8h às 18h</p>
                  <p>Segunda-feira: Fechado</p>
                </div>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="nexus-btn-primary inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Enviar Mensagem
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
