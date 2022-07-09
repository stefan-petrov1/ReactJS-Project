import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    required: [true, 'First name is required'],
    type: String,
  },
  lastName: {
    required: [true, 'Last name is required'],
    type: String,
  },
  email: {
    required: [true, 'Email is required'],
    unique: [true, 'User with the same email already exists'],
    type: String,
  },
});

export const User = mongoose.model('User', userSchema);
