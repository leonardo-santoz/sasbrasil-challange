import { inject, injectable } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import User from '../infra/sequelize/entities/User.model';

@injectable() 
class ListByIdUserService {
    constructor (
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}

    public async listById(id: string): Promise<User | null> {
        const user = await this.usersRepository.findById(id);

        return user;
    }
}

export default ListByIdUserService;