import { Module } from '@nestjs/common';

import { configEnv } from './config/configuration';

import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [configEnv(), DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
