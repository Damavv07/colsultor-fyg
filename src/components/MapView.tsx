
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Pharmacy {
  id: string;
  name: string;
  address: string;
  distance: string;
  rating: number;
  isOpen: boolean;
  phone: string;
}

interface MapViewProps {
  onBack: () => void;
}

const MapView = ({ onBack }: MapViewProps) => {
  const pharmacies: Pharmacy[] = [
    {
      id: '1',
      name: 'Farmacia San Pablo',
      address: 'Av. Insurgentes Sur 1234',
      distance: '0.3 km',
      rating: 4.5,
      isOpen: true,
      phone: '55-1234-5678'
    },
    {
      id: '2',
      name: 'Farmacia del Ahorro',
      address: 'Calle Revolución 567',
      distance: '0.7 km',
      rating: 4.2,
      isOpen: true,
      phone: '55-9876-5432'
    },
    {
      id: '3',
      name: 'Farmacias Similares',
      address: 'Av. Universidad 890',
      distance: '1.2 km',
      rating: 4.0,
      isOpen: false,
      phone: '55-5555-1234'
    }
  ];

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
          <h1 className="text-xl font-semibold">Farmacias cercanas</h1>
        </div>
      </div>

      {/* Map placeholder */}
      <div className="h-64 bg-gradient-to-br from-muted/50 to-muted relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-fyg-teal rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
              <span className="text-2xl text-white">📍</span>
            </div>
            <p className="text-muted-foreground">Vista del mapa</p>
            <p className="text-sm text-muted-foreground">Mostrando farmacias cercanas</p>
          </div>
        </div>

        {/* Mock map pins */}
        <div className="absolute top-20 left-16 w-6 h-6 bg-fyg-teal rounded-full flex items-center justify-center animate-bounce">
          <span className="text-white text-xs">1</span>
        </div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-fyg-blue rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
          <span className="text-white text-xs">2</span>
        </div>
        <div className="absolute bottom-16 left-1/2 w-6 h-6 bg-fyg-green rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '1s' }}>
          <span className="text-white text-xs">3</span>
        </div>
      </div>

      {/* Pharmacy list */}
      <div className="p-4 space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Farmacias disponibles</h2>
        
        {pharmacies.map((pharmacy) => (
          <Card key={pharmacy.id} className="p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="font-semibold text-foreground">{pharmacy.name}</h3>
                  {pharmacy.isOpen ? (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      Abierto
                    </span>
                  ) : (
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                      Cerrado
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{pharmacy.address}</p>
              </div>
              
              <div className="text-right">
                <p className="text-sm font-medium text-fyg-blue">{pharmacy.distance}</p>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm text-muted-foreground">{pharmacy.rating}</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-2">
              <Button 
                size="sm" 
                className="flex-1 bg-fyg-teal hover:bg-fyg-blue"
              >
                Ver inventario
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="border-fyg-teal text-fyg-teal hover:bg-fyg-teal hover:text-white"
              >
                📞 Llamar
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Location permission notice */}
      <div className="p-4">
        <Card className="p-4 bg-fyg-teal/5 border-fyg-teal/20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-fyg-teal rounded-full flex items-center justify-center">
              <span className="text-white text-sm">📍</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">
                Permiso de ubicación requerido
              </p>
              <p className="text-xs text-muted-foreground">
                Para mostrar farmacias más precisas cerca de ti
              </p>
            </div>
            <Button size="sm" variant="outline" className="text-fyg-teal border-fyg-teal">
              Activar
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MapView;
