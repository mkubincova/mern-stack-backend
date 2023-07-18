import User from '../models/userModel';
import { Request, Response } from 'express';

// login user
export const loginUser = async (req: Request, res: Response) => {
    res.json({ msg: 'login' });
};

// signup user
export const signupUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await User.signup(email, password);
        res.status(201).json({ email, user });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};