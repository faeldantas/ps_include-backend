import { Router}  from 'express';

import photoController from '../controllers/PhotoController.js';

const router = new Router();

router.post('/', photoController.store);
router.put('/:id', photoController.update);
router.delete('/:id', photoController.delete);

export default router;