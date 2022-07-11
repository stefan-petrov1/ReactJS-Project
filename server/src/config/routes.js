import { Router } from 'express';
import { jobRouter } from '../routers/jobRouter.js';
import { userRouter } from '../routers/userRouter.js';

const router = Router();

router.use('/users', userRouter);
router.use('/jobs', jobRouter);

export const routes = router;
