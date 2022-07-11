import { Router } from 'express';
import { jobController } from '../controllers/jobController.js';
import { allowUserMiddleware } from '../middlewares/sessionMiddleware.js';

const router = Router();

router.get('/all', jobController.getAll);
router.get('/recent', jobController.getRecent);
router.get('/:id', jobController.getById);
router.post('/create', allowUserMiddleware, jobController.create);
router.put('/update/:id', allowUserMiddleware, jobController.updateById);
router.delete('/delete/:id', allowUserMiddleware, jobController.deleteById);

export const jobRouter = router;
