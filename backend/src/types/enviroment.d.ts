declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'test' | 'production';
            PORT: number;
            API_BASE_URL: string;
            API_HOST: string;
            API_SECRET_KEY: string;
            MONGO_USER: string;
            MONGO_PASSWORD: string;
            MONGO_DATABASE: string;
            MONGO_PATH: string;
        }
    }
}
export { };
