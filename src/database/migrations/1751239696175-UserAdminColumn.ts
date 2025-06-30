import { MigrationInterface, QueryRunner } from "typeorm";

export class UserAdminColumn1751239696175 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "User" ADD "admin" BOOL DEFAULT false`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
