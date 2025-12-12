# Google Maps API Entegrasyon Rehberi

## 1. Google Maps API Key Alma

### Adım 1: Google Cloud Console'a Giriş
1. **Tarayıcınızda şu adrese gidin:**
   ```
   https://console.cloud.google.com/
   ```

2. **Google hesabınızla giriş yapın**
   - Eğer hesabınız yoksa oluşturun

### Adım 2: Yeni Proje Oluşturma
1. Üst menüden **"Select a project"** tıklayın
2. **"New Project"** butonuna tıklayın
3. Proje adını girin: `YükYolda` (veya istediğiniz bir isim)
4. **"Create"** butonuna tıklayın
5. Oluşturulan projeyi seçin

### Adım 3: API'leri Etkinleştirme
1. Sol menüden **"APIs & Services" > "Library"** seçin
2. Şu API'leri arayıp etkinleştirin:
   - **Maps JavaScript API** - Harita görüntüleme için
   - **Directions API** - Rota hesaplama için
   - **Places API** - Yer arama için
   - **Geocoding API** - Adres dönüştürme için

3. Her API için:
   - API adını arayın
   - **"Enable"** butonuna tıklayın

### Adım 4: API Key Oluşturma
1. Sol menüden **"APIs & Services" > "Credentials"** seçin
2. Üstte **"+ CREATE CREDENTIALS"** tıklayın
3. **"API key"** seçin
4. Oluşturulan API key'i kopyalayın

### Adım 5: API Key Kısıtlamaları (Önemli!)
1. Oluşturulan API key'in yanındaki **kalem ikonuna** tıklayın
2. **"Application restrictions"** bölümünde:
   - **"HTTP referrers (web sites)"** seçin
   - **"Website restrictions"** altına şunları ekleyin:
     ```
     localhost:3000/*
     http://localhost:3000/*
     https://yourdomain.com/*
     ```
3. **"API restrictions"** bölümünde:
   - **"Restrict key"** seçin
   - Sadece şu API'leri seçin:
     - Maps JavaScript API
     - Directions API
     - Places API
     - Geocoding API
4. **"Save"** butonuna tıklayın

### Adım 6: Faturalandırma Ayarları
1. Sol menüden **"Billing"** seçin
2. Faturalandırma hesabı bağlayın (kredi kartı gerekli)
3. **Not:** Google Maps her ay $200 ücretsiz kredi verir (çoğu küçük proje için yeterli)

## 2. Projeye Entegrasyon

### Adım 1: .env.local Dosyasını Güncelleme
`.env.local` dosyasını açın ve şunu ekleyin:
```
GOOGLE_MAPS_API_KEY=YOUR_API_KEY_HERE
```

### Adım 2: Google Maps Component Kullanımı
Projede `components/GoogleMap.tsx` dosyası oluşturuldu. Bu component'i sayfalarınızda kullanabilirsiniz.

### Adım 3: Kullanım Örnekleri

**RouteView.tsx'te:**
```tsx
import { GoogleMap } from '../components/GoogleMap';

// Component içinde:
<GoogleMap
  origin="İstanbul, Türkiye"
  destination="Ankara, Türkiye"
  routeColor="#f97316" // Turuncu renk
  darkMode={true}
/>
```

**Home.tsx'te (Mini Harita):**
```tsx
<GoogleMap
  origin="İstanbul"
  destination="Ankara"
  height="160px"
  showControls={false}
  darkMode={true}
/>
```

## 3. Maliyet Bilgisi

Google Maps API ücretleri (2024):
- **Maps JavaScript API:** İlk 28,000 yükleme ücretsiz, sonrası $7/1000 yükleme
- **Directions API:** İlk 40,000 istek ücretsiz, sonrası $5/1000 istek
- **Places API:** İlk 17,000 istek ücretsiz, sonrası değişken

**Aylık $200 ücretsiz kredi** çoğu küçük-orta ölçekli proje için yeterlidir.

## 4. Sorun Giderme

### "This page can't load Google Maps correctly" hatası
- API key'in doğru olduğundan emin olun
- API'lerin etkinleştirildiğini kontrol edin
- API key kısıtlamalarını kontrol edin (localhost için izin verildi mi?)

### Harita görünmüyor
- Tarayıcı konsolunu açın (F12) ve hataları kontrol edin
- API key'in `.env.local` dosyasında doğru yazıldığından emin olun
- Sunucuyu yeniden başlatın (`npm run dev`)

### Rota çizilmiyor
- Directions API'nin etkinleştirildiğinden emin olun
- Faturalandırma hesabının bağlı olduğunu kontrol edin

## 5. Güvenlik Notları

⚠️ **ÖNEMLİ:** API key'i asla GitHub'a yüklemeyin!
- `.env.local` dosyası `.gitignore` içinde olmalı
- Production'da API key kısıtlamalarını sıkılaştırın
- Sadece gerekli API'lere izin verin


