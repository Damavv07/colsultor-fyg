
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
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Modern animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="text-center max-w-sm w-full animate-fade-in-up relative z-10">
        {/* Logo with modern circular design */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Outer technological ring */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-blue-500 p-1 animate-pulse-slow">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <img 
                  src="/lovable-uploads/9378204d-3189-486c-b22a-f6e6321bee46.png" 
                  alt="Consultor FYG" 
                  className="w-20 h-20"
                />
              </div>
            </div>
            {/* Tech glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-pulse-slow blur-2xl"></div>
          </div>
        </div>

        {/* Welcome message */}
        <div className="mb-8 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Find Your Medicines
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Search availability and prices in nearby pharmacies in real-time
          </p>
        </div>

        {/* Modern feature cards */}
        <div className="mb-8 space-y-3">
          <Card className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-0 rounded-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg">📍</span>
              </div>
              <span className="text-gray-700 font-medium">Nearby Pharmacies</span>
            </div>
          </Card>
          
          <Card className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 border-0 rounded-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg">💊</span>
              </div>
              <span className="text-gray-700 font-medium">Real-time Availability</span>
            </div>
          </Card>
          
          <Card className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-0 rounded-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg">💰</span>
              </div>
              <span className="text-gray-700 font-medium">Price Comparison</span>
            </div>
          </Card>
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
