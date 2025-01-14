import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class Driver1736811700944 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Driver",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isNullable: false,
                        isGenerated: true,
                    },
                    {
                        name: "driverName",
                        type: "varchar(255)",
                        isNullable: false,
                    },
                    {
                        name: "birthday",
                        type: "varchar(255)",
                        isNullable: false,
                    },
                    {
                        name: "pathImageDriver",
                        type: "varchar(255)",
                        isNullable: false,
                    },
                    {
                        name: "titleCount",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "nationality",
                        type: "varchar(255)",
                        isNullable: false,
                    }

                ]
            })

        )
        await queryRunner.addColumn(
            "Driver",
            new TableColumn({
                name: "id_team_fk",
                type: "int",
                isNullable: true
            })
        )

        await queryRunner.createForeignKey(
            "Driver",
            new TableForeignKey({
                columnNames: ["id_team_fk"],
                referencedColumnNames: ["id"],
                referencedTableName: "Team",
                onDelete: "CASCADE"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
