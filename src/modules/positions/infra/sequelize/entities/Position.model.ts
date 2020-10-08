import User  from '@modules/users/infra/sequelize/entities/User.model';

import {
    Model,
    AutoIncrement,
    PrimaryKey,
    Column,
    CreatedAt,
    UpdatedAt,
    AllowNull,
    IsUUID,
    Table, HasMany
} from "sequelize-typescript";

@Table
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

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;
}

export default Position;