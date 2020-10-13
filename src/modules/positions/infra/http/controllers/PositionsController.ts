import { Request, Response } from 'express';
import { container } from 'tsyringe';

import PositionsService from '@modules/positions/services/PositionsService';

export default class PositionsController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { name, description, area_id } = request.body;

        const positionsService = container.resolve(PositionsService);

        const position = await positionsService.create({ name, description, area_id });

        return response.json(position);
    }

    public async listById(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const positionsService = container.resolve(PositionsService);

        const position = await positionsService.listById(id)

        return response.json(position)
    }

    public async listAll(request: Request, response: Response): Promise<Response> {
        const positionsService = container.resolve(PositionsService);

        const positions = await positionsService.listAll();

        return response.json(positions);
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { name, description, area_id } = request.body

        const positionsService = container.resolve(PositionsService);

        positionsService.update(id, { name, description, area_id })

        return response.status(200).send();
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        const positionsService = container.resolve(PositionsService)

        positionsService.delete(id);

        return response.status(200).send();
    }
}