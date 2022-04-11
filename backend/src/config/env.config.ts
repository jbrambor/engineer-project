import { ConfigModule } from '@nestjs/config';

import * as Joi from '@hapi/joi';

export const configEnv = () =>
    ConfigModule.forRoot({
        validationSchema: Joi.object({
            POSTGRES_HOST: Joi.string().required(),
            POSTGRES_PORT: Joi.number().required(),
            POSTGRES_USER: Joi.string().required(),
            POSTGRES_PASSWORD: Joi.string().required(),
            POSTGRES_DB: Joi.string().required(),
            PORT: Joi.number().default(5000),
        }),
    });