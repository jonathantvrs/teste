import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateSpecies1666389582865 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "species",
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
                        name: "classification",
                        type: "varchar",
                    },
                    {
                        name: "designation",
                        type: "varchar",
                    },
                    {
                        name: "average_height",
                        type: "varchar",
                    },
                    {
                        name: "skin_colors",
                        type: "varchar",
                    },
                    {
                        name: "hair_colors",
                        type: "varchar",
                    },
                    {
                        name: "eye_colors",
                        type: "varchar",
                    },
                    {
                        name: "average_lifespan",
                        type: "varchar",
                    },
                    {
                        name: "language",
                        type: "varchar",
                    },
                    {
                        name: "people",
                        type: "varchar",
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
        await queryRunner.dropTable("species");
    }

}
