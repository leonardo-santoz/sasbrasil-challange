import { Router } from 'express';

import UsersController from '../controllers/UsersController';
import { confirmAuthenticate } from '@modules/users/infra/http/middlewares/confirmAuthenticate';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.use(confirmAuthenticate);

usersRouter.post('/', usersController.create);
usersRouter.get('/:id', usersController.listById);
usersRouter.get('/', usersController.listAll);
usersRouter.put('/:id', usersController.update);
usersRouter.delete('/:id', usersController.delete);


export default usersRouter;
