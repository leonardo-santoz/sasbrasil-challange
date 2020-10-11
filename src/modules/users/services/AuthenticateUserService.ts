import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth'
import { injectable, inject } from 'tsyringe';
import { compare } from 'bcryptjs';

import IUsersRepository from '../repositories/IUsersRepository';
import User from '../infra/sequelize/entities/User.model';
import AppError from '@shared/errors/AppError';

interface IAuthenticateDataRequest {
    email: string;
    password: string;
}

interface IAuthenticateDataResponse {
    user: User,
    token: string
}

@injectable()
class AuthenticateUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) { }

    public async authenticate({ email, password }: IAuthenticateDataRequest):
        Promise<IAuthenticateDataResponse> {
        const user = await this.usersRepository.findByEmail(email);

        if (!user)
            throw new AppError('Check your credentials and try again');

        const passwordMatched = await compare(password, user.password);

        if(!passwordMatched)
            throw new AppError('Check your credentials and try again');
        
        const { secret, expiresIn } = authConfig.jwt;

        const token = sign({}, secret, {
            subject: user.id,
            expiresIn
        })

        return {
            user,
            token
        };
    }
}

export default AuthenticateUserService; 