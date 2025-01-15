import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Note } from './entity/Note';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number.parseInt(process.env.DB_PORT!),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'notes',
  synchronize: true,
  logging: true,
  entities: [Note],
  subscribers: [],
  migrations: [],
});
