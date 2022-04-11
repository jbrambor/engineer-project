import { Module } from '@nestjs/common';

import { configEnv } from './config/env.config';

import { PostgresqlModule } from './modules/database/postgresql.module';

@Module({
  imports: [
    configEnv(),
    PostgresqlModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
