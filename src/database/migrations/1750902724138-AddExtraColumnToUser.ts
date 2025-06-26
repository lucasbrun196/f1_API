import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddExtraColumnToUser1750902724138 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "User" ADD "country" VARCHAR(255) NOT NULL`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
