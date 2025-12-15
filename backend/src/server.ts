import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes/routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    process.env.FRONTEND_URL || 'https://yukyolda.vercel.app'
  ],
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api', routes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'YükYolda API çalışıyor' });
});

// MongoDB bağlantısı
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/yukyolda';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB bağlandı');
    app.listen(PORT, () => {
      console.log(`🚀 Server ${PORT} portunda çalışıyor`);
      console.log(`📍 Health check: http://localhost:${PORT}/health`);
    });
  })
  .catch(err => {
    console.error('❌ MongoDB bağlantı hatası:', err);
    console.log('💡 MongoDB Atlas kullanıyorsanız MONGODB_URI değerini kontrol edin');
  });


