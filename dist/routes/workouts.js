"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const workoutModel_1 = __importDefault(require("../models/workoutModel"));
exports.router = express_1.default.Router();
// GET all workouts
exports.router.get('/', (req, res) => {
    res.json({ msg: 'Get all workouts' });
});
// GET a single workout
exports.router.get('/:id', (req, res) => {
    res.json({ msg: 'Get a workout by id' });
});
// POST a new workout
exports.router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, load, reps } = req.body;
    try {
        const workout = yield workoutModel_1.default.create({ title, load, reps });
        res.status(200).json(workout);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
// DELETE a workout
exports.router.delete('/:id', (req, res) => {
    res.json({ msg: 'Delete workout by id' });
});
// UPDATE a workout
exports.router.patch('/:id', (req, res) => {
    res.json({ msg: 'Update a workout' });
});
