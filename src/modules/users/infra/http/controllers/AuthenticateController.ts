import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

export default class AuthenticateController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        try {
            const authenticateUser = container.resolve(AuthenticateUserService);

            const { user, token } = await authenticateUser.authenticate({
                email, password
            })

            delete user.id;

            return response.json({ token, user });

        } catch (err) {
            return response.status(401).json({error: err.message});
        }
    }
}