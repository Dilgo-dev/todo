import express from 'express';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import apiRoutes from './routes/api.js';
import { globalLimiter } from './utils/limiter.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());

app.use(globalLimiter);
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
