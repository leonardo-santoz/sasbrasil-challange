import { inject, injectable } from 'tsyringe';

import IPositionsRepository from '@modules/positions/repositories/IPositionsRepository';
import ICreatePositionDTO from '@modules/positions/dtos/ICreatePositionDTO';
import IUpdatePositionDTO from '@modules/positions/dtos/IUpdatePositionDTO';
import Position from '@modules/positions/infra/sequelize/entities/Position.model';
import IAreasRepository from '@modules/areas/repositories/IAreasRepositories';
import AppError from '@shared/errors/AppError';

@injectable()
class PositionsService {
    constructor(
        @inject('PositionsRepository')
        private positionsRepository: IPositionsRepository,
        @inject('AreasRepository')
        private areasRepository: IAreasRepository
    ) { }

    public async create(createPositionData: ICreatePositionDTO): Promise<Position> {
        const positionFromRepo = await this.positionsRepository
            .findByName(createPositionData.name);

        const nameExists = positionFromRepo?.name;

        if (nameExists)
            throw new AppError('Name already in use.');

        const area = await this.areasRepository.findById(createPositionData.area_id);

        if(!area)
            throw new AppError('Incorrect area id');

        const position = {
            ...createPositionData,
            area: area?.name
        }

        await this.positionsRepository.create(position);

        return position;
    }

    public async listById(id: string): Promise<Position | null> {
        const position = await this.positionsRepository.findById(id);

        const positionId = position?.id;

        if (!positionId)
            throw new AppError('Position not exists or id is incorrect');

        return position;
    }

    public async listAll(): Promise<Position[]> {
        const positions = await this.positionsRepository.findAll();

        return positions;
    }

    public async update(id: string, updatePositionData: IUpdatePositionDTO): Promise<void> {
        const positionFromRepo = await this.positionsRepository
            .findById(id);

        const positionId = positionFromRepo?.id

        if (!positionId)
            throw new AppError('Position not exists or id is incorrect')

        const area = await this.areasRepository.findById(updatePositionData.area_id);

        if(!area)
            throw new AppError('Incorrect area id');

        const position = {
            ...updatePositionData,
            area: area?.name
        }

        await this.positionsRepository.update(id, position)
    }

    public async delete(id: string): Promise<void> {
        const positionFromRepo = await this.positionsRepository
            .findById(id);

        const positionId = positionFromRepo?.id

        if (!positionId)
            throw new AppError('position not exists or id is incorrect')

        await this.positionsRepository.delete(id)
    }
}

export default PositionsService;