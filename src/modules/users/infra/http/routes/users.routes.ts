import { Router } from 'express';

import UsersController from '../controllers/UsersController';
import { confirmAuthenticate } from '@modules/users/infra/http/middlewares/confirmAuthenticate';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/', usersController.create);
usersRouter.get('/:id', confirmAuthenticate, usersController.listById);
usersRouter.get('/', confirmAuthenticate, usersController.listAll);
usersRouter.put('/:id', confirmAuthenticate, usersController.update);
usersRouter.delete('/:id', confirmAuthenticate, usersController.delete);


export default usersRouter;
