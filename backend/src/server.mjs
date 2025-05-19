import express from 'express';
import { AppDataSource } from './database/datasource.js';
import 'dotenv/config';
import 'reflect-metadata';

const app = express();
const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.info('🐶 Database is running');
  })
  .catch(err => {
    console.error('❌ Database is not running', err);
  });

app.use(express.json());

app.get('/api', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.info(`🐶 Server is running on port http://localhost:${PORT}`);
  if (process.env.NODE_ENV === 'development') {
    console.info('🔧 Mode développement activé');
  }
});
