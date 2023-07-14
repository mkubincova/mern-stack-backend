"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
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
exports.router.post('/', (req, res) => {
    res.json({ msg: 'Post a new workout' });
});
// DELETE a workout
exports.router.delete('/:id', (req, res) => {
    res.json({ msg: 'Delete workout by id' });
});
// UPDATE a workout
exports.router.patch('/:id', (req, res) => {
    res.json({ msg: 'Update a workout' });
});
