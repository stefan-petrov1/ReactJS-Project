import mongoose from 'mongoose';
import { DB_URI } from './env.js';

export const initDb = async () => {
  await mongoose.connect(DB_URI);
  console.log('Successfully connected to database!');
};
