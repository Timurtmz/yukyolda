# 🚀 YükYolda - Hızlı Başlangıç Rehberi

## ✅ Tamamlanan İşler

1. ✅ Proje dosyaları oluşturuldu
2. ✅ Google Maps component hazırlandı
3. ✅ Backend API rehberleri hazırlandı
4. ✅ `.env.local` dosyası oluşturuldu

## 📋 Şimdi Yapmanız Gerekenler

### 1. Node.js Kurulumu (Eğer henüz kurmadıysanız)

**Detaylı rehber:** `NODEJS_KURULUM.md`

**Kısa özet:**
1. https://nodejs.org/ adresinden LTS versiyonunu indirin
2. Kurulumu yapın (PATH'e eklemeyi unutmayın!)
3. Tüm terminal pencerelerini kapatın
4. Yeni terminal açıp test edin: `node --version`

### 2. .env.local Dosyasını Güncelleme

`.env.local` dosyasını açın ve şu şekilde güncelleyin:

```env
# Google Maps API Key (Gerekli - Harita için)
GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY_HERE

# Gemini AI (Gelecekte kullanılacak - Şimdilik placeholder)
GEMINI_API_KEY=PLACEHOLDER_API_KEY

# Backend API URL (Backend hazır olduğunda)
VITE_API_URL=http://localhost:5000/api
```

**Nasıl güncellerim?**
- PowerShell: `notepad .env.local`
- Veya dosyaya çift tıklayıp Notepad ile açın

### 3. Google Maps API Key Alma

**Detaylı rehber:** `GOOGLE_MAPS_REHBER.md`

**Kısa özet (5 dakika):**
1. https://console.cloud.google.com/ adresine gidin
2. Yeni proje oluşturun: "YükYolda"
3. Şu API'leri etkinleştirin:
   - Maps JavaScript API
   - Directions API
   - Places API
   - Geocoding API
4. Credentials > Create Credentials > API Key
5. API key'i kopyalayıp `.env.local` dosyasına yapıştırın
6. API key'i kısıtlayın (HTTP referrers: `localhost:3000/*`)

### 4. Projeyi Çalıştırma

```powershell
# Proje klasörüne gidin
cd C:\Users\ahmed\Desktop\YUKYOLDA

# Bağımlılıkları yükleyin (ilk kez)
npm install

# Projeyi başlatın
npm run dev
```

Tarayıcıda `http://localhost:3000` adresi açılacak.

### 5. Backend API (İsteğe Bağlı - Şimdilik Mock Veriler Çalışıyor)

**Detaylı rehber:** `BACKEND_API_REHBER.md`

**Önerilen yol:** Supabase kullanın (en kolay)
1. https://supabase.com/ adresine gidin
2. Ücretsiz hesap oluşturun
3. Yeni proje oluşturun
4. Tabloları oluşturun (rehberdeki şemaya göre)
5. API key'leri alın
6. Frontend'i backend'e bağlayın

## 📁 Dosya Yapısı

```
YUKYOLDA/
├── components/
│   ├── Layout.tsx          # Ana layout (header, navigasyon)
│   └── GoogleMap.tsx        # Google Maps component
├── pages/
│   ├── Home.tsx            # Ana sayfa
│   ├── JobSearch.tsx       # Yük arama sayfası
│   ├── RouteView.tsx      # Rota görüntüleme
│   └── Profile.tsx         # Profil sayfası
├── .env.local              # API key'ler (GÜNCELLEMENİZ GEREKİYOR!)
├── package.json
├── vite.config.ts
└── [diğer dosyalar]
```

## 🎯 Sonraki Adımlar

1. ✅ Node.js kurulumu
2. ✅ `.env.local` dosyasını güncelleme
3. ✅ Google Maps API key alma
4. ✅ `npm install` ve `npm run dev`
5. ⏭️ Backend API oluşturma (Supabase önerilir)
6. ⏭️ Gerçek verilerle test etme

## 📚 Yardımcı Dosyalar

- `NODEJS_KURULUM.md` - Node.js kurulum rehberi
- `GOOGLE_MAPS_REHBER.md` - Google Maps API key alma rehberi
- `BACKEND_API_REHBER.md` - Backend API geliştirme rehberi
- `API_ENTEGRASYON.md` - API entegrasyon detayları
- `KURULUM.md` - Genel kurulum rehberi

## ❓ Sorun mu Yaşıyorsunuz?

### npm komutu bulunamıyor
→ Node.js kurulumunu kontrol edin, terminali yeniden açın

### Google Maps görünmüyor
→ `.env.local` dosyasında API key'in doğru olduğundan emin olun
→ Tarayıcı konsolunda (F12) hataları kontrol edin

### Port 3000 zaten kullanılıyor
→ `vite.config.ts` dosyasında port numarasını değiştirin

## 🎉 Başarılar!

Projeniz hazır! Adım adım ilerleyin ve sorun yaşarsanız rehber dosyalarına bakın.


