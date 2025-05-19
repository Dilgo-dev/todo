import { Router } from 'express';
import authRoutes from './auth.js';
import { authLimiter } from '../utils/limiter.js';

const router = Router();

router.use('/auth', authLimiter, authRoutes);

export default router;
