import { inject, injectable } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';

@injectable()
class DeleteUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) { }

    public async deleteUser(id: string): Promise<void> {
        const userFromRepo = await this.usersRepository
            .findById(id);

        const userId = userFromRepo?.id

        if (!userId)
            throw new AppError('User not exists or id is incorrect')

        await this.usersRepository.delete(id)
    }
}

export default DeleteUserService;