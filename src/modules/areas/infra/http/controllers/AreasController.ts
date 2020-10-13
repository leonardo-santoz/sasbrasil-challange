import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AreasService from '@modules/areas/services/AreasService';

export default class AreasController {
    public async create(request: Request, response: Response): Promise<Response> {
        const areaCreateRequestBody = request.body;

        const areasService = container.resolve(AreasService);

        const area = await areasService.create(areaCreateRequestBody);

        return response.json(area);
    }

    public async listById(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const areasService = container.resolve(AreasService);

        const area = await areasService.listById(id)

        return response.json(area)
    }

    public async listAll(request: Request, response: Response): Promise<Response> {
        const areasService = container.resolve(AreasService);

        const areas = await areasService.listAll();

        return response.json(areas);
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const updatedAreaDataRequest= request.body

        const areasService = container.resolve(AreasService);

        areasService.update(id, updatedAreaDataRequest)

        return response.status(200).send();
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const areasService = container.resolve(AreasService)

        areasService.delete(id);

        return response.status(200).send();
    }
}