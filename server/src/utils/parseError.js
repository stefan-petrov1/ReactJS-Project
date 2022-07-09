import mongoose from 'mongoose';

export const parseError = (err, isUniqueError) => {
  let message = err.message || 'Internal Server Error';
  let status = err.status || 500;

  if (err instanceof mongoose.Error.ValidationError) {
    message = Object.values(err.errors)
      .map((x) => x.properties.message)
      .join(', ');

    status = 400;
  }

  if (isUniqueError) {
    const identifier = Object.keys(err.keyValue)[0];

    message = `User with the same ${identifier} already exists`;
    status = 400;
  }

  return {
    message,
    status,
  };
};
