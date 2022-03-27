import { Module } from '@nestjs/common';

import { configEnv } from './config/configuration';

import { DatabaseModule } from './modules/database/database.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [configEnv(), DatabaseModule, UserModule, AuthenticationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
