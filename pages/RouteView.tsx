import React, { useState } from 'react';
import { Navigation, Coffee, ShoppingCart, Fuel, AlertTriangle, Truck, Locate } from 'lucide-react';

export const RouteView: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<'all' | 'fuel' | 'food' | 'rest'>('all');

  // Simulated map styles for "Dark Mode"
  const mapStyle = {
    background: 'radial-gradient(circle at 50% 50%, #1e293b 0%, #0f172a 100%)',
    backgroundImage: `
        linear-gradient(#334155 1px, transparent 1px),
        linear-gradient(90deg, #334155 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px'
  };

  return (
    <div className="relative h-full w-full overflow-hidden flex flex-col">
      
      {/* Map Container */}
      <div className="flex-1 relative" style={mapStyle}>
        
        {/* Simulated Route */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {/* Main Path */}
            <path 
                d="M 100 600 C 200 500 150 400 300 300 S 500 100 600 50" 
                fill="none" 
                stroke="#f97316" 
                strokeWidth="6" 
                strokeLinecap="round"
                className="drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]"
            />
            {/* Alternative/Traffic Path */}
            <path 
                d="M 300 300 C 350 350 400 350 450 300" 
                fill="none" 
                stroke="#ef4444" 
                strokeWidth="6" 
                strokeLinecap="round"
                opacity="0.6"
            />
        </svg>

        {/* POI Markers */}
        <div className="absolute top-[280px] left-[280px] z-20">
             <div className="relative group">
                <div className="w-8 h-8 bg-brand-card border-2 border-green-500 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform cursor-pointer">
                    <Fuel size={16} className="text-green-500" />
                </div>
                <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-brand-dark/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap hidden group-hover:block border border-gray-700">
                    Opet - 41.20₺
                </div>
             </div>
        </div>

        <div className="absolute top-[150px] left-[400px] z-20">
             <div className="w-8 h-8 bg-brand-card border-2 border-blue-500 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform cursor-pointer">
                 <Coffee size={16} className="text-blue-500" />
             </div>
        </div>

        <div className="absolute top-[320px] left-[380px] z-20 animate-pulse">
             <div className="w-8 h-8 bg-red-500/20 border-2 border-red-500 rounded-full flex items-center justify-center shadow-lg">
                 <AlertTriangle size={16} className="text-red-500" />
             </div>
        </div>

        {/* User Truck Marker */}
        <div className="absolute bottom-20 left-20 z-30 transition-all duration-1000">
             <div className="relative">
                 <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.5)] border-4 border-brand-dark">
                    <Truck size={20} className="text-white fill-current" />
                 </div>
                 <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-brand-card/90 backdrop-blur px-3 py-1.5 rounded-lg border border-brand-orange/30 text-center">
                    <div className="text-xs font-bold text-white">82 km/h</div>
                    <div className="text-[10px] text-brand-muted">Hız</div>
                 </div>
             </div>
        </div>

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
                <span className="block text-white font-bold text-lg">3 sa 45 dk</span>
                <span>Kalan Süre</span>
            </div>
            <div className="text-right">
                 <span className="block text-white font-bold text-lg">16:45</span>
                <span>Tahmini Varış</span>
            </div>
        </div>
      </div>
    </div>
  );
};



