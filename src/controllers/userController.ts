import User from '../models/userModel';
import { Request, Response } from 'express';
import jwt from "jsonwebtoken";

const createToken = (_id: string) => {
    if (!process.env.AUTH_SECRET) {
        throw new Error('AUTH_SECRET must be defined');
    }
    return jwt.sign({ _id }, process.env.AUTH_SECRET, { expiresIn: '3d' });
};


// login user
export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);

        // create token
        const token = createToken(user._id);

        res.status(201).json({ email, token });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// signup user
export const signupUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await User.signup(email, password);

        // create token
        const token = createToken(user._id);

        res.status(201).json({ email, token });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};