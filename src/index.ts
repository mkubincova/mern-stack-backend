import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { routes } from "./routes";
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();

// express app
const app: Express = express();
const port = process.env.PORT;
const uri = process.env.MONGO_URI || '';

// cors options
const allowedOrigins = ['http://localhost:5173', 'https://mern-stack-frontend-neon.vercel.app'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

// middleware
app.use(cors(options));
app.use(express.json());

// routes
app.use(routes);

// Add a middleware to set CORS headers
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.path, req.method);

  // Set the necessary CORS headers
  res.header('Access-Control-Allow-Origin', req.header('origin'));
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  next();
});

// connect to db
mongoose.connect(uri)
  .then(() => {
    // listen for requests
    app.listen(port, () => {
      console.log(`⚡️[server]: Connected to DB & listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

