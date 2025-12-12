import React from 'react';
import { Truck, Search, Map as MapIcon, User } from 'lucide-react';
import { Tab } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, onTabChange }) => {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col font-sans text-brand-text">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-sm border-b border-brand-card px-4 py-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-2">
            <div className="bg-brand-orange p-1.5 rounded-lg">
                <Truck className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-wide">Yük<span className="text-brand-orange">Yolda</span></h1>
        </div>
        <div className="w-8 h-8 rounded-full bg-brand-card border border-brand-orange/30 overflow-hidden">
             <img src="https://picsum.photos/100/100" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pb-24">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-brand-card border-t border-brand-dark/50 pb-safe pt-2 px-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.3)]">
        <div className="flex justify-between items-center max-w-md mx-auto h-16">
          <button 
            onClick={() => onTabChange(Tab.HOME)}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === Tab.HOME ? 'text-brand-orange' : 'text-brand-muted hover:text-white'}`}
          >
            <Truck size={24} />
            <span className="text-xs font-medium">Ana Sayfa</span>
          </button>
          
          <button 
            onClick={() => onTabChange(Tab.SEARCH)}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === Tab.SEARCH ? 'text-brand-orange' : 'text-brand-muted hover:text-white'}`}
          >
            <Search size={24} />
            <span className="text-xs font-medium">Yük Ara</span>
          </button>

          <button 
            onClick={() => onTabChange(Tab.ROUTE)}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === Tab.ROUTE ? 'text-brand-orange' : 'text-brand-muted hover:text-white'}`}
          >
            <MapIcon size={24} />
            <span className="text-xs font-medium">Rota</span>
          </button>

          <button 
            onClick={() => onTabChange(Tab.PROFILE)}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === Tab.PROFILE ? 'text-brand-orange' : 'text-brand-muted hover:text-white'}`}
          >
            <User size={24} />
            <span className="text-xs font-medium">Profil</span>
          </button>
        </div>
      </nav>
    </div>
  );
};



