import App from './config/App';

import { config } from 'dotenv';

import { HotelController } from './Controllers/hotel.controller';

config();

const app = new App([
    HotelController,
]);

const { PORT } = process.env;

app.listen(Number(PORT));