import { inject, injectable } from 'tsyringe';

import Area from '@modules/areas/infra/sequelize/entities/Area.model';
import IUpdateAreaDTO from '@modules/areas/dtos/IUpdateAreaDTO';
import ICreateAreaDTO from '@modules/areas/dtos/ICreateAreaDTO';
import IAreasRepository from '@modules/areas/repositories/IAreasRepositories';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';

@injectable()
class AreasService {
    constructor(
        @inject('AreasRepository')
        private areasRepository: IAreasRepository,
        @inject('UsersRepository')
        private usersRepository: IUsersRepository
    ) { }

    public async create(createAreaData: ICreateAreaDTO): Promise<Area> {
        const areaFromRepo = await this.areasRepository
            .findByName(createAreaData.name);

        const nameExists = areaFromRepo?.name;

        if (nameExists)
            throw new AppError('Name already in use');

        const manager = await this.usersRepository.findById(createAreaData.manager_id)
        const cordinator = await this.usersRepository.findById(createAreaData.cordinator_id)

        if (!manager)
            throw new AppError('Incorrect manager id');

        if (!cordinator)
            throw new AppError('Incorrect cordinator id');

        const area = {
            ...createAreaData,
            manager: manager?.name,
            cordinator: cordinator?.name
        }

        await this.areasRepository.create(area)

        return area;
    }

    public async listById(id: string): Promise<Area | null> {
        const area = await this.areasRepository.findById(id)

        const areaId = area?.id

        if (!areaId)
            throw new AppError('Area not exists or id is incorrect')

        return area;
    }

    public async listAll(): Promise<Area[]> {
        const areas = await this.areasRepository.findAll();

        return areas;
    }

    public async update(id: string, updateAreaData: IUpdateAreaDTO): Promise<void> {
        const areaFromRepo = await this.areasRepository
            .findById(id);

        const areaId = areaFromRepo?.id

        if (!areaId)
            throw new AppError('Area not exists or id is incorrect')

        const manager = await this.usersRepository.findById(updateAreaData.manager_id)
        const cordinator = await this.usersRepository.findById(updateAreaData.cordinator_id)

        if (!manager)
            throw new AppError('Incorrect manager id');

        if (!cordinator)
            throw new AppError('Incorrect cordinator id');

        const area = {
            ...updateAreaData,
            manager: manager?.name,
            cordinator: cordinator?.name
        }
        
        await this.areasRepository.update(id, area)
    }

    public async delete(id: string): Promise<void> {
        const areaFromRepo = await this.areasRepository
            .findById(id);

        const areaId = areaFromRepo?.id

        if (!areaId)
            throw new AppError('Area not exists or id is incorrect')

        await this.areasRepository.delete(id)
    }
}

export default AreasService;