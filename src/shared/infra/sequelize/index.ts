import { Sequelize } from 'sequelize-typescript';

import User from '@modules/users/infra/sequelize/entities/User.model';
import Areas from '@modules/areas/infra/sequelize/entities/Area.model';
import Position from '@modules/positions/infra/sequelize/entities/Position.model';

class Database {
    public connection: Sequelize;

    constructor() {
        this.init();
    }

    init(): void {
        this.connection = new Sequelize({
            database: 'sasbrasil_db',
            dialect: 'postgres',
            username: 'postgres',
            password: 'saspostgres@',
            port: 5432,
            host: 'localhost'
        });

        this.connection.addModels([User, Areas, Position])
    }
}

const database: Database = new Database();

export default database;