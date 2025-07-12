import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UsersEntity } from "../../../../users/domain/entities/typeorm/users_entity";


@Entity('Post')
export class PostEntity {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column('varchar')
    content: String;

    @Column('int')
    likesCount: number;

    @OneToOne(() => UsersEntity)
    @JoinColumn({ name: 'id_user_fk' })
    id_user_fk: UsersEntity;

    constructor(
        content: string,
        likeCount: number,
        id_user_fk: UsersEntity,
        id?: number,
    ) {
        this.content = content;
        this.likesCount = likeCount;
        this.id_user_fk = id_user_fk;
        if (id != null) {
            this.id = id;
        }
    }
}

export type PostEntityJson = {
    content: string,
    likeCount: number,
    id_user_fk: UsersEntity,
    id?: number,
}