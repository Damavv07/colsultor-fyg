
import { useState } from 'react';
import WelcomeScreen from '@/components/WelcomeScreen';
import SearchInterface from '@/components/SearchInterface';
import MapView from '@/components/MapView';
import NotificationSetup from '@/components/NotificationSetup';

type Screen = 'welcome' | 'search' | 'map' | 'notifications';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');

  const handleGetStarted = () => {
    setCurrentScreen('search');
  };

  const handleShowMap = () => {
    setCurrentScreen('map');
  };

  const handleShowNotifications = () => {
    setCurrentScreen('notifications');
  };

  const handleBackToSearch = () => {
    setCurrentScreen('search');
  };

  return (
    <div className="max-w-md mx-auto bg-background min-h-screen">
      {currentScreen === 'welcome' && (
        <WelcomeScreen onGetStarted={handleGetStarted} />
      )}
      
      {currentScreen === 'search' && (
        <SearchInterface 
          onShowMap={handleShowMap}
          onShowNotifications={handleShowNotifications}
        />
      )}
      
      {currentScreen === 'map' && (
        <MapView onBack={handleBackToSearch} />
      )}
      
      {currentScreen === 'notifications' && (
        <NotificationSetup onBack={handleBackToSearch} />
      )}
    </div>
  );
};

export default Index;
