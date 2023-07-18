import User from '../models/userModel';
import { Request, Response } from 'express';
import mongoose from 'mongoose';

// login user
export const loginUser = async (req: Request, res: Response) => {
    res.json({ msg: 'login' });
};

// signup user
export const signoupUser = async (req: Request, res: Response) => {
    res.json({ msg: 'signup' });
};