import User from '@modules/users/infra/sequelize/entities/User.model';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

export default interface IUsersRepository {
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    create(data: ICreateUserDTO): Promise<User>;
    findAll(): Promise<User[]>;
    // update(id: string): Promise<User>;
    delete(id: string): Promise<void>;
}