import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import ListAllUsersService from '@modules/users/services/ListAllUsersService';

export default class UsersController {
    public async create(request: Request, response: Response): Promise<Response> {
        const userCreateRequestBody = request.body;

        const createUser = container.resolve(CreateUserService);

        const user = await createUser.execute(userCreateRequestBody);

        return response.json(user);
    }

    public async listAll(request: Request, response: Response): Promise<Response> {
        const userService = container.resolve(ListAllUsersService);

        const users = await userService.listAll();

        return response.json(users);
    }
}
