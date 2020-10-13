import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UsersService from '@modules/users/services/UsersService';

export default class UsersController {
    public async create(request: Request, response: Response): Promise<Response> {
        const userCreateRequestBody = request.body;

        const userService = container.resolve(UsersService);

        const user = await userService.create(userCreateRequestBody);

        delete user.password

        return response.json(user);
    }

    public async listById(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const userService = container.resolve(UsersService);

        const user = await userService.listById(id);

        return response.json(user);
    }

    public async listAll(request: Request, response: Response): Promise<Response> {
        const userService = container.resolve(UsersService);

        const users = await userService.listAll();

        return response.json(users);
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const UpdatedUserDataRequest = request.body

        const userService = container.resolve(UsersService);

        userService.update(id, UpdatedUserDataRequest)

        return response.status(200).send();
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        const userService = container.resolve(UsersService)

        userService.delete(id);

        return response.status(200).send();
    }
}
