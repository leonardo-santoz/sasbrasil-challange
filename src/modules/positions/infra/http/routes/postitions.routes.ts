import { Router } from 'express';

import PositionsController from '../controllers/PositionsController';

const positionsRouter = Router();
const positionsController = new PositionsController();

positionsRouter.post('/', positionsController.create);

export default positionsRouter;
