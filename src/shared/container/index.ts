import { container } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/sequelize/repositories/UsersRepository';

import IPositionsRepository from '@modules/positions/repositories/IPositionsRepository';
import PositionsRepository from '@modules/positions/infra/sequelize/repositories/PositionsRepository';

import IAreasRepository from '@modules/areas/repositories/IAreasRepositories';
import AreasRepository from '@modules/areas/infra/sequelize/repositories/AreasRepository';

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository
)

container.registerSingleton<IPositionsRepository>(
    'PositionsRepository',
    PositionsRepository
)

container.registerSingleton<IAreasRepository>(
    'AreasRepository',
    AreasRepository
)