# Git Kurulum Rehberi - Windows

Git kurulu değil. Önce Git'i kurmanız gerekiyor.

## 🚀 Hızlı Kurulum (5 dakika)

### Adım 1: Git İndirme

1. **Tarayıcınızda şu adrese gidin:**
   ```
   https://git-scm.com/download/win
   ```

2. **İndirme başlayacak**
   - Dosya adı: `Git-2.x.x-64-bit.exe` (veya benzer)
   - İndirme klasörünüze kaydedilecek

### Adım 2: Git Kurulumu

1. **İndirdiğiniz .exe dosyasına çift tıklayın**

2. **Kurulum sihirbazında:**
   - "Next" butonlarına tıklayarak ilerleyin
   - **ÖNEMLİ:** "Git from the command line and also from 3rd-party software" seçeneğini seçin
   - Varsayılan ayarları kabul edin
   - "Install" tıklayın

3. **Kurulum tamamlandığında:**
   - "Finish" butonuna tıklayın
   - **TÜM PowerShell ve CMD pencerelerini KAPATIN**

### Adım 3: Kurulumu Doğrulama

1. **YENİ bir PowerShell penceresi açın**
   - Windows tuşu + X
   - "Windows PowerShell" veya "Terminal" seçin

2. **Şu komutu çalıştırın:**
   ```powershell
   git --version
   ```

3. **Beklenen çıktı:**
   ```
   git version 2.x.x
   ```

## ✅ Git Kurulduktan Sonra

Git kurulduktan sonra GitHub'a yüklemek için:

```powershell
cd C:\Users\ahmed\Desktop\YUKYOLDA

# İlk kez:
git init
git add .
git commit -m "Initial commit"

# GitHub'da repo oluşturun (https://github.com/new)
# Sonra:
git remote add origin https://github.com/KULLANICIADI/yukyolda.git
git branch -M main
git push -u origin main
```

## 🔄 Alternatif: Git Olmadan Deploy

Git kurmak istemiyorsanız, alternatif yöntemler:

### Seçenek 1: Vercel CLI (Git Gerektirmez)

1. **Vercel CLI Kurulumu:**
   ```powershell
   npm install -g vercel
   ```

2. **Deploy:**
   ```powershell
   cd C:\Users\ahmed\Desktop\YUKYOLDA
   vercel
   ```

3. **Vercel size soracak:**
   - Proje adı
   - Ayarlar
   - Environment variables

### Seçenek 2: Manuel Dosya Yükleme (Netlify Drop)

1. **Netlify Drop:**
   - https://app.netlify.com/drop adresine gidin
   - `dist` klasörünü sürükle-bırak yapın
   - Site yayında!

**Not:** Bu yöntem sadece frontend için çalışır. Backend için Git gerekir.

### Seçenek 3: ZIP Dosyası ile (Render)

1. **Render'e giriş yapın:**
   - https://render.com adresine gidin

2. **Manuel Deploy:**
   - Projeyi ZIP olarak yükleyin
   - Render'da "Manual Deploy" seçin

## 📝 Git Kurulum Sonrası İlk Ayarlar

Git kurulduktan sonra (opsiyonel):

```powershell
git config --global user.name "Adınız"
git config --global user.email "email@example.com"
```

## 🆘 Sorun Giderme

### "git komutu bulunamadı" hatası
- Tüm terminal pencerelerini kapatın
- Yeni terminal açın
- Hala çalışmıyorsa, bilgisayarınızı yeniden başlatın

### Kurulum sırasında hata
- Antivirus yazılımınızı geçici olarak kapatın
- Yönetici olarak çalıştırın (sağ tık > "Run as administrator")

## 🎯 Önerilen Yol

**En kolay yol:** Git'i kurun (5 dakika)
- GitHub entegrasyonu
- Otomatik deployment
- Kod yedekleme

**Hızlı yol:** Vercel CLI kullanın
- Git gerekmez
- Komut satırından deploy

## 📚 Yardım

- Git Dokümantasyonu: https://git-scm.com/doc
- Vercel CLI: https://vercel.com/docs/cli

Git kurulumunu tamamladıktan sonra `HIZLI_DEPLOY.md` dosyasındaki adımları takip edin!


