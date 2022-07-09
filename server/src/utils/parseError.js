import mongoose from 'mongoose';

export const parseError = (err) => {
  let message = err.message || 'Internal Server Error';
  let status = err.status || 500;

  if (err instanceof mongoose.Error.ValidationError) {
    message = Object.values(err.errors)
      .map((x) => x.properties.message)
      .join(', ');

    status = 400;
  }

  return {
    message,
    status,
  };
};
