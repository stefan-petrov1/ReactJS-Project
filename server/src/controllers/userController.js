import { userService } from '../services/userService.js';

async function getById(req, res, next) {
  try {
    return await userService.getById(req.params.id);
  } catch (e) {
    next(e);
  }
}

export const userController = {
  getById,
};
