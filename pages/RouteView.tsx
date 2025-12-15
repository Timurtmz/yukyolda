import React, { useState } from 'react';
import { Navigation, Coffee, ShoppingCart, Fuel, AlertTriangle, Truck, Locate } from 'lucide-react';
import { GoogleMap } from '../components/GoogleMap';

export const RouteView: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<'all' | 'fuel' | 'food' | 'rest'>('all');
  const [routeDistance, setRouteDistance] = useState<number>(0);
  const [routeDuration, setRouteDuration] = useState<number>(0);

  // Örnek rota (gerçek uygulamada aktif işten gelecek)
  const origin = "İstanbul, Türkiye";
  const destination = "Ankara, Türkiye";

  return (
    <div className="relative h-full w-full overflow-hidden flex flex-col">
      
      {/* Map Container */}
      <div className="flex-1 relative">
        <GoogleMap
          origin={origin}
          destination={destination}
          routeColor="#f97316"
          darkMode={true}
          height="100%"
          showControls={true}
          onRouteCalculated={(distance, duration) => {
            setRouteDistance(distance);
            setRouteDuration(duration);
          }}
        />
        
      </div>

      {/* Navigation Overlay Controls */}
      <div className="absolute top-4 right-4 z-40 flex flex-col gap-2">
         <button className="w-10 h-10 bg-brand-card/90 backdrop-blur rounded-full flex items-center justify-center text-white shadow-lg border border-gray-700 hover:border-brand-orange">
            <Locate size={20} />
         </button>
      </div>

      <div className="absolute top-4 left-4 z-40 bg-brand-card/90 backdrop-blur p-3 rounded-xl border border-gray-700 shadow-xl max-w-[200px]">
          <div className="flex items-start gap-3">
              <div className="bg-green-500 p-2 rounded-lg">
                  <Navigation size={20} className="text-white" />
              </div>
              <div>
                  <div className="text-xl font-bold text-white">2.4 km</div>
                  <div className="text-xs text-brand-muted">Sonra sağa dön</div>
                  <div className="text-xs text-white mt-1">Ankara İstikameti</div>
              </div>
          </div>
      </div>

      {/* Bottom Action Sheet for Route */}
      <div className="bg-brand-card border-t border-gray-800 p-4 pb-safe space-y-4">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {[
                { id: 'fuel', icon: Fuel, label: 'Yakıt', color: 'text-green-500' },
                { id: 'food', icon: Coffee, label: 'Yemek', color: 'text-blue-500' },
                { id: 'rest', icon: ShoppingCart, label: 'Market', color: 'text-purple-500' },
            ].map((item) => (
                <button 
                    key={item.id}
                    onClick={() => setActiveLayer(item.id as any)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium whitespace-nowrap transition-colors ${activeLayer === item.id ? 'bg-brand-dark border-brand-orange text-white' : 'bg-brand-dark/50 border-gray-700 text-brand-muted hover:border-gray-500'}`}
                >
                    <item.icon size={16} className={item.color} />
                    {item.label}
                </button>
            ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-brand-muted px-2">
            <div>
                <span className="block text-white font-bold text-lg">
                    {routeDuration > 0 ? `${Math.floor(routeDuration / 60)} sa ${routeDuration % 60} dk` : '3 sa 45 dk'}
                </span>
                <span>Kalan Süre</span>
            </div>
            <div className="text-right">
                 <span className="block text-white font-bold text-lg">
                    {routeDistance > 0 ? `${Math.round(routeDistance)} km` : '450 km'}
                 </span>
                <span>Mesafe</span>
            </div>
        </div>
      </div>
    </div>
  );
};



