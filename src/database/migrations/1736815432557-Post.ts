import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class Post1736815432557 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Post",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isNullable: false,
                        isGenerated: true,
                    },
                    {
                        name: "content",
                        type: "text",
                        isNullable: false,
                    },
                    {
                        name: "likesCount",
                        type: "int",
                        isNullable: true,
                    }
                ]
            })
        )
        await queryRunner.addColumn(
            "Post",
            new TableColumn({
                name: "id_user_fk",
                type: "int",
                isNullable: false,
            })
        )

        await queryRunner.createForeignKey(
            "Post",
            new TableForeignKey({
                columnNames: ["id_user_fk"],
                referencedColumnNames: ["id"],
                referencedTableName: "User",
                onDelete: "CASCADE"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
