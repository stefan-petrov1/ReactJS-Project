import { userService } from '../services/userService.js';

function getById(req, res) {
  try {
    userService.getById();
  } catch (e) {
    throw e;
  }
}

export const userController = {
  getById,
};
