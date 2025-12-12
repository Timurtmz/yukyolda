# Node.js Kurulum Rehberi - Windows

## Adım 1: Node.js İndirme

1. **Tarayıcınızda şu adrese gidin:**
   ```
   https://nodejs.org/
   ```

2. **LTS (Long Term Support) versiyonunu indirin**
   - Yeşil renkli "LTS" butonuna tıklayın
   - Örnek: "v20.x.x LTS" veya "v22.x.x LTS"
   - Bu, en stabil ve önerilen versiyondur

3. **İndirme başlayacak**
   - Dosya adı genellikle: `node-vXX.X.X-x64.msi` şeklindedir
   - İndirme klasörünüze kaydedilecek

## Adım 2: Node.js Kurulumu

1. **İndirdiğiniz .msi dosyasına çift tıklayın**

2. **Kurulum sihirbazında:**
   - "Next" butonlarına tıklayarak ilerleyin
   - **ÖNEMLİ:** "Add to PATH" seçeneğinin işaretli olduğundan emin olun
   - Varsayılan kurulum konumunu kabul edin (genellikle `C:\Program Files\nodejs\`)

3. **Kurulum tamamlandığında:**
   - "Finish" butonuna tıklayın
   - **TÜM PowerShell ve CMD pencerelerini KAPATIN**

## Adım 3: Kurulumu Doğrulama

1. **YENİ bir PowerShell penceresi açın**
   - Windows tuşu + X
   - "Windows PowerShell" veya "Terminal" seçin

2. **Şu komutları çalıştırın:**
   ```powershell
   node --version
   npm --version
   ```

3. **Beklenen çıktı:**
   ```
   v20.11.0    (veya benzer bir versiyon numarası)
   10.2.4      (veya benzer bir npm versiyon numarası)
   ```

## Adım 4: Projeyi Çalıştırma

Node.js kurulduktan sonra:

1. **Proje klasörüne gidin:**
   ```powershell
   cd C:\Users\ahmed\Desktop\YUKYOLDA
   ```

2. **Bağımlılıkları yükleyin:**
   ```powershell
   npm install
   ```
   Bu işlem 2-5 dakika sürebilir. İlk kez çalıştırıyorsanız daha uzun sürebilir.

3. **Projeyi başlatın:**
   ```powershell
   npm run dev
   ```

4. **Tarayıcıda açın:**
   - Otomatik olarak açılacak
   - Veya manuel olarak: `http://localhost:3000`

## Sorun Giderme

### "node komutu bulunamadı" hatası
- **Çözüm:** Tüm terminal pencerelerini kapatın ve yeni bir tane açın
- Hala çalışmıyorsa, bilgisayarınızı yeniden başlatın

### "npm komutu bulunamadı" hatası
- Node.js kurulumunda "Add to PATH" seçeneğini kaçırmış olabilirsiniz
- Node.js'i kaldırıp tekrar kurun ve bu sefer PATH'e eklemeyi unutmayın

### Kurulum sırasında hata
- Antivirus yazılımınızı geçici olarak kapatın
- Yönetici olarak çalıştırın (sağ tık > "Run as administrator")

### Port 3000 zaten kullanılıyor
- Başka bir uygulama bu portu kullanıyor olabilir
- `vite.config.ts` dosyasındaki port numarasını değiştirebilirsiniz

## Alternatif: Chocolatey ile Kurulum (Gelişmiş Kullanıcılar)

Eğer Chocolatey paket yöneticiniz varsa:

```powershell
choco install nodejs-lts -y
```

## Yardım

Hala sorun yaşıyorsanız:
1. Node.js versiyonunuzu kontrol edin: `node --version`
2. npm versiyonunuzu kontrol edin: `npm --version`
3. Proje klasöründe olduğunuzdan emin olun: `pwd` veya `cd`
4. `package.json` dosyasının mevcut olduğunu kontrol edin



