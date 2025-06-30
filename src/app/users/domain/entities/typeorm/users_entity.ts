import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TeamEntity } from "../../../../teams/domain/entities/typeorm/team_entity";
import { DriverEntity } from "../../../../drivers/domain/entities/typeorm/driver_entity";


@Entity('User')
export class UsersEntity {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column("varchar")
    email: string;

    @Column("varchar")
    password: string;

    @Column("varchar")
    username: string;

    @OneToOne(() => TeamEntity)
    @JoinColumn({ name: 'id_favorite_team_fk' })
    id_favorite_team_fk?: TeamEntity;

    @OneToOne(() => DriverEntity)
    @JoinColumn({ name: 'id_favorite_driver_fk' })
    id_favorite_driver_fk?: DriverEntity;

    @Column("varchar")
    country: string;

    @Column("varchar")
    phone?: string;

    @Column('bool', { default: false })
    admin?: boolean

    constructor(
        email: string,
        password: string,
        username: string,
        id_favorite_team_fk: TeamEntity | undefined,
        id_favorite_driver_fk: DriverEntity | undefined,
        country: string,
        phone?: string,
        id?: number,
        admin?: boolean,
    ) {


        this.email = email;
        this.password = password;
        this.username = username;
        this.id_favorite_team_fk = id_favorite_team_fk;
        this.id_favorite_driver_fk = id_favorite_driver_fk;
        this.country = country;
        if (phone != null) this.phone = phone;
        if (id != null) this.id = id;
        if(admin != null) this.admin = admin;
    }

}


export type UsersEntityJson = {
    email: string,
    password: string,
    username: string,
    id_favorite_team_fk: TeamEntity | undefined,
    id_favorite_driver_fk: DriverEntity | undefined,
    country: string,
    phone?: string,
    id?: number,
    admin?: boolean,
}