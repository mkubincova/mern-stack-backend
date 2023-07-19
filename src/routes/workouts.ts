import express, { Router } from 'express';
import { createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout } from "../controllers/workoutController";
import { requireAuth } from '../middleware/requireAuth';

export const router: Router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

// GET all workouts
router.get('/', getWorkouts);

// GET a single workout
router.get('/:id', getWorkout);

// POST a new workout
router.post('/', createWorkout);

// DELETE a workout
router.delete('/:id', deleteWorkout);

// UPDATE a workout
router.patch('/:id', updateWorkout);