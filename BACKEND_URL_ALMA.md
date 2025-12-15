# 🌐 Backend Gerçek URL Alma Rehberi

Frontend için backend'in gerçek URL'ine ihtiyacınız var. İşte adım adım:

## 🚀 Hızlı Yol: Railway (5 Dakika)

### Adım 1: Railway'a Giriş

1. **Railway'a gidin:**
   ```
   https://railway.app
   ```
2. **"Start a New Project" tıklayın**
3. **GitHub ile giriş yapın**

### Adım 2: Backend Deploy

1. **"Deploy from GitHub repo" seçin**
2. **GitHub repo'nuzu seçin** (yukyolda)
3. **"Deploy Now" tıklayın**

### Adım 3: Root Directory Ayarla

1. **Deploy olduktan sonra "Settings" sekmesine gidin**
2. **"Root Directory" bölümüne `backend` yazın**
3. **"Save" tıklayın**
4. **Railway otomatik yeniden deploy eder**

### Adım 4: Environment Variables

1. **"Variables" sekmesine gidin**
2. **Şunları ekleyin:**
   ```
   MONGODB_URI = your-mongodb-connection-string
   JWT_SECRET = your-secret-key-here
   PORT = 5000
   NODE_ENV = production
   FRONTEND_URL = https://your-frontend-url.vercel.app
   ```

### Adım 5: Backend URL'ini Alın

1. **"Settings" > "Networking" sekmesine gidin**
2. **"Generate Domain" tıklayın**
3. **Backend URL'iniz hazır!**
   - Örnek: `https://yukyolda-backend-production.up.railway.app`

**Bu URL'i kopyalayın!** Frontend'de kullanacaksınız.

## 📝 Frontend'de Kullanım

### Vercel'de (Web Arayüzü):

1. **Vercel dashboard'a gidin**
2. **Projenize tıklayın**
3. **"Settings" > "Environment Variables"**
4. **VITE_API_URL'i bulun veya ekleyin:**
   ```
   VITE_API_URL = https://yukyolda-backend-production.up.railway.app/api
   ```
   (Railway'dan aldığınız URL + `/api`)
5. **"Save" tıklayın**
6. **"Redeploy" tıklayın** (otomatik olabilir)

### Vercel CLI ile:

```powershell
vercel env add VITE_API_URL production
# Sorduğunda Railway URL'inizi girin:
# https://yukyolda-backend-production.up.railway.app/api
```

## ✅ Test

Backend URL'inizi test edin:

1. **Health Check:**
   ```
   https://your-backend-url.railway.app/health
   ```
   Yanıt: `{"status":"OK","message":"YükYolda API çalışıyor"}`

2. **Tarayıcıda açın ve kontrol edin**

## 🔧 Alternatif: Render

### Adım 1: Render'e Giriş

1. **Render'e gidin:** https://render.com
2. **"Get Started for Free" > GitHub ile giriş**

### Adım 2: Web Service Oluştur

1. **"New" > "Web Service"**
2. **GitHub repo'nuzu seçin**
3. **Ayarlar:**
   - Name: `yukyolda-backend`
   - Root Directory: `backend`
   - Environment: `Node`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm run start`

### Adım 3: Environment Variables

```
MONGODB_URI = your-mongodb-uri
JWT_SECRET = your-secret-key
PORT = 5000
FRONTEND_URL = https://your-frontend-url.vercel.app
```

### Adım 4: Deploy

1. **"Create Web Service" tıklayın**
2. **Deploy tamamlanınca URL alın:**
   - Örnek: `https://yukyolda-backend.onrender.com`

## 📋 Özet

1. ✅ Backend'i Railway/Render'da deploy edin
2. ✅ Backend URL'ini alın (örn: `https://yukyolda-backend.railway.app`)
3. ✅ Frontend'de `VITE_API_URL` = `https://yukyolda-backend.railway.app/api`
4. ✅ CORS ayarları zaten güncellendi (backend/src/server.ts)
5. ✅ Test edin!

## 🎯 Hızlı Başlangıç

```powershell
# 1. Railway'a gidin: https://railway.app
# 2. GitHub ile giriş
# 3. Repo deploy edin
# 4. Root Directory: backend
# 5. URL'i alın
# 6. Frontend'de VITE_API_URL güncelleyin
```

## 🆘 Sorun Giderme

### Backend deploy olmuyor:
- Root Directory'in `backend` olduğundan emin olun
- Build Command: `npm install && npm run build`
- Start Command: `npm run start`

### CORS hatası:
- Backend'de `FRONTEND_URL` environment variable'ını ekleyin
- Frontend URL'inizi CORS'a ekleyin

### MongoDB bağlantı hatası:
- MongoDB Atlas kullanıyorsanız IP whitelist'e `0.0.0.0/0` ekleyin
- Connection string'i kontrol edin

## 🚀 Hemen Başlayın!

1. Railway'a gidin: https://railway.app
2. Backend'i deploy edin
3. URL'i alın
4. Frontend'de güncelleyin!

5 dakikada backend URL'iniz hazır! 🎉



