
import { useState } from 'react';
import { Button } from '@/components/ui/button';

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
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Modern animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="text-center max-w-sm w-full animate-fade-in-up relative z-10">
        {/* Logo más grande sin círculo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/9378204d-3189-486c-b22a-f6e6321bee46.png" 
              alt="Consultor FYG" 
              className="w-40 h-40"
            />
          </div>
        </div>

        {/* Título CONSULTOR FYG */}
        <div className="mb-8 space-y-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            CONSULTOR FYG
          </h1>
        </div>

        {/* Modern CTA button */}
        <Button 
          onClick={handleGetStarted}
          className={`w-full py-6 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white rounded-2xl transition-all duration-300 transform shadow-lg ${
            animateButton ? 'scale-95' : 'hover:scale-105'
          }`}
          size="lg"
        >
          Get Started
        </Button>

        {/* Terms notice */}
        <p className="text-xs text-gray-500 mt-6 leading-relaxed">
          By continuing, you accept our terms and conditions of use
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
