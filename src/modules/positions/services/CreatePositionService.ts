import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';

import IPositionsRepository from '@modules/positions/repositories/IPositionsRepository';
import ICreatePositionDTO from '@modules/positions/dtos/ICreatePositionDTO';
import Position from '@modules/positions/infra/sequelize/entities/Position.model';

@injectable()
class CreatePositionService {
    constructor(
        @inject('PositionsRepository')
        private positionsRepository: IPositionsRepository,
    ) { }

    public async createPosition(createPositionData: ICreatePositionDTO): Promise<Position> {
        const positionFromRepo = await this.positionsRepository
            .findByName(createPositionData.name);

        const nameExists = positionFromRepo?.name;

        if (nameExists)
            throw new Error('Name already in use.');

        const position = await this.positionsRepository.create(createPositionData)

        return position;
    }
}

export default CreatePositionService;