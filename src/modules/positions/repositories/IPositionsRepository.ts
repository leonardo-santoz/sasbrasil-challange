import Position from '@modules/positions/infra/sequelize/entities/Position.model';
import ICreatePositionDTO from '@modules/positions/dtos/ICreatePositionDTO';

export default interface IPositionsRepository {
    findByName(name: string): Promise<Position | null>;
    create(data: ICreatePositionDTO): Promise<Position>;
}