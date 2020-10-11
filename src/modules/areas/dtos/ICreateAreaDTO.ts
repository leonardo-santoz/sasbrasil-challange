import User from '@modules/users/infra/sequelize/entities/User.model';

export default interface ICreateAreaDTO {
    name: string;
    description?: string;
    manager_id: User;
    cordinator_id: User;
}