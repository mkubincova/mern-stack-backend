import { Document, Model } from 'mongoose';

export interface IWorkout {
    title: String;
    reps: Number;
    load: Number;
}

export interface IWorkoutDocument extends IWorkout, Document { }

export interface IWorkoutModel extends Model<IWorkoutDocument> {
    // types for statics (added to model)
    // buildWorkout(args: IWorkout): IWorkoutDocument;
}