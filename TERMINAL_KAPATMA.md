# 🪟 Terminal Pencerelerini Kapatma

Git kurulumundan sonra terminal pencerelerini kapatmanız gerekiyor. İşte kolay yöntemler:

## ✅ Yöntem 1: Manuel Kapatma (En Kolay)

1. **Her terminal penceresinde:**
   - Pencerenin sağ üst köşesindeki **X** butonuna tıklayın
   - Veya `Alt + F4` tuşlarına basın

2. **Tüm pencereleri kapatın:**
   - PowerShell pencereleri
   - CMD pencereleri
   - VS Code terminal pencereleri (varsa)

## ✅ Yöntem 2: PowerShell ile Kapatma

Eğer çok fazla terminal penceresi varsa:

```powershell
# Tüm PowerShell process'lerini kapat (dikkatli!)
Get-Process powershell | Where-Object {$_.Id -ne $PID} | Stop-Process

# Tüm CMD process'lerini kapat
Get-Process cmd | Stop-Process
```

**⚠️ DİKKAT:** Bu komut TÜM PowerShell/CMD pencerelerini kapatır. Sadece gerektiğinde kullanın!

## ✅ Yöntem 3: Task Manager (Görev Yöneticisi)

1. **Task Manager'ı açın:**
   - `Ctrl + Shift + Esc` tuşlarına basın
   - Veya `Ctrl + Alt + Del` > "Task Manager"

2. **Process'leri bulun:**
   - "Windows PowerShell" veya "PowerShell"
   - "Command Prompt" veya "cmd"

3. **Kapatın:**
   - Sağ tık > "End Task"
   - Veya seçip "End Task" butonuna tıklayın

## ✅ Yöntem 4: Sadece Aktif Terminali Kapatma

Aktif terminal penceresini kapatmak için:
- `exit` yazıp Enter'a basın
- Veya pencerenin X butonuna tıklayın

## 🎯 Git Kurulumu İçin

Git kurulumundan sonra:

1. ✅ Tüm terminal pencerelerini kapatın (X butonu ile)
2. ✅ Yeni bir PowerShell penceresi açın
3. ✅ `git --version` komutunu çalıştırın

## 💡 İpucu

Eğer VS Code kullanıyorsanız:
- VS Code'daki terminal penceresini de kapatın
- VS Code'u yeniden başlatın (opsiyonel)

## ✅ Kontrol

Yeni terminal açtıktan sonra:

```powershell
git --version
```

Eğer versiyon numarası görünüyorsa, Git başarıyla kurulmuş demektir! 🎉


