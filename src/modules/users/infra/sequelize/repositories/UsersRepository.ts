import { inject, injectable } from 'tsyringe';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IUpdateUserDTO from '@modules/users/dtos/IUpdateUserDTO';
import IPositionsRepository from '@modules/positions/repositories/IPositionsRepository';

import User from '../entities/User.model';

@injectable()
class UsersRepository implements IUsersRepository {

    constructor(
        @inject('PositionsRepository')
        private positionsRepository: IPositionsRepository
    ) {
        User.init;
    }

    public async findById(id: string): Promise<User | null> {
        const user = await User.findOne({
            where: { id: id }
        });

        return user;
    }

    public async findByEmail(email: string): Promise<User | null> {
        const user = await User.findOne({
            where: { email: email }
        });

        return user;
    }

    public async findAll(): Promise<User[]> {
        const users = await User.findAll();

        return users;
    }

    public async create(data: ICreateUserDTO): Promise<User> {
        const position = await this.positionsRepository.findById(data.position_id)

        const user = {
            ...data,
            position: position?.name
        }

        await User.create(user);

        return user;
    }

    public async update(id: string, data: IUpdateUserDTO): Promise<void> {
        const position = await this.positionsRepository.findById(data.position_id)

        await User.update(
            {
                ...data,
                position: position?.name
            },
            {
                where: { id: id }
            });
    }

    public async delete(id: string): Promise<void> {
        await User.destroy({
            where: { id: id }
        });
    }
}

export default UsersRepository;