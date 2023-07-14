import express, { Request, Response, Router } from 'express';

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
router.post('/', (req: Request, res: Response) => {
    res.json({ msg: 'Post a new workout' });
});

// DELETE a workout
router.delete('/:id', (req: Request, res: Response) => {
    res.json({ msg: 'Delete workout by id' });
});

// UPDATE a workout
router.patch('/:id', (req: Request, res: Response) => {
    res.json({ msg: 'Update a workout' });
});