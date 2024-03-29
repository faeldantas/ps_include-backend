import { Router}  from 'express';
import postsController from '../controllers/postsController.js';

const router = new Router();

router.post('/', postsController.create);
router.get('/:id', postsController.read);
router.put('/:id', postsController.update);
router.delete('/:id', postsController.delete);
router.get('/', postsController.show);

export default router;