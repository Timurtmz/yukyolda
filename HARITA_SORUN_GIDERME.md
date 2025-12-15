# 🗺️ Harita Yüklenmiyor - Sorun Giderme

Harita yüklenmiyorsa şu adımları takip edin:

## ✅ 1. Google Maps API Key Kontrolü

### Yerel Geliştirme (.env.local):

1. **`.env.local` dosyasını kontrol edin:**
   ```powershell
   notepad .env.local
   ```

2. **Şu satırın olduğundan emin olun:**
   ```env
   VITE_GOOGLE_MAPS_API_KEY=YOUR_ACTUAL_API_KEY_HERE
   ```

3. **API key'iniz yoksa:**
   - `GOOGLE_MAPS_REHBER.md` dosyasına bakın
   - Google Cloud Console'dan API key alın

### Production (Vercel):

1. **Vercel Dashboard'a gidin:**
   ```
   https://vercel.com/[proje-adi]/settings/environment-variables
   ```

2. **`VITE_GOOGLE_MAPS_API_KEY` değişkenini kontrol edin:**
   - Var mı?
   - Değeri doğru mu?
   - Production, Preview, Development için ekli mi?

3. **Yoksa ekleyin:**
   - "Add New" tıklayın
   - Key: `VITE_GOOGLE_MAPS_API_KEY`
   - Value: Google Maps API key'iniz
   - Environments: Production, Preview, Development seçin
   - "Save" tıklayın

4. **Redeploy yapın:**
   - "Deployments" sekmesine gidin
   - Son deployment'a tıklayın
   - "Redeploy" tıklayın

## ✅ 2. Google Maps API'lerini Kontrol Edin

Google Cloud Console'da şu API'lerin etkinleştirildiğinden emin olun:

1. **Google Cloud Console'a gidin:**
   ```
   https://console.cloud.google.com/apis/library
   ```

2. **Şu API'leri kontrol edin:**
   - ✅ Maps JavaScript API
   - ✅ Directions API
   - ✅ Places API
   - ✅ Geocoding API

3. **Etkinleştirilmemişse:**
   - API adını arayın
   - "Enable" butonuna tıklayın

## ✅ 3. API Key Kısıtlamaları

1. **Google Cloud Console > Credentials:**
   ```
   https://console.cloud.google.com/apis/credentials
   ```

2. **API key'inize tıklayın**

3. **"Application restrictions" kontrol edin:**
   - **HTTP referrers (web sites)** seçili olmalı
   - Şu URL'ler ekli olmalı:
     ```
     localhost:3000/*
     localhost:5173/*
     http://localhost:3000/*
     https://your-site.vercel.app/*
     https://*.vercel.app/*
     ```

4. **"API restrictions" kontrol edin:**
   - "Restrict key" seçili olmalı
   - Şu API'ler seçili olmalı:
     - Maps JavaScript API
     - Directions API
     - Places API
     - Geocoding API

## ✅ 4. Tarayıcı Konsolunu Kontrol Edin

1. **Tarayıcıda F12 tuşuna basın**
2. **Console sekmesine gidin**
3. **Hataları kontrol edin:**

### "Google Maps API key bulunamadı" hatası:
- Environment variable eksik veya yanlış

### "This page can't load Google Maps correctly" hatası:
- API key yanlış veya kısıtlamaları yanlış
- API'ler etkinleştirilmemiş

### "RefererNotAllowedMapError" hatası:
- API key kısıtlamalarında URL eksik
- Domain'i ekleyin

## ✅ 5. RouteView Sayfası Güncellendi

`RouteView.tsx` dosyası güncellendi ve artık gerçek Google Maps kullanıyor.

**Değişiklikler:**
- ✅ GoogleMap component entegre edildi
- ✅ Simüle edilmiş harita kaldırıldı
- ✅ Gerçek rota hesaplama eklendi

## ✅ 6. Test Etme

### Yerel Geliştirme:

1. **Sunucuyu yeniden başlatın:**
   ```powershell
   # Durdurun (Ctrl+C)
   npm run dev
   ```

2. **Rota sayfasına gidin:**
   ```
   http://localhost:3000
   ```
   Rota sekmesine tıklayın

3. **Harita görünmeli**

### Production:

1. **Vercel'de redeploy yapın**
2. **Siteyi açın**
3. **Rota sayfasına gidin**
4. **Harita görünmeli**

## 🆘 Hala Çalışmıyorsa

### Adım 1: API Key'i Test Edin

Tarayıcıda şu URL'i açın (API key'inizi ekleyin):
```
https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap
```

Eğer hata görüyorsanız, API key yanlış veya kısıtlamaları yanlış.

### Adım 2: Faturalandırma Kontrolü

Google Cloud Console'da:
1. "Billing" sekmesine gidin
2. Faturalandırma hesabı bağlı mı kontrol edin
3. Bağlı değilse bağlayın (kredi kartı gerekli)

### Adım 3: Console Logları

`components/GoogleMap.tsx` dosyasında console.log ekleyin:

```typescript
console.log('API Key:', import.meta.env.VITE_GOOGLE_MAPS_API_KEY);
```

Tarayıcı konsolunda API key görünüyor mu kontrol edin.

## 📝 Checklist

- [ ] `.env.local` dosyasında `VITE_GOOGLE_MAPS_API_KEY` var mı?
- [ ] Vercel'de environment variable ekli mi?
- [ ] Google Maps API'leri etkinleştirildi mi?
- [ ] API key kısıtlamaları doğru mu?
- [ ] Faturalandırma hesabı bağlı mı?
- [ ] RouteView.tsx güncellendi mi?
- [ ] Sunucu yeniden başlatıldı mı?

## 🎯 Hızlı Çözüm

1. **Google Maps API key alın** (yoksa)
2. **Vercel'de environment variable ekleyin**
3. **Redeploy yapın**
4. **Test edin!**

Sorun devam ederse, tarayıcı konsolundaki hata mesajını paylaşın!



