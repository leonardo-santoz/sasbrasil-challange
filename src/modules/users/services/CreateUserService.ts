import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '@modules/users/infra/sequelize/entities/User.model';
import AppError from '@shared/errors/AppError';
import { sendMailTo } from '@shared/providers/MailProvider/nodemailer';

@injectable()
class CreateUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) { }

    public async createUser(createUserData: ICreateUserDTO): Promise<User> {
        const userFromRepo = await this.usersRepository
            .findByEmail(createUserData.email);

        const userId = userFromRepo?.email;

        if (userId)
            throw new AppError('E-mail already in use');

        await sendMailTo(createUserData.email);

        const hashedPassword = await hash(createUserData.password, 8);

        const user = await this.usersRepository.create({
            ...createUserData,
            password: hashedPassword
        });

        return user;
    }
}

export default CreateUserService;