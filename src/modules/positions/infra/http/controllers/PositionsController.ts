import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreatePositionService from '@modules/positions/services/CreatePositionService';

export default class PositionsController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        const createPositionService = container.resolve(CreatePositionService);

        const position = await createPositionService.createPosition({ name, description });

        return response.json(position);
    }
}