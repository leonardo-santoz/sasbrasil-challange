import { Router } from 'express';

import AreasController from '../controllers/AreasController';
import { confirmAuthenticate } from '@modules/users/infra/http/middlewares/confirmAuthenticate';

const areasRouter = Router();
const areasController = new AreasController();

areasRouter.use(confirmAuthenticate);

areasRouter.post('/', areasController.create);
areasRouter.get('/:id', confirmAuthenticate, areasController.listById);
areasRouter.get('/', confirmAuthenticate, areasController.listAll);
areasRouter.put('/:id', confirmAuthenticate, areasController.update);
areasRouter.delete('/:id', confirmAuthenticate, areasController.delete);

export default areasRouter;
