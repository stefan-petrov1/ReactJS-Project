import mongoose from 'mongoose';
import { ApiError } from '../config/errors/ApiError.js';
import { parseError } from '../utils/parseError.js';

export const apiErrorMiddleware = (err, req, res, next) => {
  let isUniqueError = isUniqueValidatorError(err);

  if (
    !(err instanceof ApiError) &&
    !(err instanceof mongoose.Error.ValidationError) &&
    !isUniqueError
  ) {
    console.log(err);
    return apiErrorMiddleware(ApiError.internal(), req, res, next);
  }

  const { status, message } = parseError(err, isUniqueError);

  res.status(status).json({
    message,
  });
};

function isUniqueValidatorError(err) {
  return err.name === 'MongoServerError' && err.code == 11000;
}
