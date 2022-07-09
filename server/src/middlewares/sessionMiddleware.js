import { JWT_SECRET } from '../config/env.js';
import { ApiError } from '../config/errors/ApiError.js';
import { jwtVerify } from '../utils/jwtUtils.js';

export const sessionMiddleware = async (req, res, next) => {
  const [authMethod, token] = req.headers['authorization']?.split(' ');

  if (authMethod !== 'Bearer' || !token) {
    return next();
  }

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
