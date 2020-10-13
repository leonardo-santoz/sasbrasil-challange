import { Router } from 'express';

import PositionsController from '../controllers/PositionsController';
import { confirmAuthenticate } from '@modules/users/infra/http/middlewares/confirmAuthenticate';

const positionsRouter = Router();
const positionsController = new PositionsController();

positionsRouter.post('/', positionsController.create);
positionsRouter.get('/:id', confirmAuthenticate, positionsController.listById);
positionsRouter.get('/', confirmAuthenticate, positionsController.listAll);
positionsRouter.put('/:id', confirmAuthenticate, positionsController.update);
positionsRouter.delete('/:id', confirmAuthenticate, positionsController.delete);

export default positionsRouter;
