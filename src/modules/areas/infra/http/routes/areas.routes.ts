import { Router } from 'express';

import AreasController from '../controllers/AreasController';
import { confirmAuthenticate } from '@modules/users/infra/http/middlewares/confirmAuthenticate';

const areasRouter = Router();
const areasController = new AreasController();

areasRouter.use(confirmAuthenticate);

areasRouter.post('/', areasController.create);
areasRouter.get('/:id', areasController.listById);
areasRouter.get('/', areasController.listAll);
areasRouter.put('/:id', areasController.update);
areasRouter.delete('/:id', areasController.delete);

export default areasRouter;
