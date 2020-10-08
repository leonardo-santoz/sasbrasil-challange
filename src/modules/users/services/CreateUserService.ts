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
        // const verifyUserExists = this.usersRepository
        //     .findByEmail(createUserData.email);

        // if (verifyUserExists)
        //     throw Error('E-mail already in use');

        const hashedPassword = await hash(createUserData.password, 8);

        const user = await this.usersRepository.create({
            ...createUserData,
            password: hashedPassword
        });

        return user;
    }
}

export default CreateUserService;