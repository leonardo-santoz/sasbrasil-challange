import { Router } from 'express';

import AuthenticateRouter from '@modules/users/infra/http/routes/authenticate.routes';
import UsersRouter from '@modules/users/infra/http/routes/users.routes';
import PositionsRouter from '@modules/positions/infra/http/routes/postitions.routes';

const routes = Router();

routes.use('/users', UsersRouter);
routes.use('/auth', AuthenticateRouter);
routes.use('/positions', PositionsRouter);

export default routes;