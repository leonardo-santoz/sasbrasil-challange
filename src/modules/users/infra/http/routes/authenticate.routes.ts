import { Router } from 'express';

import AuthenticateController from '../controllers/AuthenticateController';

const authenticateRouter = Router();
const authenticateController = new AuthenticateController();

authenticateRouter.post('/',  authenticateController.create);

export default authenticateRouter; 