import { DataSource } from 'typeorm';
import 'dotenv/config';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: process.env.DB_PATH,
  synchronize: true,
});
