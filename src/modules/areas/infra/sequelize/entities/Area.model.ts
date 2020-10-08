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
    Table
} from "sequelize-typescript";

import User from '@modules/users/infra/sequelize/entities/User.model';

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

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;
}

export default Area;