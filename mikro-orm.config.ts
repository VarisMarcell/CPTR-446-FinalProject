import { Options, ReflectMetadataProvider } from '@mikro-orm/core';
import * as dotenv from 'dotenv';

dotenv.config({
  path: `./${process.env.NODE_ENV}.env`
})

const config = {
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  dbName: process.env.DB_NAME,
  port: +(process.env.DB_PORT as string) || 3308,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  type: 'mysql',
  metadataProvider: ReflectMetadataProvider,
  debug: true,
} as Options;

export default config;
