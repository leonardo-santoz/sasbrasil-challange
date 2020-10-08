import { Router } from 'express';

import UsersRouter from '@modules/users/infra/http/routes/users.routes';
import AuthenticateRouter from '@modules/users/infra/http/routes/authenticate.routes';
const routes = Router();

routes.use('/users', UsersRouter)
routes.use('/auth', AuthenticateRouter)

export default routes;