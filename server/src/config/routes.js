import { Router } from 'express';
import { userRouter } from '../routers/userRouter.js';

const router = Router();

router.use('/users', userRouter);

export const routes = router;
