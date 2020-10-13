import {
    Model,
    AutoIncrement,
    PrimaryKey,
    Column,
    CreatedAt,
    UpdatedAt,
    AllowNull,
    IsUUID,
    ForeignKey,
    Table,
    HasMany
} from "sequelize-typescript";

import User from '@modules/users/infra/sequelize/entities/User.model';
import Position from '@modules/positions/infra/sequelize/entities/Position.model';

@Table({ tableName: 'areas' })
class Area extends Model<Area> {

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

    @ForeignKey(() => User)
    @Column
    manager_id: number;

    @ForeignKey(() => User)
    @Column
    cordinator_id: number;

    @HasMany(() => Position)
    users: User[]

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;
}

export default Area;