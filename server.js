// This is a simple Vite backend API handler for sending emails using nodemailer
import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

// ...existing code...

const PORT = process.env.PORT || 5174;
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
