
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

const Hero = () => {
  const handleWhatsAppContact = () => {
    const message = "Olá! Gostaria de solicitar um orçamento para meu projeto de design.";
    const whatsappUrl = `https://wa.me/5551999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailContact = () => {
    window.location.href = "mailto:contato@designer.com.br";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1F0028] via-[#1F0028] to-card" />
      
      {/* Animated gradient orbs - slightly darker than original */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-l from-accent/15 to-primary/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-primary/12 via-accent/12 to-transparent rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/e3ab5728-9795-4fb6-82eb-38f14e754fd2.png" 
            alt="Grupo Drop - Agência de I.A" 
            className="h-24 md:h-28 mx-auto"
          />
        </div>

        {/* Main headline - Mobile optimized */}
        <div className="space-y-4 px-4 sm:px-0">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold font-sora leading-tight">
            <span className="text-white">Design que</span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent block">
              Transforma
            </span>
            <span className="text-gray-300">Marcas</span>
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Agência de Inteligência Artificial especializada em design, automação e marketing digital.
            <span className="text-foreground font-medium"> Transformamos sua presença digital com IA.</span>
          </p>
        </div>

        {/* CTA Buttons - Mobile optimized */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8 px-4 sm:px-0">
          <Button
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full shadow-2xl shadow-pink-500/50 transition-all duration-300 hover:scale-105 border-2 border-white/20 w-full sm:w-auto touch-manipulation"
            onClick={handleWhatsAppContact}
          >
            <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Contratar Agência
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="group border-2 border-primary/80 text-primary hover:bg-primary hover:text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full backdrop-blur-sm bg-card/50 font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto touch-manipulation"
            onClick={handleEmailContact}
          >
            <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Enviar E-mail
          </Button>
        </div>

        {/* Stats - Mobile optimized */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-12 sm:pt-16 max-w-xs sm:max-w-md mx-auto px-4 sm:px-0">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">1.200+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Projetos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">450+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Clientes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">12+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Anos</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
