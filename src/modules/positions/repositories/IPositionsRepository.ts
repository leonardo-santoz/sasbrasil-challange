import Position from '@modules/positions/infra/sequelize/entities/Position.model';
import ICreatePositionDTO from '@modules/positions/dtos/ICreatePositionDTO';
import IUpdatePositionDTO from '@modules/positions/dtos/IUpdatePositionDTO';

export default interface IPositionsRepository {
    findById(id: string): Promise<Position | null>;
    findByName(name: string): Promise<Position | null>;
    findAll(): Promise<Position[]>;
    create(data: ICreatePositionDTO): Promise<Position>;
    update(id:string, data: IUpdatePositionDTO): Promise<void>;
    delete(id: string): Promise<void>;
}