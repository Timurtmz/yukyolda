import React, { useState } from 'react';
import { Filter, MapPin, Clock, Weight, Package, ArrowRight, Sparkles, TurkishLira, Star } from 'lucide-react';
import { MOCK_JOBS } from '../constants';

export const JobSearch: React.FC = () => {
  const [radius, setRadius] = useState(50);

  return (
    <div className="flex flex-col h-full bg-brand-dark">
      {/* Filter Header */}
      <div className="bg-brand-card p-4 rounded-b-3xl border-b border-brand-orange/10 shadow-lg space-y-4">
        <div className="flex gap-2">
            <div className="flex-1 relative">
                 <div className="absolute left-3 top-3 text-brand-muted"><MapPin size={18} /></div>
                 <input 
                    type="text" 
                    placeholder="Nereden?" 
                    className="w-full bg-brand-dark text-white pl-10 pr-4 py-2.5 rounded-xl border border-gray-700 focus:border-brand-orange focus:outline-none placeholder:text-gray-600"
                    defaultValue="Mevcut Konum"
                 />
            </div>
             <div className="flex-1 relative">
                 <div className="absolute left-3 top-3 text-brand-muted"><MapPin size={18} /></div>
                 <input 
                    type="text" 
                    placeholder="Nereye?" 
                    className="w-full bg-brand-dark text-white pl-10 pr-4 py-2.5 rounded-xl border border-gray-700 focus:border-brand-orange focus:outline-none placeholder:text-gray-600"
                 />
            </div>
        </div>
        
        <div className="flex items-center gap-4">
             <div className="flex-1">
                <div className="flex justify-between text-xs text-brand-muted mb-2">
                    <span>Mesafe Çapı</span>
                    <span className="text-brand-orange">+{radius} km</span>
                </div>
                <input 
                    type="range" 
                    min="0" 
                    max="200" 
                    value={radius} 
                    onChange={(e) => setRadius(Number(e.target.value))}
                    className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                />
             </div>
             <button className="bg-brand-dark border border-gray-700 p-2.5 rounded-xl text-brand-muted hover:text-white hover:border-brand-orange transition-colors">
                <Filter size={20} />
             </button>
        </div>
      </div>

      {/* Job List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <h3 className="text-sm font-medium text-brand-muted uppercase tracking-wider ml-1">Uygun Yükler ({MOCK_JOBS.length})</h3>

        {MOCK_JOBS.map((job) => (
            <div key={job.id} className={`relative bg-brand-card rounded-xl overflow-hidden border transition-all hover:scale-[1.01] ${job.isAiSuggested ? 'border-brand-orange shadow-[0_0_15px_rgba(249,115,22,0.15)]' : 'border-gray-800 hover:border-gray-600'}`}>
                
                {job.isAiSuggested && (
                    <div className="bg-brand-orange/10 px-4 py-1.5 flex items-center gap-2 border-b border-brand-orange/20">
                        <Sparkles size={14} className="text-brand-orange" />
                        <span className="text-xs font-bold text-brand-orange">Yapay Zeka Önerisi: Dönüş Yükü</span>
                    </div>
                )}

                <div className="p-4">
                    <div className="flex justify-between items-start mb-4">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-white text-lg">{job.origin.split(',')[0]}</span>
                                <ArrowRight size={16} className="text-brand-muted" />
                                <span className="font-bold text-white text-lg">{job.destination.split(',')[0]}</span>
                            </div>
                            <div className="text-xs text-brand-muted flex items-center gap-2">
                                <span className="bg-gray-800 px-2 py-0.5 rounded text-gray-300">{job.companyName}</span>
                                <span className="flex items-center text-yellow-500">
                                    <Star size={10} fill="currentColor" className="mr-0.5" /> {job.rating}
                                </span>
                            </div>
                        </div>
                        <div className="text-right">
                             <div className="text-xl font-bold text-green-400 flex items-center justify-end">
                                ₺{job.price.toLocaleString()}
                             </div>
                             <div className="text-xs text-brand-muted">KDV Dahil</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2 text-gray-300 bg-brand-dark p-2 rounded-lg">
                            <Package size={16} className="text-brand-orange" />
                            <span className="truncate">{job.cargoType}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300 bg-brand-dark p-2 rounded-lg">
                            <Weight size={16} className="text-brand-orange" />
                            <span>{(job.weight / 1000).toFixed(1)} Ton</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300 bg-brand-dark p-2 rounded-lg">
                            <MapPin size={16} className="text-brand-orange" />
                            <span>{job.distance} km</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300 bg-brand-dark p-2 rounded-lg">
                            <Clock size={16} className="text-brand-orange" />
                            <span>~{Math.ceil(job.distance / 70)} Saat</span>
                        </div>
                    </div>

                    {job.urgent && (
                         <div className="mt-3 flex items-center gap-2 text-red-400 text-xs font-medium">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                            Acil Teslimat
                        </div>
                    )}
                    
                    <button className="w-full mt-4 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                        İşi Al
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};



