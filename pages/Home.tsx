import React from 'react';
import { Star, MapPin, Navigation, Droplets, TrendingUp, DollarSign, Truck, Bell, CheckCircle, AlertTriangle } from 'lucide-react';
import { CURRENT_USER, MOCK_FUEL_PRICES } from '../constants';
import { Tab } from '../types';
import { GoogleMap } from '../components/GoogleMap';

interface HomeProps {
    onNavigateToRoute: () => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigateToRoute }) => {
  return (
    <div className="p-4 space-y-6 animate-fade-in">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-brand-card to-brand-dark border border-brand-card p-5 rounded-2xl shadow-xl">
        <h2 className="text-lg font-light text-brand-muted">Hoşgeldin,</h2>
        <h1 className="text-2xl font-bold text-white mt-1">Ahmet Kaptan 👋</h1>
        <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="text-center p-2 rounded-lg bg-brand-dark/50">
                <div className="text-brand-orange font-bold text-lg">{CURRENT_USER.totalTrips}</div>
                <div className="text-[10px] text-brand-muted uppercase tracking-wider">Sefer</div>
            </div>
             <div className="text-center p-2 rounded-lg bg-brand-dark/50">
                <div className="text-green-400 font-bold text-lg flex justify-center items-center gap-0.5">
                    <span className="text-xs">₺</span>{(CURRENT_USER.monthlyEarnings / 1000).toFixed(1)}k
                </div>
                <div className="text-[10px] text-brand-muted uppercase tracking-wider">Kazanç</div>
            </div>
             <div className="text-center p-2 rounded-lg bg-brand-dark/50">
                <div className="text-yellow-400 font-bold text-lg flex justify-center items-center gap-1">
                    {CURRENT_USER.rating} <Star size={12} fill="currentColor" />
                </div>
                <div className="text-[10px] text-brand-muted uppercase tracking-wider">{CURRENT_USER.ratingCount} Oy</div>
            </div>
        </div>
      </div>

      {/* Active Job Panel */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold flex items-center gap-2">
            <Navigation className="text-brand-orange" size={20} />
            Aktif Sefer
        </h3>
        {/* Mocking an active job card that looks like a GPS panel */}
        <div className="bg-brand-card rounded-2xl overflow-hidden border border-brand-orange/20 shadow-lg shadow-brand-orange/5">
            <div className="bg-brand-dark p-4 flex justify-between items-center border-b border-gray-800">
                <div className="flex flex-col">
                    <span className="text-xs text-brand-muted">Kalan Mesafe</span>
                    <span className="text-xl font-bold font-mono text-white">142 <span className="text-sm text-brand-orange">km</span></span>
                </div>
                <div className="flex flex-col text-right">
                    <span className="text-xs text-brand-muted">Varış</span>
                    <span className="text-xl font-bold text-white">16:30</span>
                </div>
            </div>
            
            {/* Mini Map Preview */}
            <div className="relative h-40 w-full group cursor-pointer overflow-hidden rounded-lg" onClick={onNavigateToRoute}>
                <GoogleMap
                  origin="İstanbul, Türkiye"
                  destination="Ankara, Türkiye"
                  routeColor="#f97316"
                  darkMode={true}
                  height="160px"
                  showControls={false}
                />
                <div className="absolute bottom-3 right-3 bg-brand-dark/80 backdrop-blur px-3 py-1 rounded-full text-xs text-brand-orange border border-brand-orange/30 group-hover:bg-brand-orange group-hover:text-white transition-colors z-10">
                    Rotayı Aç &rarr;
                </div>
            </div>

            <div className="p-4 flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-blue-500" />
                    <span>İstanbul</span>
                </div>
                <div className="h-0.5 flex-1 bg-gray-700 mx-3 relative">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-700 p-1 rounded-full">
                        <Truck size={12} className="text-gray-400"/>
                     </div>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-red-500" />
                    <span>Ankara</span>
                </div>
            </div>
        </div>
      </div>

      {/* Fuel Prices Ticker */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold flex items-center gap-2">
            <Droplets className="text-brand-orange" size={20} />
            Güncel Mazot
        </h3>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {MOCK_FUEL_PRICES.map((fuel, idx) => (
                <div key={idx} className="min-w-[120px] bg-brand-card p-3 rounded-xl border border-gray-800 flex flex-col items-center">
                    <span className="text-xs text-brand-muted">{fuel.city}</span>
                    <span className="text-lg font-bold text-white mt-1">₺{fuel.diesel.toFixed(2)}</span>
                </div>
            ))}
        </div>
      </div>

      {/* Important Notifications Panel */}
      <div className="space-y-3 pb-6">
        <h3 className="text-lg font-semibold flex items-center gap-2">
            <Bell className="text-brand-orange" size={20} />
            Önemli Bilgilendirmeler
        </h3>
        <div className="space-y-3">
            {/* Payment Status - Success */}
            <div className="bg-brand-card p-4 rounded-xl border-l-4 border-green-500 flex items-start gap-3 shadow-lg">
                <div className="bg-green-500/10 p-2 rounded-full shrink-0">
                   <CheckCircle size={18} className="text-green-500" />
                </div>
                <div>
                    <h4 className="font-bold text-white text-sm">Ödeme Durumu</h4>
                    <p className="text-xs text-brand-muted mt-0.5">Son Sefer Ödemesi (12.12.2025) Onaylandı, Gün İçinde Hesabınıza Geçilecek.</p>
                </div>
            </div>

            {/* Document Warning - Critical */}
            <div className="bg-brand-card p-4 rounded-xl border-l-4 border-red-500 flex items-start gap-3 shadow-lg">
                 <div className="bg-red-500/10 p-2 rounded-full shrink-0">
                   <AlertTriangle size={18} className="text-red-500" />
                </div>
                <div>
                    <h4 className="font-bold text-white text-sm">Belge Eksikliği</h4>
                    <p className="text-xs text-brand-muted mt-0.5">Profilinizde SRC Belgesi Güncellemesi Gerekiyor.</p>
                </div>
            </div>

             {/* Review - Info/Star */}
            <div className="bg-brand-card p-4 rounded-xl border-l-4 border-yellow-500 flex items-start gap-3 shadow-lg">
                 <div className="bg-yellow-500/10 p-2 rounded-full shrink-0">
                   <Star size={18} className="text-yellow-500" fill="currentColor" />
                </div>
                <div>
                    <h4 className="font-bold text-white text-sm">Puan/İşveren Yorumu</h4>
                    <p className="text-xs text-brand-muted mt-0.5">Son İşiniz İçin Yeni Bir 4 Yıldızlı Değerlendirme Geldi.</p>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};



