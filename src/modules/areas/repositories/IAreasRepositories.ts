import Area from '@modules/areas/infra/sequelize/entities/Area.model';
import ICreateAreaDTO from './../dtos/ICreateAreaDTO';
import IUpdateAreaDTO from './../dtos/IUpdateAreaDTO';

export default interface IAreasRepository {
    findById(id: string): Promise<Area | null>;
    findByName(name: string): Promise<Area | null>;
    create(data: ICreateAreaDTO): Promise<Area>;
    findAll(): Promise<Area[]>;
    update(id: string, data: IUpdateAreaDTO): Promise<void>;
    delete(id: string): Promise<void>;
}