# Backend API Geliştirme Rehberi - PowerShell Versiyonu

## Genel Bakış

YükYolda uygulaması için backend API'ye ihtiyaç var. Bu rehber Windows PowerShell kullanıcıları için hazırlanmıştır.

## Seçenek 1: Node.js + Express (Önerilen - Kolay)

### Gereksinimler
- Node.js (zaten kurulu olmalı)
- MongoDB veya PostgreSQL (veritabanı)
- Express.js (web framework)

### Kurulum Adımları (PowerShell)

1. **Backend klasörü oluşturun:**
   ```powershell
   cd C:\Users\ahmed\Desktop\YUKYOLDA
   New-Item -ItemType Directory -Force -Path "backend"
   cd backend
   ```

2. **package.json oluşturun:**
   ```powershell
   npm init -y
   ```

3. **Gerekli paketleri yükleyin:**
   ```powershell
   npm install express cors dotenv mongoose bcryptjs jsonwebtoken
   npm install -D nodemon typescript @types/node @types/express @types/cors
   ```

4. **Klasör yapısını oluşturun:**
   ```powershell
   New-Item -ItemType Directory -Force -Path "src", "src\routes", "src\models", "src\controllers", "src\middleware"
   ```

5. **Temel yapı:**
   ```
   backend/
   ├── src/
   │   ├── routes/
   │   │   ├── auth.ts
   │   │   ├── jobs.ts
   │   │   ├── users.ts
   │   │   └── routes.ts
   │   ├── models/
   │   │   ├── User.ts
   │   │   ├── Job.ts
   │   │   └── Trip.ts
   │   ├── controllers/
   │   │   ├── authController.ts
   │   │   ├── jobController.ts
   │   │   └── userController.ts
   │   ├── middleware/
   │   │   └── auth.ts
   │   └── server.ts
   ├── .env
   └── package.json
   ```

### Örnek Kod Yapısı

**backend/src/server.ts:**
```typescript
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes/routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', routes);

// MongoDB bağlantısı
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/yukyolda')
  .then(() => {
    console.log('MongoDB bağlandı');
    app.listen(PORT, () => {
      console.log(`Server ${PORT} portunda çalışıyor`);
    });
  })
  .catch(err => console.error('MongoDB bağlantı hatası:', err));
```

**backend/src/models/User.ts:**
```typescript
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  userType: { type: String, enum: ['driver', 'company'] },
  phone: String,
  rating: { type: Number, default: 0 },
  ratingCount: { type: Number, default: 0 },
  totalTrips: { type: Number, default: 0 },
  monthlyEarnings: { type: Number, default: 0 },
  activeJobId: { type: String, default: null },
  documents: [{
    type: String,
    url: String,
    verified: Boolean
  }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema);
```

**backend/src/models/Job.ts:**
```typescript
import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  origin: String,
  destination: String,
  originCoords: { lat: Number, lng: Number },
  destinationCoords: { lat: Number, lng: Number },
  price: Number,
  distance: Number,
  weight: Number,
  cargoType: String,
  urgent: Boolean,
  status: { type: String, enum: ['available', 'assigned', 'in_progress', 'completed'], default: 'available' },
  assignedDriverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Job', jobSchema);
```

**backend/package.json'a script ekleyin:**
```json
{
  "scripts": {
    "dev": "nodemon src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js"
  }
}
```

**backend/.env dosyası oluşturun:**
```powershell
New-Item -ItemType File -Path ".env" -Force
```

`.env` içeriği:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/yukyolda
JWT_SECRET=your-secret-key-here
```

## Seçenek 2: Firebase (En Kolay - Hızlı Başlangıç)

Firebase, backend yazmadan hızlıca başlamanızı sağlar.

### Adımlar:
1. https://firebase.google.com/ adresine gidin
2. Yeni proje oluşturun
3. Firestore Database'i etkinleştirin
4. Authentication'ı etkinleştirin
5. Firebase SDK'yı projenize ekleyin

### Frontend'e Firebase ekleme (PowerShell):
```powershell
cd C:\Users\ahmed\Desktop\YUKYOLDA
npm install firebase
```

### Avantajlar:
- ✅ Backend yazmaya gerek yok
- ✅ Otomatik ölçeklenebilir
- ✅ Ücretsiz başlangıç planı
- ✅ Gerçek zamanlı veritabanı

### Dezavantajlar:
- ⚠️ Uzun vadede maliyetli olabilir
- ⚠️ Özelleştirme sınırlı

## Seçenek 3: Supabase (Önerilen - Modern)

Supabase, Firebase'in açık kaynak alternatifi.

### Adımlar:
1. https://supabase.com/ adresine gidin
2. Ücretsiz hesap oluşturun
3. Yeni proje oluşturun
4. SQL tablolarını oluşturun
5. API key'leri alın

### Frontend'e Supabase ekleme (PowerShell):
```powershell
cd C:\Users\ahmed\Desktop\YUKYOLDA
npm install @supabase/supabase-js
```

### Avantajlar:
- ✅ PostgreSQL veritabanı (güçlü)
- ✅ Otomatik REST API
- ✅ Gerçek zamanlı özellikler
- ✅ Ücretsiz başlangıç planı

## MongoDB Atlas Kurulumu (Ücretsiz Cloud Database)

Node.js + Express kullanıyorsanız:

1. https://www.mongodb.com/cloud/atlas adresine gidin
2. Ücretsiz hesap oluşturun
3. "Build a Database" > "Free" seçin
4. Cluster oluşturun (birkaç dakika sürer)
5. "Connect" > "Connect your application"
6. Connection string'i kopyalayın
7. `.env` dosyasına ekleyin:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/yukyolda
   ```

