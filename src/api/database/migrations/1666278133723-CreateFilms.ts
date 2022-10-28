import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateFilms1666278133723 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "films",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "title",
                        type: "varchar",
                    },
                    {
                        name: "episode_id",
                        type: "int",
                    },
                    {
                        name: "opening_crawl",
                        type: "varchar",
                    },
                    {
                        name: "director",
                        type: "varchar",
                    },
                    {
                        name: "producer",
                        type: "varchar",
                    },
                    {
                        name: "release_date",
                        type: "date",
                    },
                    {
                        name: "characters",
                        type: "varchar",
                    },
                    {
                        name: "planets",
                        type: "varchar",
                    },
                    {
                        name: "starships",
                        type: "varchar",
                    },
                    {
                        name: "vehicles",
                        type: "varchar",
                    },
                    {
                        name: "species",
                        type: "varchar",
                    },
                    {
                        name: "created",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated",
                        type: "timestamp",
                        default: "now()",
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("films");
    }

}
