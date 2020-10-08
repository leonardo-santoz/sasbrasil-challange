import IPositionsRepository from '@modules/positions/repositories/IPositionsRepository';
import ICreatePositionDTO from '@modules/positions/dtos/ICreatePositionDTO';

import Position from '../entities/Position.model';

class PositionsRepository implements IPositionsRepository {

    constructor() {
        Position.init;
    }

    public async findByName(name: string): Promise<Position | null> {
        const position = await Position.findOne({
            where: { name: name }
        });

        return position;
    }

    public async create(data: ICreatePositionDTO): Promise<Position> {
        const position = await Position.create(data);

        return position;
    }
}

export default PositionsRepository;