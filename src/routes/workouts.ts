import express, { Request, Response, Router } from 'express';
import { createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout } from "../controllers/workoutController";

export const router: Router = express.Router();

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