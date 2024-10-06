import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PostgreSqlDriver, defineConfig } from '@mikro-orm/postgresql';

export const mikroOrmConfig: MikroOrmModule = defineConfig({
  entities: ['./dist/core/entities'],
  entitiesTs: ['./src/core/entities'],
  dbName: process.env.DB_NAME,
  driver: PostgreSqlDriver,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});
