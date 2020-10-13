import { inject, injectable } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IAreasRepository from '@modules/areas/repositories/IAreasRepositories';
import IPositionsRepository from '@modules/positions/repositories/IPositionsRepository';
import User from '../infra/sequelize/entities/User.model';

@injectable()
class ListByIdUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
        @inject('AreasRepository')
        private areasRepository: IAreasRepository,
        @inject('PositionsRepository')
        private positionsRepository: IPositionsRepository
    ) { }

    public async listById(id: string): Promise<User | null> {
        const user = await this.usersRepository.findById(id);

        const position = await this.positionsRepository
            .findById(String(user?.position_id))
            
        const area = await this.areasRepository
            .findById(String(position?.area_id))
        console.log(area?.cordinator)

        const highers = {
            cordinator: area?.cordinator,
            manager: area?.manager
        }

        return {
            highers,
            user
        };
    }
}

export default ListByIdUserService;