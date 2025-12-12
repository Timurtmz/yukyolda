# API Entegrasyon Rehberi

## .env.local Dosyası Ayarları

`.env.local` dosyanız şu şekilde olmalı:

```env
# Google Maps API
GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY_HERE

# Gemini AI (Gelecekte kullanılacak)
GEMINI_API_KEY=PLACEHOLDER_API_KEY

# Backend API URL (Backend hazır olduğunda)
VITE_API_URL=http://localhost:5000/api
```

## 1. .env.local Dosyasını Oluşturma/Güncelleme

### Windows PowerShell ile:
```powershell
cd C:\Users\ahmed\Desktop\YUKYOLDA
notepad .env.local
```

Notepad açıldığında yukarıdaki içeriği yapıştırın ve kaydedin.

### Veya Manuel Olarak:
1. Proje klasöründe `.env.local` dosyasını oluşturun
2. İçine yukarıdaki içeriği yapıştırın
3. `YOUR_GOOGLE_MAPS_API_KEY_HERE` kısmını gerçek API key'inizle değiştirin

## 2. Google Maps API Key Alma

Detaylı rehber için `GOOGLE_MAPS_REHBER.md` dosyasına bakın.

**Kısa Özet:**
1. https://console.cloud.google.com/ adresine gidin
2. Yeni proje oluşturun
3. Maps JavaScript API, Directions API, Places API'lerini etkinleştirin
4. API key oluşturun
5. `.env.local` dosyasına ekleyin

## 3. Vite Config Güncellemesi

`vite.config.ts` dosyası zaten güncellendi. Artık `GOOGLE_MAPS_API_KEY` değişkenini kullanabilirsiniz.

## 4. Google Maps Component Kullanımı

`components/GoogleMap.tsx` dosyası oluşturuldu. Kullanım örneği:

```tsx
import { GoogleMap } from '../components/GoogleMap';

// RouteView.tsx içinde:
<GoogleMap
  origin="İstanbul, Türkiye"
  destination="Ankara, Türkiye"
  routeColor="#f97316"
  darkMode={true}
  onRouteCalculated={(distance, duration) => {
    console.log(`Mesafe: ${distance} km, Süre: ${duration} dakika`);
  }}
/>
```

## 5. Backend API Hazır Olduğunda

Backend API hazır olduğunda:

1. **API Service oluşturun:** `src/services/api.ts`
2. **Constants'a ekleyin:**
   ```typescript
   const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
   ```
3. **Mock verileri gerçek API çağrılarıyla değiştirin**

Detaylı rehber için `BACKEND_API_REHBER.md` dosyasına bakın.

## 6. Test Etme

### Google Maps Test:
1. `.env.local` dosyasına API key'i ekleyin
2. `npm run dev` ile projeyi çalıştırın
3. Rota sayfasına gidin
4. Harita görünmeli

### Backend API Test:
1. Backend'i çalıştırın (`npm run dev` backend klasöründe)
2. Frontend'den API çağrıları yapın
3. Tarayıcı konsolunda (F12) hataları kontrol edin

## Sorun Giderme

### "Google Maps API key bulunamadı" hatası
- `.env.local` dosyasının proje kök dizininde olduğundan emin olun
- Dosya adının tam olarak `.env.local` olduğundan emin olun (nokta ile başlıyor)
- Sunucuyu yeniden başlatın (`npm run dev`)

### API key çalışmıyor
- Google Cloud Console'da API'lerin etkinleştirildiğini kontrol edin
- API key kısıtlamalarını kontrol edin (localhost için izin verildi mi?)
- Faturalandırma hesabının bağlı olduğunu kontrol edin

### CORS hatası (Backend'den)
- Backend'de CORS middleware'inin eklendiğinden emin olun
- Frontend URL'ini backend CORS ayarlarına ekleyin


