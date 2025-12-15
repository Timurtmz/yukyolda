# 🚀 Backend Deploy - Gerçek URL Alma

Frontend için backend'in gerçek URL'ine ihtiyacınız var. Backend'i deploy edelim:

## 🎯 Hızlı Yol: Railway (Önerilen - Ücretsiz)

### Adım 1: Railway'a Giriş

1. **Railway'a gidin:**
   - https://railway.app adresine gidin
   - "Start a New Project" tıklayın
   - GitHub ile giriş yapın

### Adım 2: Backend Deploy

1. **"Deploy from GitHub repo" seçin**
   - GitHub repo'nuzu seçin (yukyolda)
   - "Deploy Now" tıklayın

2. **Root Directory Ayarlayın:**
   - Deploy olduktan sonra "Settings" sekmesine gidin
   - "Root Directory" bölümüne `backend` yazın
   - "Save" tıklayın

3. **Railway otomatik yeniden deploy eder**

### Adım 3: Environment Variables

1. **"Variables" sekmesine gidin**
2. **Şunları ekleyin:**
   ```
   MONGODB_URI = your-mongodb-uri
   JWT_SECRET = your-secret-key-here
   PORT = 5000
   NODE_ENV = production
   ```

### Adım 4: Backend URL'ini Alın

1. **"Settings" > "Networking" sekmesine gidin**
2. **"Generate Domain" tıklayın**
3. **Backend URL'iniz hazır!**
   - Örnek: `https://yukyolda-backend-production.up.railway.app`

## 🔧 Alternatif: Render (Ücretsiz)

### Adım 1: Render'e Giriş

1. **Render'e gidin:**
   - https://render.com adresine gidin
   - "Get Started for Free" > GitHub ile giriş

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
```

### Adım 4: Deploy

1. **"Create Web Service" tıklayın**
2. **Deploy tamamlanınca URL alın:**
   - Örnek: `https://yukyolda-backend.onrender.com`

## 🔧 Alternatif: Vercel (Serverless Functions)

Vercel'de backend için:

1. **Vercel'e gidin:** https://vercel.com
2. **Aynı repo'yu import edin**
3. **Root Directory:** `backend` yazın
4. **Build Command:** `npm run build`
5. **Output Directory:** `dist`
6. **Start Command:** `npm run start`

## 📝 Frontend'de Kullanım

Backend URL'ini aldıktan sonra:

### Vercel'de (Frontend):

1. **Projenize gidin**
2. **Settings > Environment Variables**
3. **VITE_API_URL'i güncelleyin:**
   ```
   VITE_API_URL = https://yukyolda-backend.railway.app/api
   ```
   (Railway URL'iniz neyse onu yazın)

4. **"Save" tıklayın**
5. **Vercel otomatik yeniden deploy eder**

### Vercel CLI ile:

```powershell
vercel env add VITE_API_URL production
# URL'i girin: https://yukyolda-backend.railway.app/api
```

## ✅ Test

Backend deploy olduktan sonra:

1. **Health check:**
   ```
   https://your-backend-url.railway.app/health
   ```
   Yanıt: `{"status":"OK","message":"YükYolda API çalışıyor"}`

2. **API test:**
   ```
   https://your-backend-url.railway.app/api/jobs
   ```

## 🔧 CORS Ayarları

Backend'de frontend URL'ini ekleyin:

**backend/src/server.ts:**
```typescript
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://your-frontend-url.vercel.app'  // Frontend URL'iniz
  ],
  credentials: true
}));
```

## 🎯 Özet

1. ✅ Backend'i Railway/Render'da deploy edin
2. ✅ Backend URL'ini alın
3. ✅ Frontend'de `VITE_API_URL` environment variable'ını güncelleyin
4. ✅ CORS ayarlarını yapın
5. ✅ Test edin!

## 🆘 Sorun Giderme

### Backend deploy olmuyor:
- Root Directory'in `backend` olduğundan emin olun
- Build Command doğru mu kontrol edin
- Environment variables eksik olabilir

### CORS hatası:
- Backend'de frontend URL'ini CORS'a ekleyin
- `credentials: true` ekleyin

### MongoDB bağlantı hatası:
- MongoDB Atlas kullanıyorsanız IP whitelist'e `0.0.0.0/0` ekleyin
- Connection string'i kontrol edin

## 🚀 Hemen Başlayın!

1. Railway'a gidin: https://railway.app
2. GitHub ile giriş yapın
3. Repo'yu deploy edin
4. Backend URL'ini alın
5. Frontend'de güncelleyin!

5 dakikada backend yayında! 🎉



