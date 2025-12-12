# 🌐 Site Yayınlama (Deployment) Rehberi

Siteyi yayınlamak için adım adım rehber:

## 📦 Önce Production Build Yapın

### Frontend Build:
```powershell
npm run build
```
Bu komut `dist` klasörü oluşturur.

### Backend Build:
```powershell
cd backend
npm run build
```
Bu komut `backend/dist` klasörü oluşturur.

## 🚀 Yayınlama Seçenekleri

### Seçenek 1: Vercel (Önerilen - En Kolay)

**Avantajlar:**
- ✅ Ücretsiz
- ✅ Otomatik HTTPS
- ✅ Kolay kurulum
- ✅ GitHub entegrasyonu

**Adımlar:**

1. **GitHub'a Yükleyin:**
   ```powershell
   # Git kurulu değilse: https://git-scm.com/download/win
   git init
   git add .
   git commit -m "Initial commit"
   # GitHub'da yeni repo oluşturun
   git remote add origin https://github.com/kullaniciadi/yukyolda.git
   git push -u origin main
   ```

2. **Vercel'e Giriş:**
   - https://vercel.com adresine gidin
   - "Sign Up" > GitHub ile giriş yapın

3. **Proje Ekle:**
   - "Add New Project"
   - GitHub repo'nuzu seçin
   - Import

4. **Ayarları Yapın:**
   - Framework Preset: **Vite**
   - Root Directory: `.` (kök dizin)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. **Environment Variables:**
   - `VITE_API_URL` - Backend URL (örn: `https://yukyolda-backend.railway.app/api`)
   - `VITE_GOOGLE_MAPS_API_KEY` - Google Maps API key

6. **Deploy!**
   - "Deploy" butonuna tıklayın
   - 1-2 dakika içinde siteniz yayında!

**Backend için:**
- Vercel Serverless Functions kullanabilirsiniz
- Veya ayrı bir hosting (Render, Railway)

### Seçenek 2: Render (Frontend + Backend Birlikte)

**Avantajlar:**
- ✅ Ücretsiz
- ✅ Frontend ve backend aynı yerde
- ✅ Otomatik HTTPS

**Adımlar:**

1. **GitHub'a Yükleyin** (yukarıdaki gibi)

2. **Render'e Giriş:**
   - https://render.com adresine gidin
   - "Get Started for Free" > GitHub ile giriş

3. **Frontend için Web Service:**
   - "New" > "Web Service"
   - GitHub repo seçin
   - Ayarlar:
     - Name: `yukyolda-frontend`
     - Environment: `Node`
     - Build Command: `npm install && npm run build`
     - Start Command: `npm run preview` (veya `npx serve dist`)
   - Environment Variables ekleyin
   - "Create Web Service"

4. **Backend için Web Service:**
   - "New" > "Web Service"
   - GitHub repo seçin
   - Root Directory: `backend`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm run start`
   - Environment Variables:
     - `MONGODB_URI`
     - `JWT_SECRET`
     - `PORT` (Render otomatik atar)
   - "Create Web Service"

### Seçenek 3: Netlify (Frontend) + Railway (Backend)

**Netlify (Frontend):**
1. https://netlify.com adresine gidin
2. "Add new site" > "Import an existing project"
3. GitHub repo seçin
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Environment Variables ekleyin
6. Deploy!

**Railway (Backend):**
1. https://railway.app adresine gidin
2. "New Project" > "Deploy from GitHub repo"
3. Backend klasörünü seçin
4. Environment Variables ekleyin
5. Deploy!

### Seçenek 4: GitHub Pages (Sadece Frontend - Statik)

**Avantajlar:**
- ✅ Tamamen ücretsiz
- ✅ GitHub ile entegre

**Adımlar:**

1. **vite.config.ts güncelleyin:**
   ```typescript
   export default defineConfig({
     base: '/yukyolda/', // GitHub repo adınız
     // ... diğer ayarlar
   });
   ```

2. **GitHub Actions ekleyin:**
   `.github/workflows/deploy.yml` oluşturun:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. **GitHub Settings:**
   - Repo > Settings > Pages
   - Source: `gh-pages` branch
   - Save

## 🔧 Production Ayarları

### .env Dosyaları

**Frontend (.env.production):**
```env
VITE_API_URL=https://your-backend-url.com/api
VITE_GOOGLE_MAPS_API_KEY=your-key
```

**Backend (.env.production):**
```env
MONGODB_URI=your-mongodb-uri
JWT_SECRET=strong-secret-key
NODE_ENV=production
PORT=5000
```

### CORS Ayarları

**backend/src/server.ts:**
```typescript
app.use(cors({
  origin: ['http://localhost:3000', 'https://your-frontend-url.vercel.app'],
  credentials: true
}));
```

## 📝 Checklist

### Deployment Öncesi:
- [ ] Tüm environment variables ayarlandı
- [ ] Production build yapıldı
- [ ] CORS ayarları yapıldı
- [ ] MongoDB bağlantısı test edildi
- [ ] Tüm endpoint'ler test edildi
- [ ] Google Maps API key production için ayarlandı

### Deployment Sonrası:
- [ ] Site açılıyor mu?
- [ ] API çalışıyor mu?
- [ ] Google Maps görünüyor mu?
- [ ] Login/Register çalışıyor mu?

## 🎯 Hızlı Başlangıç (Vercel)

1. GitHub'a yükleyin
2. Vercel'e giriş yapın
3. Repo'yu import edin
4. Ayarları yapın
5. Deploy!

**5 dakikada siteniz yayında!** 🚀

## 💡 İpuçları

- **Domain:** Vercel ve Netlify ücretsiz domain verir (örn: `yukyolda.vercel.app`)
- **Custom Domain:** Kendi domain'inizi ekleyebilirsiniz
- **SSL:** Otomatik HTTPS (ücretsiz)
- **Backup:** GitHub'da kodunuz zaten yedekli

## 🆘 Sorun Giderme

### Build hatası:
- `package.json` dosyasını kontrol edin
- Node versiyonunu kontrol edin

### API çalışmıyor:
- Backend URL'ini kontrol edin
- CORS ayarlarını kontrol edin

### Environment variables çalışmıyor:
- Vercel/Render'da doğru eklediğinizden emin olun
- `VITE_` prefix'i frontend için gerekli

Sorularınız varsa sorun! 🎉


