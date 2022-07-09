import { Router } from 'express';
import { userController } from '../controllers/userController.js';

const router = Router();

router.get('/:id', userController.getById);

export const userRouter = router;
