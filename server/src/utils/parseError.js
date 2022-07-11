import mongoose from 'mongoose';

export const parseError = (err) => {
  let message = err.message || 'Internal Server Error';
  let status = err.status || 500;

  if (err instanceof mongoose.Error.ValidationError) {
    message = Object.values(err.errors)
      .map((x) => {
        if (x instanceof mongoose.Error.CastError) {
          return err.message;
        }

        return x.properties.message;
      })
      .join(', ');

    status = 400;
  }

  if (err instanceof mongoose.Error.CastError) {
    message = err.message;
  }

  return {
    message,
    status,
  };
};
