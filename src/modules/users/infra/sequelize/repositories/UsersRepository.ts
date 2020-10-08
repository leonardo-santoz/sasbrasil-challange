import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

import User from '../entities/User.model';

class UsersRepository implements IUsersRepository {

    constructor() {
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
        const user = await User.create(data);

        return user;
    }

    // public async update(id: string): Promise<User> {
    //     const user = await this.findByid(id);

    //     const userUpdated = await this.sequelizeRepository.update(user);

    //     return userUpdated;
    // }

    public async delete(id: string): Promise<void> {
        await User.destroy({
            where: { id: id }
        });
    }
}

export default UsersRepository;