"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const workoutController_1 = require("../controllers/workoutController");
exports.router = express_1.default.Router();
// GET all workouts
exports.router.get('/', workoutController_1.getWorkouts);
// GET a single workout
exports.router.get('/:id', workoutController_1.getWorkout);
// POST a new workout
exports.router.post('/', workoutController_1.createWorkout);
// DELETE a workout
exports.router.delete('/:id', workoutController_1.deleteWorkout);
// UPDATE a workout
exports.router.patch('/:id', workoutController_1.updateWorkout);
