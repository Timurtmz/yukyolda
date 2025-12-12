import express from 'express';
import authRoutes from './auth';
import jobRoutes from './jobs';
import userRoutes from './users';

const router = express.Router();

// Route tanımlamaları
router.use('/auth', authRoutes);
router.use('/jobs', jobRoutes);
router.use('/users', userRoutes);

export default router;


