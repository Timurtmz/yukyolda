# 🚀 Git Olmadan Site Yayınlama

Git kurmak istemiyorsanız, alternatif yöntemler:

## Seçenek 1: Vercel CLI (Önerilen)

### Adım 1: Vercel CLI Kurulumu

```powershell
npm install -g vercel
```

### Adım 2: Deploy

```powershell
cd C:\Users\ahmed\Desktop\YUKYOLDA
vercel
```

### Adım 3: Vercel Soruları

Vercel size şunları soracak:

1. **"Set up and deploy?"** → `Y` (Evet)
2. **"Which scope?"** → Hesabınızı seçin
3. **"Link to existing project?"** → `N` (Hayır - yeni proje)
4. **"What's your project's name?"** → `yukyolda` (veya istediğiniz isim)
5. **"In which directory is your code located?"** → `.` (nokta - mevcut klasör)
6. **"Want to override the settings?"** → `N` (Hayır - varsayılanlar)

### Adım 4: Environment Variables

Vercel CLI size environment variables eklemek isteyip istemediğinizi soracak:

```powershell
# Her biri için:
? What's the value of VITE_API_URL? http://localhost:5000/api
? What's the value of VITE_GOOGLE_MAPS_API_KEY? your-key-here
```

### Adım 5: Deploy Tamamlandı!

Vercel size site URL'inizi verecek:
```
✅ Production: https://yukyolda.vercel.app
```

## Seçenek 2: Netlify Drop (Sadece Frontend)

### Adım 1: Netlify Drop

1. **Tarayıcıda açın:**
   ```
   https://app.netlify.com/drop
   ```

2. **Giriş yapın:**
   - GitHub, Google veya Email ile giriş yapın

3. **dist klasörünü sürükle-bırak:**
   - `C:\Users\ahmed\Desktop\YUKYOLDA\dist` klasörünü
   - Tarayıcı penceresine sürükleyip bırakın

4. **Site yayında!**
   - Netlify size URL verecek
   - Örnek: `https://random-name-123.netlify.app`

**Not:** Bu yöntem sadece frontend için. Backend için Git gerekir.

## Seçenek 3: Render (Manuel Upload)

1. **Render'e giriş:**
   - https://render.com adresine gidin
   - GitHub ile giriş (GitHub hesabı gerekir)

2. **Static Site Oluştur:**
   - "New" > "Static Site"
   - "Manual Deploy" seçin
   - ZIP dosyası yükleyin

## Seçenek 4: GitHub Desktop (Görsel Arayüz)

Git komut satırı yerine görsel arayüz:

1. **GitHub Desktop İndir:**
   - https://desktop.github.com adresine gidin
   - İndirin ve kurun

2. **Kullanım:**
   - "File" > "Add Local Repository"
   - Klasörü seçin
   - "Publish repository" tıklayın

## 🎯 En Kolay Yol: Vercel CLI

**Avantajlar:**
- ✅ Git gerekmez
- ✅ Komut satırından deploy
- ✅ Environment variables ekleyebilirsiniz
- ✅ Otomatik HTTPS

**Adımlar:**
```powershell
npm install -g vercel
cd C:\Users\ahmed\Desktop\YUKYOLDA
vercel
```

## 📝 Vercel CLI Detaylı Kullanım

### İlk Deploy:
```powershell
vercel
```

### Production Deploy:
```powershell
vercel --prod
```

### Environment Variables Ekleme:
```powershell
vercel env add VITE_API_URL
vercel env add VITE_GOOGLE_MAPS_API_KEY
```

### Proje Ayarları:
```powershell
vercel project ls          # Projeleri listele
vercel logs                # Logları görüntüle
vercel domains             # Domain ayarları
```

## 🔧 Backend Deploy (Git Gerekir)

Backend için Git gerekir çünkü:
- Railway, Render gibi servisler GitHub entegrasyonu kullanır
- Alternatif: Backend'i manuel olarak bir VPS'e yükleyin

## ✅ Özet

**Frontend için:**
1. ✅ Vercel CLI kullanın (Git gerekmez)
2. ✅ Veya Netlify Drop (sürükle-bırak)

**Backend için:**
- Git kurmanız gerekir (veya VPS kullanın)

## 🎉 Hemen Başlayın!

```powershell
npm install -g vercel
vercel
```

5 dakikada site yayında! 🚀


