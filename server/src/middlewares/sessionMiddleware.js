import { JWT_SECRET } from '../config/env.js';
import { ApiError } from '../config/errors/ApiError.js';
import { jwtVerify } from '../utils/jwtUtils.js';

export const sessionMiddleware = async (req, res, next) => {
  const sessionArr = req.headers['authorization']?.split(' ');

  if (
    !sessionArr ||
    (sessionArr && (sessionArr[0] !== 'Bearer' || !sessionArr[1]))
  ) {
    return next();
  }

  const token = sessionArr[1];

  if (token) {
    try {
      const { iat, exp, ...userData } = await jwtVerify(token, JWT_SECRET);
      req.user = userData;
    } catch (e) {
      return next();
    }
  }

  next();
};

export const allowUserMiddleware = async (req, res, next) => {
  if (!req.user) {
    return next(ApiError.unauthorized());
  }

  next();
};
