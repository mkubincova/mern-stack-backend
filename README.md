# mern-stack-backend

Backend for React workout tracker. Build with Express.js server and Atlas database using Typescript. To run locally you need to specity these environment variables:
PORT, MONGO_URI, AUTH_SECRET (for JWT authorization)

## Build
```node
// transpiles typescript into javascript '/dist' folder
npm run build
```

## Start server
```node
// runs node command to start index.js from '/dist'
npm run start
```

## Start development server with nodemon
```node
// runs typescript compiler and nodemon concurrently
npm run dev
```
