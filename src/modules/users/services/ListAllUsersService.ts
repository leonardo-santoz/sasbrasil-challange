import { inject, injectable } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import User from '../infra/sequelize/entities/User.model';

@injectable() 
class ListAllUsersService {
    constructor (
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}

    public async listAll(): Promise<User[]> {
        const users = await this.usersRepository.findAll();
        
        return users;
    }
}

export default ListAllUsersService;