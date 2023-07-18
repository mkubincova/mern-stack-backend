import { Document, Model } from 'mongoose';

export interface IWorkout {
    title: string;
    reps: number;
    load: number;
}

export interface IWorkoutDocument extends IWorkout, Document { }

export interface IWorkoutModel extends Model<IWorkoutDocument> {
    // types for statics (added to model)
    // buildWorkout(args: IWorkout): IWorkoutDocument;
}