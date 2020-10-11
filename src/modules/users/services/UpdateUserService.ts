import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IUpdateUserDTO from '@modules/users/dtos/IUpdateUserDTO';
import AppError from '@shared/errors/AppError';

@injectable()
class UpdateUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) { }

    public async updateUser(id: string, updateUserData: IUpdateUserDTO): Promise<void> {
        const userFromRepo = await this.usersRepository
            .findById(id);

        const userId = userFromRepo?.id

        if (!userId)
            throw new AppError('User not exists or id is incorrect')
        
        await this.usersRepository.update(id, updateUserData)
    }
}

export default UpdateUserService;