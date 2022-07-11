import { JWT_SECRET } from '../config/env.js';
import { JWT_EXPIRE_TIME } from '../constants.js';
import { jwtSign } from '../utils/jwtUtils.js';

function extractJWT(headers) {
  // [ authMethod, token ] - can't destructure because it might be undefined
  const sessionArr = headers['authorization']?.split(' ');

  if (
    !sessionArr ||
    (sessionArr && (sessionArr[0] !== 'Bearer' || !sessionArr[1]))
  ) {
    return undefined;
  }

  // The token
  return sessionArr[1];
}

function createJWT(data) {
  return jwtSign(data, JWT_SECRET, {
    expiresIn: JWT_EXPIRE_TIME,
  });
}

export const jwtService = {
  extractJWT,
  createJWT,
};
