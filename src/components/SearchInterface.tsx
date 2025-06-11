
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface MedicationResult {
  id: string;
  name: string;
  genericName: string;
  price: number;
  originalPrice?: number;
  pharmacy: string;
  distance: string;
  availability: number;
  expirationDate: string;
  hasDiscount: boolean;
}

interface SearchInterfaceProps {
  onShowMap: () => void;
  onShowNotifications: () => void;
}

const SearchInterface = ({ onShowMap, onShowNotifications }: SearchInterfaceProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<MedicationResult[]>([]);

  // Mock data for demonstration
  const mockResults: MedicationResult[] = [
    {
      id: '1',
      name: 'Paracetamol 500mg',
      genericName: 'Acetaminofén',
      price: 45.50,
      originalPrice: 52.00,
      pharmacy: 'Farmacia San Pablo',
      distance: '0.3 km',
      availability: 15,
      expirationDate: '2025-08-15',
      hasDiscount: true
    },
    {
      id: '2',
      name: 'Ibuprofeno 600mg',
      genericName: 'Ibuprofeno',
      price: 38.90,
      pharmacy: 'Farmacia del Ahorro',
      distance: '0.7 km',
      availability: 8,
      expirationDate: '2025-06-20',
      hasDiscount: false
    },
    {
      id: '3',
      name: 'Omeprazol 20mg',
      genericName: 'Omeprazol',
      price: 89.00,
      originalPrice: 95.00,
      pharmacy: 'Farmacias Similares',
      distance: '1.2 km',
      availability: 23,
      expirationDate: '2025-12-10',
      hasDiscount: true
    }
  ];

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setResults(mockResults);
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with search */}
      <div className="bg-gradient-to-r from-fyg-teal to-fyg-blue p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/9378204d-3189-486c-b22a-f6e6321bee46.png" 
              alt="FYG" 
              className="w-8 h-8"
            />
            <h1 className="text-xl font-semibold">Consultor FYG</h1>
          </div>
          
          {/* Avatar assistant */}
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse-slow">
            <div className="w-6 h-6 bg-white/40 rounded-full"></div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex space-x-2">
            <Input
              type="text"
              placeholder="Buscar medicamento..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Button 
              onClick={handleSearch}
              disabled={isSearching}
              className="bg-white/20 hover:bg-white/30 text-white"
            >
              {isSearching ? '...' : '🔍'}
            </Button>
          </div>
          
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onShowMap}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              📍 Mapa
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onShowNotifications}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              🔔 Alertas
            </Button>
          </div>
        </div>
      </div>

      {/* Search results */}
      <div className="p-4 space-y-4">
        {isSearching && (
          <div className="text-center py-8">
            <div className="animate-spin w-8 h-8 border-2 border-fyg-teal border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-muted-foreground">Buscando medicamentos...</p>
          </div>
        )}

        {results.length > 0 && !isSearching && (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              {results.length} resultados encontrados
            </p>
            
            {results.map((result) => (
              <Card key={result.id} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{result.name}</h3>
                    <p className="text-sm text-muted-foreground">{result.genericName}</p>
                  </div>
                  
                  {result.hasDiscount && (
                    <Badge variant="secondary" className="bg-fyg-teal/10 text-fyg-teal">
                      Descuento
                    </Badge>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Precio</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-fyg-green">
                        ${result.price}
                      </span>
                      {result.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${result.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-xs text-muted-foreground">Disponible</p>
                    <p className="text-lg font-semibold">{result.availability} unidades</p>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <div>
                    <p className="font-medium text-foreground">{result.pharmacy}</p>
                    <p className="text-muted-foreground">{result.distance}</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-muted-foreground">Vence:</p>
                    <p className="text-foreground">{result.expirationDate}</p>
                  </div>
                </div>

                <Button className="w-full mt-3 bg-fyg-teal hover:bg-fyg-blue">
                  Ver detalles
                </Button>
              </Card>
            ))}
          </div>
        )}

        {results.length === 0 && !isSearching && searchQuery && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💊</span>
            </div>
            <p className="text-muted-foreground">No se encontraron resultados</p>
            <p className="text-sm text-muted-foreground mt-2">
              Intenta con otro nombre de medicamento
            </p>
          </div>
        )}

        {results.length === 0 && !isSearching && !searchQuery && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gradient-to-br from-fyg-teal to-fyg-blue rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
              <span className="text-2xl text-white">🔍</span>
            </div>
            <p className="text-foreground font-medium">¿Qué medicamento buscas?</p>
            <p className="text-sm text-muted-foreground mt-2">
              Ingresa el nombre del medicamento para encontrar disponibilidad y precios
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInterface;
