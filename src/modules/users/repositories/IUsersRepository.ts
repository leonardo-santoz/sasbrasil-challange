import User from '@modules/users/infra/sequelize/entities/User.model';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IUpdateUserDTO from '@modules/users/dtos/IUpdateUserDTO';

export default interface IUsersRepository {
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    create(data: ICreateUserDTO): Promise<User>;
    findAll(): Promise<User[]>;
    update(id:string, data: IUpdateUserDTO): Promise<void>;
    delete(id: string): Promise<void>;
}