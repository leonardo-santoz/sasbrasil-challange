import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '@modules/users/infra/sequelize/entities/User.model';

@injectable()
class CreateUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) { }

    public async execute(createUserData: ICreateUserDTO): Promise<User> {
        const userFromRepo = await this.usersRepository
            .findByEmail(createUserData.email);

        const userExists = userFromRepo?.email;

        if (userExists)
            throw new Error('E-mail already in use');

        const hashedPassword = await hash(createUserData.password, 8);

        const user = await this.usersRepository.create({
            ...createUserData,
            password: hashedPassword
        });

        return user;
    }
}

export default CreateUserService;