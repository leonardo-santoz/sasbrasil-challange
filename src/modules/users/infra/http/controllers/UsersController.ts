import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import ListAllUsersService from '@modules/users/services/ListAllUsersService';
import UpdateUserService from '@modules/users/services/UpdateUserService';
import DeleteUserService from '@modules/users/services/DeleteUserService';

export default class UsersController {
    public async create(request: Request, response: Response): Promise<Response> {
        const userCreateRequestBody = request.body;

        try {
            const createUserService = container.resolve(CreateUserService);

            const user = await createUserService.createUser(userCreateRequestBody);

            delete user.password

            return response.json(user);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }

    public async listAll(request: Request, response: Response): Promise<Response> {
        const listAllUserService = container.resolve(ListAllUsersService);

        const users = await listAllUserService.listAll();

        return response.json(users);
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const UpdatedUserDataRequest = request.body
        
        try {
            const updatedUserService = container.resolve(UpdateUserService);
    
            updatedUserService.updateUser(id, UpdatedUserDataRequest)

            return response.status(200).send();
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        try {
            const deleteUserService = container.resolve(DeleteUserService)

            deleteUserService.deleteUser(id);
            
            return response.status(200).send();
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
}