## API Endpoint'leri (Gerekli)

### Kimlik Doğrulama
- `POST /api/auth/register` - Kayıt ol
- `POST /api/auth/login` - Giriş yap
- `POST /api/auth/logout` - Çıkış yap
- `GET /api/auth/me` - Kullanıcı bilgileri

### İşler (Jobs)
- `GET /api/jobs` - Tüm işleri listele (filtreleme ile)
- `GET /api/jobs/:id` - Tek iş detayı
- `POST /api/jobs` - Yeni iş oluştur (şirket için)
- `POST /api/jobs/:id/accept` - İşi kabul et (şoför için)
- `PUT /api/jobs/:id/status` - İş durumunu güncelle
- `GET /api/jobs/suggested` - AI önerilen işler

### Kullanıcılar
- `GET /api/users/:id` - Kullanıcı profili
- `PUT /api/users/:id` - Profil güncelle
- `POST /api/users/:id/rating` - Puan ver
- `GET /api/users/:id/stats` - İstatistikler

### Rotalar
- `POST /api/routes/calculate` - Rota hesapla
- `GET /api/routes/:jobId` - İş rotası

## Veritabanı Şeması

### Users Tablosu
```sql
- id (UUID)
- name (String)
- email (String, unique)
- password (Hash)
- userType (driver | company)
- phone (String)
- rating (Float)
- ratingCount (Int)
- totalTrips (Int)
- monthlyEarnings (Decimal)
- activeJobId (UUID, nullable)
- documents (JSON)
- createdAt (DateTime)
```

### Jobs Tablosu
```sql
- id (UUID)
- companyId (UUID, FK -> Users)
- origin (String)
- destination (String)
- originCoords (JSON: {lat, lng})
- destinationCoords (JSON: {lat, lng})
- price (Decimal)
- distance (Float)
- weight (Float)
- cargoType (String)
- urgent (Boolean)
- status (available | assigned | in_progress | completed)
- assignedDriverId (UUID, FK -> Users, nullable)
- createdAt (DateTime)
```

### Trips Tablosu (Tamamlanan Seferler)
```sql
- id (UUID)
- jobId (UUID, FK -> Jobs)
- driverId (UUID, FK -> Users)
- companyId (UUID, FK -> Users)
- startTime (DateTime)
- endTime (DateTime, nullable)
- actualDistance (Float)
- status (completed | cancelled)
- rating (Int, nullable)
- paymentStatus (pending | paid)
- createdAt (DateTime)
```

## Frontend Entegrasyonu

### API Service Oluşturma

**src/services/api.ts:**
```typescript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = {
  async get(endpoint: string) {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.json();
  },
  
  async post(endpoint: string, data: any) {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }
};
```

### .env.local'e Ekleme
```
VITE_API_URL=http://localhost:5000/api
```

## Hızlı Başlangıç Önerisi

**En hızlı yol:** Supabase kullanın
1. Supabase'de proje oluşturun (5 dakika)
2. Tabloları oluşturun (10 dakika)
3. Frontend'den API'yi çağırın (zaten hazır)

**En öğretici yol:** Node.js + Express
1. Backend klasörü oluşturun
2. Express server kurun
3. MongoDB Atlas (ücretsiz) kullanın
4. API endpoint'lerini yazın

## PowerShell Komutları Özeti

```powershell
# Backend klasörü oluştur
cd C:\Users\ahmed\Desktop\YUKYOLDA
New-Item -ItemType Directory -Force -Path "backend"
cd backend

# package.json oluştur
npm init -y

# Paketleri yükle
npm install express cors dotenv mongoose bcryptjs jsonwebtoken
npm install -D nodemon typescript @types/node @types/express @types/cors

# Klasör yapısı oluştur
New-Item -ItemType Directory -Force -Path "src", "src\routes", "src\models", "src\controllers", "src\middleware"

# .env dosyası oluştur
New-Item -ItemType File -Path ".env" -Force

# TypeScript config oluştur
npm install -D typescript ts-node
npx tsc --init

# Sunucuyu çalıştır (geliştirme modu)
npm run dev
```

## Sonraki Adımlar

1. ✅ Backend çözümünü seçin (Supabase önerilir)
2. ✅ Veritabanı tablolarını oluşturun
3. ✅ API endpoint'lerini test edin
4. ✅ Frontend'i backend'e bağlayın
5. ✅ Gerçek verilerle test edin

## Yardım

- Supabase Dokümantasyonu: https://supabase.com/docs
- Express.js Dokümantasyonu: https://expressjs.com/
- MongoDB Atlas: https://www.mongodb.com/cloud/atlas
- Node.js Dokümantasyonu: https://nodejs.org/docs


