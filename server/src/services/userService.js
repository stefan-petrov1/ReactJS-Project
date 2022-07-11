import mongoose from 'mongoose';
import { ApiError } from '../config/errors/ApiError.js';
import { User } from '../models/User.js';

async function getById(id) {
  if (!mongoose.isValidObjectId(id)) {
    throw ApiError.badRequest('Invalid User ID');
  }

  const user = await User.findById(id);

  if (!user) {
    throw ApiError.badRequest('No user was found with that ID');
  }

  return user;
}

function getByEmail(email) {
  return User.findOne({ email });
}

async function create(body) {
  return User.create(body);
}

async function update(id, data, currentUserId) {
  if (typeof data !== 'object' || Array.isArray(data)) {
    throw ApiError.badRequest('Invalid body');
  }

  const userDoc = await getById(id);

  if (userDoc._id != currentUserId) {
    throw ApiError.badRequest('Only owner can edit his profile');
  }

  const { acknowledged } = await userDoc.updateOne(data, {
    runValidators: true,
  });

  return acknowledged;
}

export const userService = {
  getById,
  create,
  getByEmail,
  update,
};
