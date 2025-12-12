# YükYolda

YükYolda, Türkiye'deki lojistik sektörü için tasarlanmış yeni nesil bir platformdur. TIR şoförleri ve lojistik şirketleri için AI destekli rota optimizasyonu, yük eşleştirme ve karanlık mod estetiği sunar.

## Özellikler

- 🚛 TIR şoförleri ve lojistik şirketleri için profil sistemi
- ⭐ Uber benzeri puanlama sistemi
- 🗺️ Google Maps entegrasyonu ile rota takibi
- 🤖 AI destekli yük önerileri
- 💰 Canlı fiyatlandırma ve kazanç takibi
- ⛽ Güncel yakıt fiyatları
- 📊 Detaylı kazanç grafikleri

## Kurulum

**Gereksinimler:** Node.js

1. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

2. `.env.local` dosyasında `GEMINI_API_KEY` değerini ayarlayın

3. Uygulamayı çalıştırın:
   ```bash
   npm run dev
   ```

Uygulama `http://localhost:3000` adresinde çalışacaktır.

## Yapı

- `components/` - Yeniden kullanılabilir bileşenler
- `pages/` - Ana sayfa bileşenleri
- `types.ts` - TypeScript tip tanımlamaları
- `constants.ts` - Sabit veriler ve mock veriler



