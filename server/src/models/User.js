import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { SALT_ROUNDS } from '../constants.js';

const userSchema = new mongoose.Schema({
  firstName: {
    required: [true, 'First name is required'],
    type: String,
    minlength: [2, 'First name must be at least 2 characters long'],
  },
  lastName: {
    required: [true, 'Last name is required'],
    type: String,
    minlength: [2, 'Last name must be at least 2 characters long'],
  },
  email: {
    required: [true, 'Email is required'],
    unique: [true, 'User with the same email already exists'],
    type: String,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [3, 'Password must be at least 3 characters long'],
  },
});

userSchema.pre('validate', function (next) {
  if (this.password != this.rePassword) {
    this.invalidate('password', 'Passwords must match');
  }

  next();
});

userSchema.post('validate', async function () {
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
});

userSchema
  .virtual('rePassword')
  .get(function () {
    return this._rePassword;
  })
  .set(function (value) {
    this._rePassword = value;
  });

export const User = mongoose.model('User', userSchema);
