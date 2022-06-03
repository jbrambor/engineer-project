import express, { Application, json, urlencoded } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

class App {
    private readonly app: Application;

    constructor(controllers: object[]) {
        this.app = express();

        this.connectWithDatabase();
        this.registerMiddleware();
        this.registerRoutes(controllers);
    }

    private registerMiddleware(): void {
        this.app.use(json());
        this.app.use(urlencoded({ extended: false }));
        this.app.use(helmet());
        this.app.use(cors({ origin: 'http://localhost:3000' }));
        this.app.use(cookieParser());
    }

    private registerRoutes(controllers): void {
        controllers.forEach((controller) => {
            const controllerInstance = new controller();

            this.app.use('/', controllerInstance.router);
        });
    }

    private connectWithDatabase(): void {
        const { MONGO_DATABASE, MONGO_PASSWORD, MONGO_PATH, MONGO_USER } = process.env;

        mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_PATH}/${MONGO_DATABASE}?retryWrites=true&w=majority`).then(() => {
            console.log(`Connected with database: ${MONGO_DATABASE}`);
        }).catch(error => {
            console.log(`Database connection error: ${error}`);
        });
    }

    public listen(port: number): void {
        this.app.listen(port, () => {
            console.log(`Server is running at: http://localhost:${port}`);
        });
    }
}

export default App;
