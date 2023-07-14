import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { routes } from "./routes";
import mongoose from 'mongoose';

dotenv.config();

// express app
const app: Express = express();
const port = process.env.PORT;
const uri = process.env.MONGO_URI || '';

// middleware
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use(routes);

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
