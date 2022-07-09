import bcrypt from 'bcrypt';
import { JWT_SECRET } from '../config/env.js';
import { ApiError } from '../config/errors/ApiError.js';
import { JWT_EXPIRE_TIME } from '../constants.js';
import { userService } from '../services/userService.js';
import { jwtSign } from '../utils/jwtUtils.js';

// Get by id for profile pages to look at their publications
async function getById(req, res, next) {
  try {
    const user = getPublicData(
      (await userService.getById(req.params.id)).toObject()
    );

    res.status(200).json({ user });
  } catch (e) {
    next(e);
  }
}

async function register(req, res, next) {
  try {
    const user = getPublicData((await userService.create(req.body)).toObject());
    const token = await createJWT(user);

    res.status(200).json({
      user,
      token,
    });
  } catch (e) {
    next(e);
  }
}

async function login(req, res, next) {
  try {
    const user = (await userService.getByEmail(req.body.email))?.toObject();

    if (
      !user ||
      (user && !(await bcrypt.compare(req.body.password, user.password)))
    ) {
      throw ApiError.badRequest('Invalid email or password');
    }

    const token = await createJWT(getPublicData(user));

    res.status(200).json({
      user,
      token,
    });
  } catch (e) {
    next(e);
  }
}

async function update(req, res, next) {
  try {
    // No need to parse the data because req.user is already parsed
    const updatedUser = await userService.update(req.user, req.body);

    res.status(200).json({
      user: updatedUser,
    });
  } catch (e) {
    next(e);
  }
}

function getMe(req, res) {
  res.status(200).json({
    user: req.user,
  });
}

function createJWT(userData) {
  return jwtSign(userData, JWT_SECRET, {
    expiresIn: JWT_EXPIRE_TIME,
  });
}

function getPublicData(user) {
  const { password, email, ...data } = user;
  return data;
}

export const userController = {
  getById,
  getMe,
  register,
  login,
  update,
};
