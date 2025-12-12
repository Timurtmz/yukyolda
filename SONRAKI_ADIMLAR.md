# 🎯 Backend Çalışıyor - Sonraki Adımlar

Backend sunucunuz `http://localhost:5000` adresinde çalışıyor! Şimdi yapmanız gerekenler:

## ✅ 1. Backend'i Test Edin

### Tarayıcıda Test:
1. Tarayıcınızda şu adrese gidin: `http://localhost:5000/health`
2. Şunu görmelisiniz: `{"status":"OK","message":"YükYolda API çalışıyor"}`

### API Endpoint'lerini Test:
- `http://localhost:5000/api/jobs` - İş listesi (şimdilik placeholder)
- `http://localhost:5000/api/auth/register` - Kayıt (şimdilik placeholder)

## ✅ 2. Frontend'i Backend'e Bağlayın

### Adım 1: .env.local Dosyasını Güncelleme

`.env.local` dosyasını açın ve şunu ekleyin:
```env
VITE_API_URL=http://localhost:5000/api
```

**PowerShell ile:**
```powershell
notepad .env.local
```

Dosya şu şekilde olmalı:
```env
GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY_HERE
GEMINI_API_KEY=PLACEHOLDER_API_KEY
VITE_API_URL=http://localhost:5000/api
```

### Adım 2: API Service Kullanımı

`services/api.ts` dosyası oluşturuldu. Artık frontend'den backend'e bağlanabilirsiniz.

**Örnek kullanım:**
```typescript
import { jobsApi } from '../services/api';

// İşleri getir
const jobs = await jobsApi.getAll();
```

## ✅ 3. Backend Endpoint'lerini Geliştirin

Şu anda endpoint'ler placeholder. Gerçek işlevsellik eklemek için:

### Öncelikli Endpoint'ler:

1. **GET /api/jobs** - İş listesi
   - `backend/src/routes/jobs.ts` dosyasını düzenleyin
   - MongoDB'den işleri çekin

2. **POST /api/auth/register** - Kayıt
   - `backend/src/routes/auth.ts` dosyasını düzenleyin
   - Kullanıcı kaydı yapın

3. **POST /api/auth/login** - Giriş
   - JWT token oluşturun
   - Kullanıcıyı doğrulayın

## ✅ 4. MongoDB Bağlantısını Kontrol Edin

Backend konsolunda şunu görmelisiniz:
```
✅ MongoDB bağlandı
🚀 Server 5000 portunda çalışıyor
```

Eğer MongoDB hatası görüyorsanız:
- MongoDB Atlas kullanıyorsanız connection string'i kontrol edin
- Local MongoDB kullanıyorsanız MongoDB'nin çalıştığından emin olun

## ✅ 5. Frontend'de Mock Verileri Değiştirin

Şu anda `constants.ts` dosyasında mock veriler var. Bunları gerçek API çağrılarıyla değiştirin:

**Örnek - JobSearch.tsx:**
```typescript
import { jobsApi } from '../services/api';
import { useState, useEffect } from 'react';

const [jobs, setJobs] = useState([]);

useEffect(() => {
  jobsApi.getAll().then(data => {
    setJobs(data);
  });
}, []);
```

## ✅ 6. CORS Kontrolü

Backend'de CORS zaten aktif (`app.use(cors())`). Eğer CORS hatası alırsanız:

`backend/src/server.ts` dosyasında:
```typescript
app.use(cors({
  origin: 'http://localhost:3000', // Frontend URL'iniz
  credentials: true
}));
```

## 📋 Hızlı Test Komutları

### Backend Health Check:
```powershell
# PowerShell'de:
Invoke-WebRequest -Uri "http://localhost:5000/health"
```

### API Endpoint Test:
```powershell
Invoke-WebRequest -Uri "http://localhost:5000/api/jobs"
```

## 🎯 Öncelik Sırası

1. ✅ Backend çalışıyor (TAMAMLANDI)
2. ⏭️ `.env.local` dosyasına `VITE_API_URL` ekleyin
3. ⏭️ Backend endpoint'lerini geliştirin (jobs, auth)
4. ⏭️ Frontend'de mock verileri API çağrılarıyla değiştirin
5. ⏭️ Authentication sistemi kurun
6. ⏭️ Gerçek verilerle test edin

## 🐛 Sorun Giderme

### "Cannot connect to backend" hatası
- Backend'in çalıştığından emin olun (`npm run dev` backend klasöründe)
- Port 5000'in başka bir uygulama tarafından kullanılmadığından emin olun

### CORS hatası
- Backend'de CORS middleware'inin aktif olduğundan emin olun
- Frontend URL'ini backend CORS ayarlarına ekleyin

### MongoDB bağlantı hatası
- `.env` dosyasındaki `MONGODB_URI` değerini kontrol edin
- MongoDB Atlas kullanıyorsanız IP whitelist'e ekleyin (0.0.0.0/0 tüm IP'ler için)

## 📚 Yardımcı Dosyalar

- `BACKEND_API_REHBER.md` - Detaylı backend geliştirme rehberi
- `API_ENTEGRASYON.md` - API entegrasyon detayları
- `services/api.ts` - API service dosyası (oluşturuldu)

## 🎉 Sonraki Adım

`.env.local` dosyasını güncelleyip frontend'i yeniden başlatın:
```powershell
# Frontend'i durdurun (Ctrl+C)
# Sonra tekrar başlatın:
npm run dev
```

Artık frontend ve backend birlikte çalışıyor! 🚀


