import { inject, injectable } from 'tsyringe';
import IPositionsRepository from '@modules/positions/repositories/IPositionsRepository';
import ICreatePositionDTO from '@modules/positions/dtos/ICreatePositionDTO';
import IUpdatePositionDTO from '@modules/positions/dtos/IUpdatePositionDTO';
import IAreasRepository from '@modules/areas/repositories/IAreasRepositories';

import Position from '../entities/Position.model';

@injectable()
class PositionsRepository implements IPositionsRepository {

    constructor(
        @inject('AreasRepository')
        private areasRepository: IAreasRepository

    ) {
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
        const area = await this.areasRepository.findById(data.area_id)

        const position = {
            ...data,
            area: area?.name
        }

        await Position.create(position);

        return position;
    }

    public async update(id: string, data: IUpdatePositionDTO): Promise<void> {
        const area = await this.areasRepository.findById(data.area_id)
        console.log('chegou')
        await Position.update(
            {
                ...data,
                area: area?.name
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