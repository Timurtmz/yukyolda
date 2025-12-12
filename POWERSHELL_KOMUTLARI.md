# PowerShell Komutları Rehberi

Windows'ta bash komutları çalışmaz. İşte PowerShell karşılıkları:

## Temel Komutlar

### Klasör İşlemleri

**Bash:** `mkdir backend`  
**PowerShell:** 
```powershell
New-Item -ItemType Directory -Path "backend"
# veya kısa hali:
mkdir backend
```

**Bash:** `cd backend`  
**PowerShell:** 
```powershell
cd backend
# (Aynı)
```

**Bash:** `cd ..`  
**PowerShell:** 
```powershell
cd ..
# (Aynı)
```

### Dosya İşlemleri

**Bash:** `touch .env`  
**PowerShell:** 
```powershell
New-Item -ItemType File -Path ".env"
# veya:
New-Item .env
```

**Bash:** `cat .env`  
**PowerShell:** 
```powershell
Get-Content .env
# veya:
cat .env
```

**Bash:** `echo "text" > file.txt`  
**PowerShell:** 
```powershell
"text" | Out-File -FilePath "file.txt"
# veya:
Set-Content -Path "file.txt" -Value "text"
```

### Dosya Düzenleme

**Bash:** `nano .env` veya `vim .env`  
**PowerShell:** 
```powershell
notepad .env
# veya VS Code varsa:
code .env
```

### Paket Yönetimi

**Bash:** `npm install`  
**PowerShell:** 
```powershell
npm install
# (Aynı - npm Windows'ta da çalışır)
```

**Bash:** `npm run dev`  
**PowerShell:** 
```powershell
npm run dev
# (Aynı)
```

### Çoklu Klasör Oluşturma

**Bash:** `mkdir -p src/routes src/models`  
**PowerShell:** 
```powershell
New-Item -ItemType Directory -Force -Path "src", "src\routes", "src\models"
# veya:
mkdir -Force src\routes, src\models
```

### Dosya Listeleme

**Bash:** `ls -la`  
**PowerShell:** 
```powershell
Get-ChildItem -Force
# veya kısa:
ls -Force
# veya:
dir
```

### Değişken Kullanımı

**Bash:** `export VAR="value"`  
**PowerShell:** 
```powershell
$env:VAR = "value"
# veya kalıcı için:
[Environment]::SetEnvironmentVariable("VAR", "value", "User")
```

### Dosya Kopyalama

**Bash:** `cp file.txt backup.txt`  
**PowerShell:** 
```powershell
Copy-Item file.txt backup.txt
# veya:
cp file.txt backup.txt
```

### Dosya Silme

**Bash:** `rm file.txt`  
**PowerShell:** 
```powershell
Remove-Item file.txt
# veya:
rm file.txt
```

### Dosya Taşıma/Yeniden Adlandırma

**Bash:** `mv old.txt new.txt`  
**PowerShell:** 
```powershell
Move-Item old.txt new.txt
# veya:
mv old.txt new.txt
```

## Proje İçin Özel Komutlar

### Backend Klasörü Oluşturma
```powershell
cd C:\Users\ahmed\Desktop\YUKYOLDA
New-Item -ItemType Directory -Force -Path "backend"
cd backend
```

### .env Dosyası Oluşturma
```powershell
New-Item -ItemType File -Path ".env" -Force
notepad .env
```

### Klasör Yapısı Oluşturma
```powershell
New-Item -ItemType Directory -Force -Path "src", "src\routes", "src\models", "src\controllers", "src\middleware"
```

### TypeScript Projesi Başlatma
```powershell
npm init -y
npm install -D typescript @types/node
npx tsc --init
```

## Git Komutları (Aynı)

Git komutları Windows'ta da aynı çalışır:
```powershell
git init
git add .
git commit -m "message"
git status
```

## WSL Kullanmak İsterseniz

Eğer Linux komutlarını kullanmak istiyorsanız:

1. **WSL Kurulumu:**
   ```powershell
   wsl --install
   ```

2. **WSL'de Bash Kullanımı:**
   ```powershell
   wsl
   # Artık Linux ortamındasınız, bash komutları çalışır
   ```

## Önemli Notlar

1. **Yol Ayırıcı:** Windows'ta `\` kullanılır, Linux'ta `/`
   - PowerShell her ikisini de kabul eder
   - Örnek: `src\routes` veya `src/routes` ikisi de çalışır

2. **Büyük/Küçük Harf:** Windows dosya sistemi case-insensitive
   - `File.txt` ve `file.txt` aynı dosyadır

3. **PowerShell Aliases:**
   - `ls` = `Get-ChildItem`
   - `cd` = `Set-Location`
   - `mkdir` = `New-Item -ItemType Directory`
   - `rm` = `Remove-Item`
   - `cp` = `Copy-Item`
   - `mv` = `Move-Item`
   - `cat` = `Get-Content`

## Yardımcı Komutlar

### Mevcut Dizini Gösterme
```powershell
Get-Location
# veya:
pwd
```

### Komut Geçmişi
```powershell
Get-History
# veya:
history
```

### Yardım Alma
```powershell
Get-Help komut-adi
# veya:
komut-adi -?
```

## Sorun Giderme

### "Komut bulunamadı" hatası
- Komutun PATH'te olduğundan emin olun
- Tam yolu kullanın: `C:\Program Files\nodejs\npm.cmd`

### "Yetki hatası" 
- Yönetici olarak PowerShell açın
- Sağ tık > "Run as administrator"

### "Dosya bulunamadı"
- Dosya yolunu kontrol edin
- `Get-Location` ile mevcut dizini kontrol edin


