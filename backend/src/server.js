import express from 'express';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import apiRoutes from './routes/api.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  message: 'Too many requests, please try again later.',
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', apiRoutes);

app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(PORT, () => {
  console.info(`🐶 Server is running on port http://localhost:${PORT}`);
  if (process.env.NODE_ENV === 'development') {
    console.info('🔧 Mode développement activé');
  }
});
