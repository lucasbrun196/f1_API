import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Team1736810350064 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Team",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isNullable: false,
                        isGenerated: true,
                    },
                    {
                        name: "teamName",
                        type: "varchar",
                        length: "255",
                        isNullable: false,
                    },
                    {
                        name: "country",
                        type: "varchar(255)",
                        isNullable: false,
                    },
                    {
                        name: "about",
                        type: "text",
                        isNullable: false,
                    },
                    {
                        name: "pathImageTeam",
                        type: "varchar(255)",
                        isNullable: false,
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
