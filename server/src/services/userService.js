import mongoose from 'mongoose';
import { ApiError } from '../config/errors/ApiError.js';
import { User } from '../models/User.js';

async function getById(id) {
  try {
    await User.create({});
    return await User.findById(id);
  } catch (e) {
    if (e instanceof mongoose.Error.CastError) {
      throw ApiError.badRequest('Invalid User ID');
    }

    throw e;
  }
}

export const userService = {
  getById,
};
