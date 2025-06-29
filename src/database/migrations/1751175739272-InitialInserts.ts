import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialInserts1751175739272 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query
        (`INSERT INTO "Team" ("teamName", "country", "about", "pathImageTeam") VALUES ($1, $2, $3, $4)`,
            ['initialTeamName', 'initialTeamCountry', 'initialTeamAbout', 'initialPathImageTeam']
        );

        await queryRunner.query
        (`INSERT INTO "Driver" ("driverName", "birthday", "pathImageDriver", "titleCount", "nationality") VALUES ($1, $2, $3, $4, $5)`,
            ['initialDriverName', '17/04/1998', 'initialPathImageDriver', 0, 'BR']
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
