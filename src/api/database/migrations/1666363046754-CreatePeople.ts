import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePeople1666363046754 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "people",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "height",
                        type: "int",
                    },
                    {
                        name: "mass",
                        type: "int",
                    },
                    {
                        name: "hair_color",
                        type: "varchar",
                    },
                    {
                        name: "skin_color",
                        type: "varchar",
                    },
                    {
                        name: "eye_color",
                        type: "varchar",
                    },
                    {
                        name: "birth_year",
                        type: "varchar",
                    },
                    {
                        name: "gender",
                        type: "varchar",
                    },
                    {
                        name: "homeworld",
                        type: "varchar",
                    },
                    {
                        name: "films",
                        type: "varchar",
                    },
                    {
                        name: "species",
                        type: "varchar",
                    },
                    {
                        name: "vehicles",
                        type: "varchar",
                    },
                    {
                        name: "starships",
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
                        default: "now()"
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("people");
    }

}
