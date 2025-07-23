
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Mail, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppContact = () => {
    const whatsappUrl = "https://api.whatsapp.com/send?phone=555130823083&text=Ol%C3%A1%20Grupo%20Drop.%20Preciso%20de%20Informa%C3%A7%C3%B5es%20Sobre%20Seus%20Servi%C3%A7os.";
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailContact = () => {
    window.location.href = "mailto:ola@grupodrop.com.br";
  };

  return (
    <footer className="relative border-t overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1F0028] via-[#0A0010] to-[#1F0028]" />
      
      {/* Light effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#2E003D]/40 via-[#1F0028]/25 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#1F0028]/35 via-[#2E003D]/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-[#2E003D]/20 to-transparent rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-l from-[#1F0028]/25 to-transparent rounded-full blur-2xl" />
      
      {/* Dark contrast areas */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[200px] bg-gradient-to-bl from-[#050008]/50 via-[#0A0010]/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/2 left-1/2 w-[300px] h-[300px] bg-gradient-to-tr from-[#050008]/40 to-transparent rounded-full blur-3xl" />
      {/* CTA Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Pronto para <span className="gradient-text">Começar</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Vamos criar algo incrível juntos. Entre em contato e vamos transformar sua ideia em realidade.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-pink-500/25 transition-all duration-300"
              onClick={handleWhatsAppContact}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Começar Projeto
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="group border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg"
              onClick={handleEmailContact}
            >
              <Mail className="mr-2 h-5 w-5" />
              Enviar E-mail
            </Button>
          </div>
        </div>
      </section>

      {/* Footer content */}
      <div className="border-t border-border/50">
        <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/e3ab5728-9795-4fb6-82eb-38f14e754fd2.png" 
                alt="Grupo Drop - Agência de I.A" 
                className="h-12"
              />
              <p className="text-muted-foreground">
                Agência de Inteligência Artificial especializada em design, automação e marketing digital.
              </p>
              <div className="flex space-x-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary"
                  onClick={() => window.open('https://www.instagram.com/grupodrop_/', '_blank')}
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary"
                  onClick={handleEmailContact}
                >
                  <Mail className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary"
                  onClick={handleWhatsAppContact}
                >
                  <MessageCircle className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Serviços</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-foreground transition-colors cursor-pointer">Designer Gráfico</li>
                <li className="hover:text-foreground transition-colors cursor-pointer">Branding e Identidade Visual</li>
                <li className="hover:text-foreground transition-colors cursor-pointer">Criação de Conteúdo para Redes Sociais</li>
                <li className="hover:text-foreground transition-colors cursor-pointer">Criativos para Gestão de Tráfego Pago</li>
                <li className="hover:text-foreground transition-colors cursor-pointer">Vídeos Curtos e Motion Design</li>
                <li className="hover:text-foreground transition-colors cursor-pointer">Automação com IA</li>
                <li className="hover:text-foreground transition-colors cursor-pointer">Websites e Landing Pages</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Contato</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>Fixo e WhatsApp: (51) 3082-3083</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp: (51) 98623-8277</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp: (51) 98545-7871</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>ola@grupodrop.com.br</span>
                </div>
                <div className="pt-2">
                  <p className="text-sm">
                    Horário de atendimento:
                    <br />
                    Segunda à Sexta: 9h às 18h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50">
          <div className="max-w-6xl mx-auto px-4 py-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <div className="flex items-center text-sm text-muted-foreground">
                <span>© {currentYear} Grupo Drop - Agência de I.A. Todos os direitos reservados.</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <span>Feito com</span>
                <Heart className="h-4 w-4 mx-1 text-primary" />
                <span>e muito café</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
