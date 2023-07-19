import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/userModel';

interface IJwtPayload {
    _id: string;
}

export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {

    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ error: 'Authorization token required' });

    const token = authorization.split(' ')[1];

    try {
        const { _id } = jwt.verify(token, process.env.AUTH_SECRET!) as IJwtPayload;
        req.user = await User.findOne({ _id }).select('_id');
        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({ error: 'Request is not authorized' });
    }
};