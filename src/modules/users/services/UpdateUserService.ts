import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IUpdateUserDTO from '@modules/users/dtos/IUpdateUserDTO';
import User from '@modules/users/infra/sequelize/entities/User.model';

@injectable()
class UpdateUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) { }

    public async updateUser(id: string, updateUserData: IUpdateUserDTO): Promise<void> {
        const userFromRepo = await this.usersRepository
            .findById(id);

        const userExists = userFromRepo?.id

        if (!userExists)
            throw new Error('User not exists or id is incorrect')

        await this.usersRepository.update(id, updateUserData)
    }
}

export default UpdateUserService;