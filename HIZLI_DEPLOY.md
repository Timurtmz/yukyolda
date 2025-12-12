# ⚡ Hızlı Deployment - 5 Dakikada Site Yayında!

Build başarılı! Şimdi siteyi yayınlayalım.

## ✅ Build Durumu

- ✅ Frontend build: `dist` klasörü hazır
- ✅ Backend build: `backend/dist` klasörü hazır

## 🚀 Vercel ile Hızlı Deploy (Önerilen)

### Adım 1: GitHub'a Yükleyin (2 dakika)

```powershell
# Git kurulu değilse: https://git-scm.com/download/win
# Detaylı kurulum: GIT_KURULUM.md dosyasına bakın

# İlk kez yapıyorsanız:
git init
git add .
git commit -m "Ready for deployment"

# GitHub'da yeni repo oluşturun:
# 1. https://github.com/new adresine gidin
# 2. Repo adı: yukyolda
# 3. Public veya Private seçin
# 4. "Create repository" tıklayın

# Sonra:
git remote add origin https://github.com/KULLANICIADI/yukyolda.git
git branch -M main
git push -u origin main
```

**Not:** `KULLANICIADI` yerine GitHub kullanıcı adınızı yazın.

### Adım 2: Vercel'de Deploy (3 dakika)

1. **Vercel'e Giriş:**
   - https://vercel.com adresine gidin
   - "Sign Up" > GitHub ile giriş yapın

2. **Proje Ekle:**
   - "Add New Project" tıklayın
   - GitHub repo'nuzu seçin (yukyolda)
   - "Import" tıklayın

3. **Ayarları Yapın:**
   - **Framework Preset:** Vite (otomatik algılanır)
   - **Root Directory:** `.` (kök dizin)
   - **Build Command:** `npm run build` (otomatik)
   - **Output Directory:** `dist` (otomatik)
   - **Install Command:** `npm install` (otomatik)

4. **Environment Variables Ekleyin:**
   - "Environment Variables" bölümüne tıklayın
   - Şunları ekleyin:
     ```
     VITE_API_URL = http://localhost:5000/api
     VITE_GOOGLE_MAPS_API_KEY = your-google-maps-key
     ```
   - "Save" tıklayın

5. **Deploy!**
   - "Deploy" butonuna tıklayın
   - 1-2 dakika bekleyin
   - **Site yayında!** 🎉

**Site URL'iniz:** `https://yukyolda.vercel.app` (veya benzer)

## 🔧 Backend Deploy (Railway - Önerilen)

Frontend yayında! Şimdi backend'i deploy edelim:

1. **Railway'a Giriş:**
   - https://railway.app adresine gidin
   - "Start a New Project" > GitHub ile giriş

2. **Backend Deploy:**
   - "Deploy from GitHub repo" seçin
   - Repo'nuzu seçin
   - "Settings" > "Root Directory" > `backend` yazın
   - "Deploy" tıklayın

3. **Environment Variables:**
   - "Variables" sekmesine gidin
   - Şunları ekleyin:
     ```
     MONGODB_URI = your-mongodb-uri
     JWT_SECRET = your-secret-key
     PORT = 5000
     ```

4. **Backend URL'ini Alın:**
   - Railway'de backend URL'iniz görünecek
   - Örnek: `https://yukyolda-backend.railway.app`

5. **Frontend'i Güncelleyin:**
   - Vercel'de environment variable'ı güncelleyin:
     ```
     VITE_API_URL = https://yukyolda-backend.railway.app/api
     ```
   - Vercel otomatik yeniden deploy eder

## 📝 Alternatif: Render (Tek Platform)

Hem frontend hem backend için:

1. **Render'e Giriş:**
   - https://render.com adresine gidin
   - GitHub ile giriş

2. **Frontend (Static Site):**
   - "New" > "Static Site"
   - Repo seçin
   - Build: `npm run build`
   - Publish: `dist`

3. **Backend (Web Service):**
   - "New" > "Web Service"
   - Repo seçin
   - Root: `backend`
   - Build: `npm run build`
   - Start: `npm run start`

## ✅ Deployment Sonrası Kontrol

1. ✅ Site açılıyor mu?
2. ✅ API çalışıyor mu? (Backend URL + `/health`)
3. ✅ Google Maps görünüyor mu?
4. ✅ Environment variables doğru mu?

## 🎉 Başarılı!

Site yayında! Artık:
- Frontend: `https://yukyolda.vercel.app`
- Backend: `https://yukyolda-backend.railway.app`

## 🆘 Sorun mu Var?

### Build hatası:
- GitHub'a yüklerken `.env.local` dosyasını eklemeyin (güvenlik)
- Environment variables'ı Vercel/Render'da ekleyin

### API çalışmıyor:
- Backend URL'ini kontrol edin
- CORS ayarlarını kontrol edin
- Environment variables doğru mu?

### Site açılmıyor:
- Build başarılı mı kontrol edin
- Vercel logs'a bakın
- Environment variables eksik olabilir

## 📚 Detaylı Rehber

- `PRODUCTION_BUILD.md` - Build detayları
- `DEPLOYMENT_REHBER.md` - Detaylı deployment

Sorularınız varsa sorun! 🚀

