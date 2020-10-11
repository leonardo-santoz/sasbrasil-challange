import { Router } from 'express';

import AreasController from '../controllers/AreasController';

const areasRouter = Router();
const areasController = new AreasController();

areasRouter.post('/', areasController.create);
areasRouter.get('/:id', areasController.listById);
areasRouter.get('/', areasController.listAll);
areasRouter.put('/:id', areasController.update);
areasRouter.delete('/:id', areasController.delete);

export default areasRouter;
