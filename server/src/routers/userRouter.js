import { Router } from 'express';
import { userController } from '../controllers/userController.js';
import { allowUserMiddleware } from '../middlewares/sessionMiddleware.js';

const router = Router();

router.get('/me', allowUserMiddleware, userController.getMe);
router.get('/:id', userController.getById);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.put('/update', allowUserMiddleware, userController.update);

export const userRouter = router;
