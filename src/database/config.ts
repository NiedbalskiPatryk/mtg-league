import { PostgreSqlDriver } from '@mikro-orm/postgresql';

export const mikroOrmConfig = {
  entities: ['./dist/core/entities'],
  entitiesTs: ['./src/core/entities'],
  dbName: 'mtg-league.db',
  driver: PostgreSqlDriver,
};
