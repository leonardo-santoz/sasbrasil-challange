import {
    Model,
    AutoIncrement,
    PrimaryKey,
    IsUUID,
    Column,
    CreatedAt,
    UpdatedAt,
    AllowNull,
    HasMany,
    Unique,
    ForeignKey,
    BelongsTo,
    Table, HasOne
} from "sequelize-typescript";

import Area from '@modules/areas/infra/sequelize/entities/Area.model';
import Position from '@modules/positions/infra/sequelize/entities/Position.model';

@Table({ tableName: 'users' })
class User extends Model<User> {

    @PrimaryKey
    @IsUUID(4)
    @AutoIncrement
    @Column
    id: string;

    @AllowNull(false)
    @Column
    name: string;

    @AllowNull(false)
    @Unique(true)
    @Column
    email: string;

    @AllowNull(false)
    @Column
    password: string;

    @Column
    phone_number: string;

    @AllowNull(false)
    @ForeignKey(() => Position)
    @Column
    position_id: number;

    // @BelongsTo(() => Area)
    // area: Area;

    // @AllowNull(false)
    // @ForeignKey(() => Area)
    // @Column
    // area_id: number;

    // @AllowNull(false)
    // @HasMany(() => Area)
    // @Column
    // interest_areas: Area[];

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;
}

User.init;

export default User;