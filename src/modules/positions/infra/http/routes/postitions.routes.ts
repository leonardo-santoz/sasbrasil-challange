import { Router } from 'express';

import PositionsController from '../controllers/PositionsController';

const positionsRouter = Router();
const positionsController = new PositionsController();

positionsRouter.post('/', positionsController.create);
positionsRouter.get('/:id', positionsController.listById);
positionsRouter.get('/', positionsController.listAll);
positionsRouter.put('/:id', positionsController.update);
positionsRouter.delete('/:id', positionsController.delete);

export default positionsRouter;
