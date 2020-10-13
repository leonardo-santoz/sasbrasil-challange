import { Router } from 'express';

import PositionsController from '../controllers/PositionsController';
import { confirmAuthenticate } from '@modules/users/infra/http/middlewares/confirmAuthenticate';

const positionsRouter = Router();
const positionsController = new PositionsController();

positionsRouter.use(confirmAuthenticate);

positionsRouter.post('/', positionsController.create);
positionsRouter.get('/:id', positionsController.listById);
positionsRouter.get('/', positionsController.listAll);
positionsRouter.put('/:id', positionsController.update);
positionsRouter.delete('/:id', positionsController.delete);

export default positionsRouter;
