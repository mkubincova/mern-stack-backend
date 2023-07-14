"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// express app
const app = (0, express_1.default)();
const port = process.env.PORT;
// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});
//routes
app.get('/', (req, res) => {
    res.json({ mssg: 'Welecome to the app' });
});
// listen for requests
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
