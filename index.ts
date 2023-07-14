import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

// express app
const app: Express = express();
const port = process.env.PORT;

// middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.get('/', (req: Request, res: Response) => {
  res.json({ mssg: 'Welecome to the app' });
});

// listen for requests
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});