import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class User1736814156080 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "User",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isNullable: false,
                        isPrimary: true,
                        isGenerated: true,
                    },
                    {
                        name: "email",
                        type: "varchar(255)",
                        isNullable: true,
                        isUnique: true,
                    },
                    {
                        name: "password",
                        type: "varchar(255)",
                        isNullable: true,
                    },
                    {
                        name: "username",
                        type: "varchar(255)",
                        isNullable: true,
                        isUnique: true,
                    }
                ]
            })
        )
        await queryRunner.addColumn(
            "User",
            new TableColumn({
                name: "id_favorite_team_fk",
                type: "int",
                isNullable: true,
            })
        )

        await queryRunner.addColumn(
            "User",
            new TableColumn({
                name: "id_favorite_driver_fk",
                type: "int",
                isNullable: true
            })
        )

        await queryRunner.createForeignKey(
            "User",
            new TableForeignKey({
                columnNames: ["id_favorite_team_fk"],
                referencedColumnNames: ["id"],
                referencedTableName: "Team",
                onDelete: "CASCADE",
            })
        )

        await queryRunner.createForeignKey(
            "User",
            new TableForeignKey({
                columnNames: ["id_favorite_driver_fk"],
                referencedColumnNames: ["id"],
                referencedTableName: "Driver",
                onDelete: "CASCADE",
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
