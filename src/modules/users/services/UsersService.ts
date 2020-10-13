import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IAreasRepository from '@modules/areas/repositories/IAreasRepositories';
import IPositionsRepository from '@modules/positions/repositories/IPositionsRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IUpdateUserDTO from '@modules/users/dtos/IUpdateUserDTO';
import User from '@modules/users/infra/sequelize/entities/User.model';
import AppError from '@shared/errors/AppError';

@injectable()
class UsersService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
        @inject('AreasRepository')
        private areasRepository: IAreasRepository,
        @inject('PositionsRepository')
        private positionsRepository: IPositionsRepository
    ) { }

    public async create(createUserData: ICreateUserDTO): Promise<User> {
        const userFromRepo = await this.usersRepository
            .findByEmail(createUserData.email);

        const userId = userFromRepo?.email;

        if (userId)
            throw new AppError('E-mail already in use');

        // await sendMailTo(createUserData.email);

        const hashedPassword = await hash(createUserData.password, 8);

        const user = await this.usersRepository.create({
            ...createUserData,
            password: hashedPassword
        });

        return user;
    }

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

    public async listAll(): Promise<User[]> {
        const users = await this.usersRepository.findAll();
        
        return users;
    }

    public async update(id: string, updateUserData: IUpdateUserDTO): Promise<void> {
        const userFromRepo = await this.usersRepository
            .findById(id);

        const userId = userFromRepo?.id

        if (!userId)
            throw new AppError('User not exists or id is incorrect')
        
        let hashedPassword = '';

        if(updateUserData.password) 
            hashedPassword = await hash(updateUserData.password, 8);

        await this.usersRepository.update(id, {
            ...updateUserData, 
            password: hashedPassword
        })
    }

    public async delete(id: string): Promise<void> {
        const userFromRepo = await this.usersRepository
            .findById(id);

        const userId = userFromRepo?.id

        if (!userId)
            throw new AppError('User not exists or id is incorrect')

        await this.usersRepository.delete(id)
    }
}

export default UsersService;