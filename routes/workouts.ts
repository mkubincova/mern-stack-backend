import express, { Request, Response, Router } from 'express';
import Workout from "../models/workoutModel";

export const router: Router = express.Router();

// GET all workouts
router.get('/', (req: Request, res: Response) => {
    res.json({ msg: 'Get all workouts' });
});

// GET a single workout
router.get('/:id', (req: Request, res: Response) => {
    res.json({ msg: 'Get a workout by id' });
});

// POST a new workout
router.post('/', async (req: Request, res: Response) => {
    const { title, load, reps } = req.body;
    try {
        const workout = await Workout.create({ title, load, reps });
        res.status(200).json(workout);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE a workout
router.delete('/:id', (req: Request, res: Response) => {
    res.json({ msg: 'Delete workout by id' });
});

// UPDATE a workout
router.patch('/:id', (req: Request, res: Response) => {
    res.json({ msg: 'Update a workout' });
});