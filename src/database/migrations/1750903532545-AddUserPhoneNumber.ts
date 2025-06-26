import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserPhoneNumber1750903532545 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" ADD phone VARCHAR(255)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
