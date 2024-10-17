import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRoute } from './routes/userRoute.js';
import { residencyRoute } from './routes/residencyRoute.js';
dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Configure CORS to allow requests from your frontend
app.use(
  cors({
    origin: 'https://real-estate-test-deploy-six.vercel.app',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true, // Allow cookies to be sent with requests
  })
);

// Routes
app.use('/api/user', userRoute);
app.use('/api/residency', residencyRoute);

// Start the server
const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
