import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePlanets1666363708909 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "planets",
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
                        name: "rotation_period",
                        type: "int",
                    },
                    {
                        name: "orbital_period",
                        type: "int",
                    },
                    {
                        name: "diameter",
                        type: "int",
                    },
                    {
                        name: "climate",
                        type: "varchar",
                    },
                    {
                        name: "gravity",
                        type: "varchar",
                    },
                    {
                        name: "terrain",
                        type: "varchar",
                    },
                    {
                        name: "surface_water",
                        type: "varchar",
                    },
                    {
                        name: "population",
                        type: "int",
                    },
                    {
                        name: "residents",
                        type: "string",
                    },
                    {
                        name: "films",
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
        await queryRunner.dropTable("planets");
    }

}
