import express from 'express';
import cookieParser from 'cookie-parser';
import apiRoutes from './routes/api.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.info(`🐶 Server is running on port http://localhost:${PORT}`);
  if (process.env.NODE_ENV === 'development') {
    console.info('🔧 Mode développement activé');
  }
});
