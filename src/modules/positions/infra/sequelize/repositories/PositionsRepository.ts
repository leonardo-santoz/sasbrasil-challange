import IPositionsRepository from '@modules/positions/repositories/IPositionsRepository';
import ICreatePositionDTO from '@modules/positions/dtos/ICreatePositionDTO';
import IUpdatePositionDTO from '@modules/positions/dtos/IUpdatePositionDTO';

import Position from '../entities/Position.model';

class PositionsRepository implements IPositionsRepository {

    constructor() {
        Position.init;
    }

    public async findById(id: string): Promise<Position | null> {
        const position = await Position.findOne({
            where: { id: id }
        });

        return position;
    }

    public async findByName(name: string): Promise<Position | null> {
        const position = await Position.findOne({
            where: { name: name }
        });

        return position;
    }

    public async findAll(): Promise<Position[]> {
        const positions = await Position.findAll();

        return positions;
    }

    public async create(data: ICreatePositionDTO): Promise<Position> {
        const position = await Position.create(data);

        return position;
    }

    public async update(id: string, data: IUpdatePositionDTO): Promise<void> {
        const positionUpdated = await Position.update(
            {
                name: data.name,
                description: data.description
            },
            {
                where: { id: id }
            });
    }

    public async delete(id: string): Promise<void> {
        await Position.destroy({
            where: { id: id }
        });
    }
}

export default PositionsRepository;