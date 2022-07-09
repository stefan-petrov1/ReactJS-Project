import { Router } from 'express';
import { apiErrorMiddleware } from '../middlewares/apiErrorMiddleware.js';
import { userRouter } from '../routers/userRouter.js';

const router = Router();

router.use('/users', userRouter);
router.use(apiErrorMiddleware);

export const routes = router;
