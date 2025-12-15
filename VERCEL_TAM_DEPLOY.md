# 🚀 Vercel'de Tam Deploy - Frontend + Backend

Vercel'de hem frontend hem backend deploy edelim. Tüm linkler ve adımlar:

## 📋 Gerekli Linkler

### Vercel Ana Sayfa:
```
https://vercel.com
```

### Vercel Dashboard (Giriş yaptıktan sonra):
```
https://vercel.com/dashboard
```

### Yeni Proje Ekleme:
```
https://vercel.com/new
```

### Environment Variables (Proje ayarları):
```
https://vercel.com/[proje-adi]/settings/environment-variables
```

## 🎯 Adım Adım: Frontend Deploy

### 1. Vercel'e Giriş
```
https://vercel.com
```
- "Sign Up" veya "Log In" tıklayın
- GitHub ile giriş yapın (önerilir)

### 2. Yeni Proje Ekle
```
https://vercel.com/new
```
- "Add New Project" tıklayın
- GitHub repo'nuzu seçin (yukyolda)
- "Import" tıklayın

### 3. Frontend Ayarları
- **Framework Preset:** Vite (otomatik algılanır)
- **Root Directory:** `.` (kök dizin - değiştirmeyin)
- **Build Command:** `npm run build` (otomatik)
- **Output Directory:** `dist` (otomatik)
- **Install Command:** `npm install` (otomatik)

### 4. Environment Variables Ekle
Proje ayarlarına gidin:
```
https://vercel.com/[proje-adi]/settings/environment-variables
```

**Şunları ekleyin:**
```
VITE_API_URL = http://localhost:5000/api
VITE_GOOGLE_MAPS_API_KEY = your-google-maps-key
```

**Not:** Backend deploy olduktan sonra `VITE_API_URL`'i güncelleyeceğiz.

### 5. Deploy!
- "Deploy" butonuna tıklayın
- 1-2 dakika bekleyin
- **Frontend URL'iniz:** `https://yukyolda.vercel.app` (veya benzer)

## 🔧 Adım Adım: Backend Deploy (Vercel)

### 1. Yeni Proje Ekle (Backend için)
```
https://vercel.com/new
```
- "Add New Project" tıklayın
- **Aynı GitHub repo'yu seçin** (yukyolda)
- "Import" tıklayın

### 2. Backend Ayarları
- **Framework Preset:** Other (veya Node.js)
- **Root Directory:** `backend` ⚠️ ÖNEMLİ!
- **Build Command:** `cd backend && npm install && npm run build`
- **Output Directory:** `backend/dist`
- **Install Command:** `cd backend && npm install`
- **Start Command:** `cd backend && npm run start`

### 3. Environment Variables (Backend)
Backend projesinin ayarlarına gidin:
```
https://vercel.com/[backend-proje-adi]/settings/environment-variables
```

**Şunları ekleyin:**
```
MONGODB_URI = your-mongodb-connection-string
JWT_SECRET = your-secret-key-here
NODE_ENV = production
PORT = 5000
FRONTEND_URL = https://yukyolda.vercel.app
```

### 4. Deploy!
- "Deploy" butonuna tıklayın
- Backend URL'iniz: `https://yukyolda-backend.vercel.app` (veya benzer)

### 5. Backend URL'ini Alın
Deploy olduktan sonra:
- Projenize gidin
- "Settings" > "Domains" sekmesine bakın
- Veya ana sayfada URL görünecek

## 🔄 Frontend'i Güncelle

### 1. Frontend Proje Ayarlarına Gidin
```
https://vercel.com/[frontend-proje-adi]/settings/environment-variables
```

### 2. VITE_API_URL'i Güncelleyin
- `VITE_API_URL` değişkenini bulun
- "Edit" tıklayın
- Değeri güncelleyin:
  ```
  https://yukyolda-backend.vercel.app/api
  ```
  (Backend URL'iniz + `/api`)
- "Save" tıklayın

### 3. Yeniden Deploy
- Vercel otomatik yeniden deploy eder
- Veya "Deployments" sekmesinden "Redeploy" yapabilirsiniz

## 📝 Alternatif: Tek Projede (Monorepo)

Vercel'de tek projede hem frontend hem backend:

### 1. Proje Ayarları
- Root Directory: `.` (kök dizin)
- Build Command: `npm run build` (frontend için)
- Output Directory: `dist`

### 2. Vercel.json Oluştur
Proje kök dizininde `vercel.json` oluşturun:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    },
    {
      "src": "backend/package.json",
      "use": "@vercel/node",
      "config": {
        "includeFiles": ["backend/dist/**"]
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "backend/dist/server.js"
    },
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

## ✅ Test

### Frontend:
```
https://yukyolda.vercel.app
```

### Backend Health Check:
```
https://yukyolda-backend.vercel.app/health
```
Yanıt: `{"status":"OK","message":"YükYolda API çalışıyor"}`

### Backend API:
```
https://yukyolda-backend.vercel.app/api/jobs
```

## 🎯 Özet Linkler

### Giriş ve Dashboard:
- **Ana Sayfa:** https://vercel.com
- **Dashboard:** https://vercel.com/dashboard
- **Yeni Proje:** https://vercel.com/new

### Proje Ayarları (Örnek):
- **Environment Variables:** `https://vercel.com/[proje-adi]/settings/environment-variables`
- **Domains:** `https://vercel.com/[proje-adi]/settings/domains`
- **Deployments:** `https://vercel.com/[proje-adi]/deployments`

## 🆘 Sorun Giderme

### Backend deploy olmuyor:
- Root Directory'in `backend` olduğundan emin olun
- Build Command doğru mu kontrol edin
- Start Command: `cd backend && npm run start`

### CORS hatası:
- Backend'de `FRONTEND_URL` environment variable'ını ekleyin
- Frontend URL'inizi CORS'a ekleyin

### Environment variables çalışmıyor:
- `VITE_` prefix'i frontend için gerekli
- Backend için prefix gerekmez
- Deploy sonrası yeniden build gerekebilir

## 🚀 Hızlı Başlangıç

1. **Frontend Deploy:**
   - https://vercel.com/new
   - Repo seçin
   - Deploy!

2. **Backend Deploy:**
   - https://vercel.com/new
   - Aynı repo, Root Directory: `backend`
   - Deploy!

3. **URL'leri Güncelle:**
   - Frontend'de `VITE_API_URL` = Backend URL + `/api`

## 🎉 Başarılı!

Artık:
- **Frontend:** `https://yukyolda.vercel.app`
- **Backend:** `https://yukyolda-backend.vercel.app`

Her şey Vercel'de! 🚀



