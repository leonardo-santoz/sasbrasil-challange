import IAreasRepository from '@modules/areas/repositories/IAreasRepositories';
import ICreateAreaDTO from '@modules/areas/dtos/ICreateAreaDTO';
import IUpdateAreaDTO from '@modules/areas/dtos/IUpdateAreaDTO';

import Area from '../entities/Area.model';

class AreasRepository implements IAreasRepository {

    constructor() {
        Area.init;
    }

    public async findById(id: string): Promise<Area | null> {
        const area = await Area.findOne({
            where: { id: id }
        });

        return area;
    }

    public async findByName(name: string): Promise<Area | null> {
        const area = await Area.findOne({
            where: { name: name }
        });

        return area;
    }

    public async findAll(): Promise<Area[]> {
        const area = await Area.findAll();

        return area;
    }

    public async create(data: ICreateAreaDTO): Promise<Area> {
        const area = await Area.create(data);

        return area;
    }

    public async update(id: string, data: IUpdateAreaDTO): Promise<void> {
        const AreaUpdated = await Area.update(
            {
                name: data.name,
                description: data.description,
                manager_id: data.manager_id,
                cordinator_id: data.cordinator_id
            },
            {
                where: { id: id }
            });
    }

    public async delete(id: string): Promise<void> {
        await Area.destroy({
            where: { id: id }
        });
    }
}

export default AreasRepository;