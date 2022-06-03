import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction, Router } from 'express';
import { userModel } from '../models/user.model';
import { UserWithThatEmailAlreadyExistsException } from '../exceptions/UserWithThatEmailAlreadyExistsException';
import { WrongCredentialsException } from '../exceptions/WrongCredentialsException';
import { User } from '../interfaces/user.interface';
import { TokenData } from '../interfaces/tokenData.interface';
import { DataStoredInToken } from '../interfaces/dataStoredInToken';

export class AuthenticationController {
    public path = '/auth';
    public router = Router();

    private user = userModel;

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`${this.path}/register`, this.registration);
        this.router.post(`${this.path}/login`, this.login);
        this.router.post(`${this.path}/logout`, this.loggingOut);
    }

    private registration = async (request: Request, response: Response, next: NextFunction) => {
        const userData = request.body;
        if (
            await this.user.findOne({ email: userData.email })
        ) {
            next(new UserWithThatEmailAlreadyExistsException(userData.email));
        } else {
            const hashedPassword = await bcrypt.hash(userData.password, 10);
            const user: any = await this.user.create({
                ...userData,
                password: hashedPassword,
            });
            user.password = undefined;
            const tokenData = this.createToken(user);
            response.setHeader('Set-Cookie', [this.createCookie(tokenData)]);
            response.send(user);
        }
    }

    private login = async (request: Request, response: Response, next: NextFunction) => {
        const logInData = request.body;
        const user: any = await this.user.findOne({ email: logInData.email });
        if (user) {
            const isPasswordMatching = await bcrypt.compare(logInData.password, user.password);
            if (isPasswordMatching) {
                user.password = undefined;
                const tokenData = this.createToken(user);
                response.setHeader('Set-Cookie', [this.createCookie(tokenData)]);
                response.send(user);
            } else {
                next(new WrongCredentialsException());
            }
        } else {
            next(new WrongCredentialsException());
        }
    }

    private loggingOut = (_: Request, response: Response) => {
        response.setHeader('Set-Cookie', ['Authorization=;Max-age=0']);
        response.send(200);
    }

    private createToken(user: User): TokenData {
        const expiresIn = 60 * 60; // an hour
        const secret = 'somesupersecretkey';
        const dataStoredInToken: DataStoredInToken = {
            _id: user._id,
        };
        return {
            expiresIn,
            token: jwt.sign(dataStoredInToken, secret, { expiresIn }),
        };
    }

    private createCookie(tokenData: TokenData) {
        return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn}`;
    }
}