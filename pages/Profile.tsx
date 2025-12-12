import React from 'react';
import { User, Settings, FileText, CreditCard, Bell, LogOut, CheckCircle, Wallet } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CURRENT_USER } from '../constants';

const DATA = [
  { name: 'Pzt', val: 4000 },
  { name: 'Sal', val: 3000 },
  { name: 'Çar', val: 8500 },
  { name: 'Per', val: 2780 },
  { name: 'Cum', val: 6890 },
  { name: 'Cmt', val: 9390 },
  { name: 'Paz', val: 3490 },
];

export const Profile: React.FC = () => {
  return (
    <div className="p-4 space-y-6">
      
      {/* Profile Header */}
      <div className="flex flex-col items-center gap-4 py-6">
        <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-brand-card shadow-2xl">
                <img src="https://picsum.photos/200/200" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 border-2 border-brand-dark rounded-full"></div>
        </div>
        <div className="text-center">
            <h2 className="text-2xl font-bold text-white">Ahmet Kaptan</h2>
            <p className="text-brand-muted">34 TR 1453 • Ford F-Max</p>
        </div>
        
        <div className="flex items-center gap-2 bg-brand-card px-4 py-2 rounded-full border border-gray-700">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <span className="text-sm font-medium text-green-400">İş Alımına Açık</span>
        </div>
      </div>

      {/* Earnings Chart */}
      <div className="bg-brand-card p-5 rounded-2xl border border-gray-800 shadow-lg">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-white">Haftalık Kazanç</h3>
            <span className="text-brand-orange font-mono font-bold">₺38,450</span>
        </div>
        <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={DATA}>
                    <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
                        cursor={{fill: 'rgba(255,255,255,0.05)'}}
                    />
                    <Bar dataKey="val" radius={[4, 4, 0, 0]}>
                        {DATA.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.val > 6000 ? '#f97316' : '#334155'} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Actions / Settings */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-brand-muted uppercase tracking-wider ml-1">Ayarlar & Belgeler</h3>
        
        <div className="bg-brand-card rounded-xl overflow-hidden border border-gray-800 divide-y divide-gray-800">
            <button className="w-full flex items-center justify-between p-4 hover:bg-brand-dark transition-colors text-left group">
                <div className="flex items-center gap-3">
                    <div className="bg-blue-500/10 p-2 rounded-lg text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                        <FileText size={20} />
                    </div>
                    <div>
                        <div className="text-sm font-medium text-white">Dijital Ehliyet & SRC</div>
                        <div className="text-xs text-green-500 flex items-center gap-1"><CheckCircle size={10} /> Doğrulandı</div>
                    </div>
                </div>
                <div className="text-brand-muted text-xs">Görüntüle</div>
            </button>

            <button className="w-full flex items-center justify-between p-4 hover:bg-brand-dark transition-colors text-left group">
                <div className="flex items-center gap-3">
                    <div className="bg-purple-500/10 p-2 rounded-lg text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                        <Wallet size={20} />
                    </div>
                    <div>
                        <div className="text-sm font-medium text-white">Ödeme Yöntemleri</div>
                        <div className="text-xs text-brand-muted">Garanti BBVA •••• 4242</div>
                    </div>
                </div>
            </button>

            <button className="w-full flex items-center justify-between p-4 hover:bg-brand-dark transition-colors text-left group">
                <div className="flex items-center gap-3">
                    <div className="bg-orange-500/10 p-2 rounded-lg text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                        <Bell size={20} />
                    </div>
                    <div>
                        <div className="text-sm font-medium text-white">Bildirimler</div>
                        <div className="text-xs text-brand-muted">Yük alarmları açık</div>
                    </div>
                </div>
            </button>
        </div>

        <button className="w-full flex items-center justify-center gap-2 p-4 text-red-500 font-medium hover:bg-red-500/10 rounded-xl transition-colors">
            <LogOut size={20} />
            Çıkış Yap
        </button>
      </div>

    </div>
  );
};



