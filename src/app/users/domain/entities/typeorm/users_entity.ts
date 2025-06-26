import { Column, Driver, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TeamEntity } from "../../../../teams/domain/entities/typeorm/team_entity";
import { DriverEntity } from "../../../../drivers/domain/entities/typeorm/driver_entity";
import { CONNREFUSED } from "dns";


@Entity('Users')
export class UsersEntity {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column("varchar")
    email: string;

    @Column("varchar")
    password: string;

    @OneToOne(() => TeamEntity)
    @JoinColumn({ name: 'id_favorite_team_fk' })
    id_favorite_team_fk?: TeamEntity;

    @OneToOne(() => DriverEntity)
    @JoinColumn({ name: 'id_favorite_driver_fk' })
    id_favorite_driver_fk?: DriverEntity;

    @Column("varchar")
    country?: string;

    @Column("varchar")
    phone?: string;

    constructor(userEntityJson: UsersEntityJson) {
        this.id = userEntityJson.id;
        this.email = userEntityJson.email;
        this.password = userEntityJson.password;
        this.id_favorite_team_fk = userEntityJson.id_favorite_team_fk;
        this.id_favorite_driver_fk = userEntityJson.id_favorite_driver_fk;
        this.country = userEntityJson.country;
        this.phone = userEntityJson.phone
    }

}


export type UsersEntityJson = {
    id?: number,
    email: string,
    password: string,
    username: string,
    id_favorite_team_fk: TeamEntity | undefined,
    id_favorite_driver_fk: DriverEntity | undefined,
    country?: string,
    phone: string,
}