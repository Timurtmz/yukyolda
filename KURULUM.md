# YükYolda - Kurulum Rehberi

## 1. Node.js Kurulumu

Projeyi çalıştırmak için önce Node.js kurmanız gerekiyor:

1. **Node.js İndirme:**
   - https://nodejs.org/ adresine gidin
   - LTS (Long Term Support) versiyonunu indirin (önerilen)
   - İndirdiğiniz .msi dosyasını çalıştırın
   - Kurulum sırasında "Add to PATH" seçeneğinin işaretli olduğundan emin olun

2. **Kurulumu Doğrulama:**
   - Yeni bir PowerShell veya CMD penceresi açın
   - Şu komutları çalıştırın:
     ```bash
     node --version
     npm --version
     ```
   - Her ikisi de bir versiyon numarası göstermelidir

## 2. Proje Kurulumu

Node.js kurulduktan sonra:

1. **Proje klasörüne gidin:**
   ```bash
   cd C:\Users\ahmed\Desktop\YUKYOLDA
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```
   Bu işlem birkaç dakika sürebilir.

3. **Çevre değişkenlerini ayarlayın:**
   - `.env.local` dosyasını oluşturun (eğer yoksa)
   - İçine şunu yazın:
     ```
     GEMINI_API_KEY=PLACEHOLDER_API_KEY
     ```
   - Not: Şimdilik placeholder kullanabilirsiniz, gerçek API key'e ihtiyaç duyduğunuzda güncelleyebilirsiniz

## 3. Projeyi Çalıştırma

```bash
npm run dev
```

Bu komut çalıştıktan sonra:
- Tarayıcınızda otomatik olarak açılacak
- Veya manuel olarak `http://localhost:3000` adresine gidin

## 4. Projeyi Derleme (Production için)

Sitenizi yayınlamak için:

```bash
npm run build
```

Bu komut `dist` klasöründe hazır dosyaları oluşturur. Bu dosyaları herhangi bir web sunucusuna yükleyebilirsiniz.

## Sorun Giderme

### npm komutu bulunamıyor
- Node.js'in düzgün kurulduğundan emin olun
- Yeni bir terminal penceresi açın
- PATH'e eklendiğinden emin olun

### Port 3000 zaten kullanılıyor
- `vite.config.ts` dosyasındaki port numarasını değiştirebilirsiniz
- Veya çalışan diğer uygulamayı kapatın

### Bağımlılık hataları
- `node_modules` klasörünü silin
- `npm install` komutunu tekrar çalıştırın

## Sonraki Adımlar

1. ✅ Proje çalışıyor mu kontrol edin
2. ✅ Tüm sayfaları test edin (Ana Sayfa, Yük Ara, Rota, Profil)
3. ✅ Google Maps API entegrasyonu için API key alın
4. ✅ Backend API'yi hazırlayın (veritabanı, kullanıcı sistemi, vb.)
5. ✅ Gerçek verilerle test edin

## Destek

Sorun yaşarsanız:
- Node.js versiyonunuzu kontrol edin (18+ önerilir)
- Tüm dosyaların doğru yerde olduğundan emin olun
- Terminal çıktılarındaki hata mesajlarını kontrol edin



