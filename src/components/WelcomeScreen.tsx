
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

const WelcomeScreen = ({ onGetStarted }: WelcomeScreenProps) => {
  const [animateButton, setAnimateButton] = useState(false);

  const handleGetStarted = () => {
    setAnimateButton(true);
    setTimeout(() => {
      onGetStarted();
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-fyg-teal/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-16 w-16 h-16 bg-fyg-blue/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-fyg-green/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-60 right-10 w-24 h-24 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="text-center max-w-sm w-full animate-fade-in-up relative z-10">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/9378204d-3189-486c-b22a-f6e6321bee46.png" 
              alt="Consultor FYG" 
              className="w-24 h-24 animate-pulse-slow"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-fyg-teal/20 to-fyg-blue/20 rounded-full animate-pulse-slow blur-xl"></div>
          </div>
        </div>

        {/* Welcome message */}
        <div className="mb-8 space-y-4">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Encuentra tus medicamentos
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Busca disponibilidad y precios en farmacias cercanas en tiempo real
          </p>
        </div>

        {/* Features preview */}
        <div className="mb-8 space-y-3">
          <Card className="p-4 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-fyg-teal rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📍</span>
              </div>
              <span className="text-sm text-muted-foreground">Farmacias cercanas</span>
            </div>
          </Card>
          
          <Card className="p-4 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-fyg-blue rounded-full flex items-center justify-center">
                <span className="text-white text-sm">💊</span>
              </div>
              <span className="text-sm text-muted-foreground">Disponibilidad en tiempo real</span>
            </div>
          </Card>
          
          <Card className="p-4 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-fyg-green rounded-full flex items-center justify-center">
                <span className="text-white text-sm">💰</span>
              </div>
              <span className="text-sm text-muted-foreground">Comparación de precios</span>
            </div>
          </Card>
        </div>

        {/* Get started button */}
        <Button 
          onClick={handleGetStarted}
          className={`w-full py-6 text-lg font-semibold bg-gradient-to-r from-fyg-teal to-fyg-blue hover:from-fyg-blue hover:to-fyg-teal transition-all duration-300 transform ${
            animateButton ? 'scale-95' : 'hover:scale-105'
          }`}
          size="lg"
        >
          Comenzar
        </Button>

        {/* Terms notice */}
        <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
          Al continuar, aceptas nuestros términos y condiciones de uso
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
