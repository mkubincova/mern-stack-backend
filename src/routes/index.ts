import express, { Router } from 'express';
import { router as workoutRoutes } from './workouts';

export const routes: Router = express.Router();

routes.use('/api/workouts', workoutRoutes);