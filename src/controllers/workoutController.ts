import Workout from '../models/workoutModel';
import { Request, Response } from 'express';
import mongoose from 'mongoose';

// GET all workouts
export const getWorkouts = async (req: Request, res: Response) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
};

// GET a single workout
export const getWorkout = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ error: 'No such workout' });

    const workout = await Workout.findById(id);

    if (!workout) return res.status(404).json({ error: 'No such workout' });

    res.status(200).json(workout);
};

// POST a new workout
export const createWorkout = async (req: Request, res: Response) => {
    const { title, load, reps } = req.body;
    try {
        const workout = await Workout.create({ title, load, reps });
        res.status(200).json(workout);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE a workout
export const deleteWorkout = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ error: 'No such workout' });

    const workout = await Workout.findOneAndDelete({ _id: id });

    if (!workout) return res.status(400).json({ error: 'No such workout' });

    res.status(200).json(workout);
};

// UPDATE a workout
export const updateWorkout = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ error: 'No such workout' });

    const workout = await Workout.findOneAndUpdate({ _id: id }, {
        ...req.body
    });

    if (!workout) return res.status(400).json({ error: 'No such workout' });

    res.status(200).json(workout);
};