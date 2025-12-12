# Backend Test Rehberi

## ✅ Backend Çalışıyor!

Backend sunucunuz `http://localhost:5000` adresinde çalışıyor.

## 🧪 Hızlı Testler

### 1. Health Check Test
Tarayıcıda açın: `http://localhost:5000/health`

Beklenen yanıt:
```json
{
  "status": "OK",
  "message": "YükYolda API çalışıyor"
}
```

### 2. API Endpoint Testleri

**PowerShell'de test edin:**
```powershell
# Health check
Invoke-WebRequest -Uri "http://localhost:5000/health" | Select-Object -ExpandProperty Content

# Jobs endpoint (placeholder)
Invoke-WebRequest -Uri "http://localhost:5000/api/jobs" | Select-Object -ExpandProperty Content

# Auth endpoint (placeholder)
Invoke-WebRequest -Uri "http://localhost:5000/api/auth/register" -Method POST -ContentType "application/json" -Body '{}' | Select-Object -ExpandProperty Content
```

### 3. MongoDB Bağlantı Kontrolü

Backend konsolunda şunu görmelisiniz:
```
✅ MongoDB bağlandı
🚀 Server 5000 portunda çalışıyor
📍 Health check: http://localhost:5000/health
```

Eğer MongoDB hatası görüyorsanız:
- MongoDB Atlas kullanıyorsanız: Connection string'i kontrol edin
- Local MongoDB: MongoDB servisinin çalıştığından emin olun

## 📋 Sonraki Adımlar

1. ✅ Backend çalışıyor
2. ⏭️ `.env.local` dosyasına `VITE_API_URL=http://localhost:5000/api` ekleyin
3. ⏭️ Frontend'i yeniden başlatın
4. ⏭️ Backend endpoint'lerini geliştirin

Detaylı rehber için `SONRAKI_ADIMLAR.md` dosyasına bakın.


