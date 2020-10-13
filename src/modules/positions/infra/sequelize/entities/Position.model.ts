import User from '@modules/users/infra/sequelize/entities/User.model';
import Area from '@modules/areas/infra/sequelize/entities/Area.model';

import {
    Model,
    AutoIncrement,
    PrimaryKey,
    Column,
    CreatedAt,
    UpdatedAt,
    AllowNull,
    IsUUID,
    Table, 
    HasMany,
    ForeignKey
} from "sequelize-typescript";

@Table({ tableName: 'positions' })
class Position extends Model<Position> {

    @PrimaryKey
    @IsUUID(4)
    @AutoIncrement
    @Column
    id: string;

    @AllowNull(false)
    @Column
    name: string;

    @AllowNull(false)
    @Column
    description: string;

    @HasMany(() => User)
    users: User[]

    @AllowNull(false)
    @ForeignKey(() => Area)
    @Column
    area_id: number;

    @Column
    area: string;

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;
}

export default Position;