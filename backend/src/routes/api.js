import { Router } from 'express';
import authRoutes from './auth.js';

const router = Router();

router.use('/auth', authRoutes);

router.get('/', (req, res) => {
  res.send('Hello World');
});

export default router;