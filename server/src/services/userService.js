import mongoose from 'mongoose';
import { ApiError } from '../config/errors/ApiError.js';
import { User } from '../models/User.js';

async function getById(id) {
  try {
    return await User.findById(id);
  } catch (e) {
    if (e instanceof mongoose.Error.CastError) {
      throw ApiError.badRequest('Invalid User ID');
    }

    throw e;
  }
}

function getByEmail(email) {
  return User.findOne({ email });
}

async function create(body) {
  if (await User.findOne({ email: body?.email })) {
    throw ApiError.badRequest('User with the same email already exists');
  }

  return User.create(body);
}

async function update(user, data) {
  if (typeof data === 'object' && Array.isArray(data)) {
    throw ApiError.badRequest('Invalid body');
  }

  const updatedValue = {
    ...user,
    ...data,
  };

  await User.updateOne(
    { _id: user._id },
    { $set: updatedValue },
    { runValidators: true }
  );

  return updatedValue;
}

export const userService = {
  getById,
  create,
  getByEmail,
  update,
};
