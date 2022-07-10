import mongoose from 'mongoose';
import { ApiError } from '../config/errors/ApiError.js';
import { parseError } from '../utils/parseError.js';

export const apiErrorMiddleware = (err, req, res, next) => {
  if (
    !(err instanceof ApiError) &&
    !(err instanceof mongoose.Error.ValidationError)
  ) {
    console.log(err);
    return apiErrorMiddleware(ApiError.internal(), req, res, next);
  }

  const { status, message } = parseError(err);

  res.status(status).json({
    message,
  });
};
