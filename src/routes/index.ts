import express, { Router } from 'express';
import { router as workoutRoutes } from './workouts';
import { router as userRoutes } from './user';

export const routes: Router = express.Router();

routes.use('/api/workouts', workoutRoutes);
routes.use('/api/user', userRoutes);