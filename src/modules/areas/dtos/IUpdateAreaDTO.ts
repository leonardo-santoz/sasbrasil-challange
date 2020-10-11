import User from '@modules/users/infra/sequelize/entities/User.model';

export default interface IUpdateAreaDTO {
    name?: string;
    description?: string;
    manager_id?: User;
    cordinator_id?: User;
}