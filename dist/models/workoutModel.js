"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const WorkoutSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    reps: { type: Number, required: true },
    load: { type: Number, required: true },
}, { timestamps: true });
WorkoutSchema.statics.buildWorkout = (args) => {
    return new Workout(args);
};
const Workout = (0, mongoose_1.model)('Workout', WorkoutSchema);
exports.default = Workout;
