
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';

interface NotificationSetupProps {
  onBack: () => void;
}

const NotificationSetup = ({ onBack }: NotificationSetupProps) => {
  const [notifications, setNotifications] = useState({
    stockAlerts: true,
    priceDrops: false,
    newPharmacies: false,
    weeklyDeals: true
  });

  const [medicationAlert, setMedicationAlert] = useState('');

  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleAddAlert = () => {
    if (medicationAlert.trim()) {
      // In a real app, this would save to backend
      console.log('Adding alert for:', medicationAlert);
      setMedicationAlert('');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-fyg-teal to-fyg-blue p-4 text-white">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onBack}
            className="text-white hover:bg-white/20"
          >
            ← Volver
          </Button>
          <h1 className="text-xl font-semibold">Configurar alertas</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Avatar assistant */}
        <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-fyg-teal/10 to-fyg-blue/10 rounded-lg">
          <div className="w-12 h-12 bg-gradient-to-r from-fyg-teal to-fyg-blue rounded-full flex items-center justify-center animate-pulse-slow">
            <div className="w-6 h-6 bg-white/40 rounded-full"></div>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">
              Te ayudo a configurar tus alertas
            </p>
            <p className="text-xs text-muted-foreground">
              Recibe notificaciones cuando tus medicamentos estén disponibles
            </p>
          </div>
        </div>

        {/* Add medication alert */}
        <Card className="p-4">
          <h3 className="font-semibold text-foreground mb-4">Alertas de medicamentos</h3>
          <div className="space-y-3">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Nombre del medicamento..."
                value={medicationAlert}
                onChange={(e) => setMedicationAlert(e.target.value)}
                className="flex-1"
              />
              <Button 
                onClick={handleAddAlert}
                className="bg-fyg-teal hover:bg-fyg-blue"
              >
                Agregar
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Te notificaremos cuando este medicamento esté disponible cerca de ti
            </p>
          </div>
        </Card>

        {/* Notification settings */}
        <Card className="p-4">
          <h3 className="font-semibold text-foreground mb-4">Tipos de notificaciones</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Alertas de disponibilidad</p>
                <p className="text-sm text-muted-foreground">
                  Cuando un medicamento vuelva a estar disponible
                </p>
              </div>
              <Switch
                checked={notifications.stockAlerts}
                onCheckedChange={() => handleToggle('stockAlerts')}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Bajadas de precio</p>
                <p className="text-sm text-muted-foreground">
                  Cuando hay descuentos en tus medicamentos
                </p>
              </div>
              <Switch
                checked={notifications.priceDrops}
                onCheckedChange={() => handleToggle('priceDrops')}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Nuevas farmacias</p>
                <p className="text-sm text-muted-foreground">
                  Cuando se agreguen farmacias cerca de ti
                </p>
              </div>
              <Switch
                checked={notifications.newPharmacies}
                onCheckedChange={() => handleToggle('newPharmacies')}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Ofertas semanales</p>
                <p className="text-sm text-muted-foreground">
                  Resumen semanal de las mejores ofertas
                </p>
              </div>
              <Switch
                checked={notifications.weeklyDeals}
                onCheckedChange={() => handleToggle('weeklyDeals')}
              />
            </div>
          </div>
        </Card>

        {/* Active alerts */}
        <Card className="p-4">
          <h3 className="font-semibold text-foreground mb-4">Alertas activas</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div>
                <p className="font-medium text-foreground">Paracetamol 500mg</p>
                <p className="text-sm text-muted-foreground">Activa desde hace 2 días</p>
              </div>
              <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                Eliminar
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div>
                <p className="font-medium text-foreground">Ibuprofeno 600mg</p>
                <p className="text-sm text-muted-foreground">Activa desde hace 1 semana</p>
              </div>
              <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                Eliminar
              </Button>
            </div>
          </div>
        </Card>

        {/* Save settings */}
        <Button className="w-full py-6 bg-gradient-to-r from-fyg-teal to-fyg-blue hover:from-fyg-blue hover:to-fyg-teal">
          Guardar configuración
        </Button>
      </div>
    </div>
  );
};

export default NotificationSetup;
