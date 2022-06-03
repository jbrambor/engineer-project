import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { AuthenticationTokenMissingException } from '../exceptions/AuthenticationTokenMissingException';
import { WrongAuthenticationTokenException } from '../exceptions/WrongAuthenticationTokenException';
import { DataStoredInToken } from '../interfaces/dataStoredInToken';
import { RequestWithUser } from '../interfaces/requestWithUser.interface';
import { userModel } from '../models/user.model';

export async function authMiddleware(request: RequestWithUser, _: Response, next: NextFunction) {
    const cookies = request.cookies;
    if (cookies && cookies.Authorization) {
        const secret = 'somesupersecretkey';
        try {
            const verificationResponse = jwt.verify(cookies.Authorization, secret) as DataStoredInToken;
            const id = verificationResponse._id;
            const user: any = await userModel.findById(id);
            if (user) {
                request.user = user;
                next();
            } else {
                next(new WrongAuthenticationTokenException());
            }
        } catch (error) {
            next(new WrongAuthenticationTokenException());
        }
    } else {
        next(new AuthenticationTokenMissingException());
    }
}