import express, { Router } from 'express';
import { loginUser, signupUser } from '../controllers/userController';

export const router: Router = express.Router();

// login
router.post('/login', loginUser);

// signup
router.post('/signup', signupUser);