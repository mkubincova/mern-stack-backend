"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
// express app
const app = (0, express_1.default)();
const port = process.env.PORT;
const uri = process.env.MONGO_URI || '';
// middleware
app.use(express_1.default.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});
// routes
app.use(routes_1.routes);
// connect to db
mongoose_1.default.connect(uri)
    .then(() => {
    // listen for requests
    app.listen(port, () => {
        console.log(`⚡️[server]: Connected to DB & listening on port ${port}`);
    });
})
    .catch((error) => {
    console.log(error);
});
