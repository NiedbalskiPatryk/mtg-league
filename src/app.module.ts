import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mikroOrmConfig } from './database/config';

@Module({
  imports: [MikroOrmModule.forRoot(mikroOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
