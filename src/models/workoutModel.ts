import { Schema, model } from 'mongoose';
import { IWorkout, IWorkoutDocument, IWorkoutModel } from '../interfaces/IWorkout';

const WorkoutSchema: Schema<IWorkoutDocument> = new Schema({
    title: { type: String, required: true },
    reps: { type: Number, required: true },
    load: { type: Number, required: true },
}, { timestamps: true });

// register function with types
// WorkoutSchema.statics.buildWorkout = (args: IWorkout) => {
//     return new Workout(args);
// };

const Workout = model<IWorkoutDocument, IWorkoutModel>('Workout', WorkoutSchema);

export default Workout;