import App from './config/App';

import { config } from 'dotenv';

import { HotelController } from './Controllers/hotel.controller';
import { AuthenticationController } from './Controllers/authentication.controller';

config();

const app = new App([
    HotelController,
    AuthenticationController,
]);

const { PORT } = process.env;

app.listen(Number(PORT));