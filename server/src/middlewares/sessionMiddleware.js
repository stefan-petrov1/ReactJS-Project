import { JWT_SECRET } from '../config/env.js';
import { ApiError } from '../config/errors/ApiError.js';
import { jwtService } from '../services/jwtService.js';
import { jwtVerify } from '../utils/jwtUtils.js';

export const sessionMiddleware = async (req, res, next) => {
  const token = jwtService.extractJWT(req.headers);

  if (!token) {
    return next();
  }

  try {
    const { iat, exp, ...userData } = await jwtVerify(token, JWT_SECRET);
    req.user = userData;
  } catch (e) {
    req.user = undefined;
  } finally {
    next();
  }
};

export const allowUserMiddleware = async (req, res, next) => {
  if (!req.user) {
    return next(ApiError.unauthorized());
  }

  next();
};
