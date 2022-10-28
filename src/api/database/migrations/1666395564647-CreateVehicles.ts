import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateVehicles1666395564647 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "vehicles",
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
                        name: "model",
                        type: "varchar",
                    },
                    {
                        name: "manufacturer",
                        type: "varchar",
                    },
                    {
                        name: "cost_in_credits",
                        type: "varchar",
                    },
                    {
                        name: "length",
                        type: "int",
                    },
                    {
                        name: "max_atmosphering_speed",
                        type: "int",
                    },
                    {
                        name: "crew",
                        type: "varchar",
                    },
                    {
                        name: "passengers",
                        type: "varchar",
                    },
                    {
                        name: "cargo_capacity",
                        type: "varchar",
                    },
                    {
                        name: "consumables",
                        type: "varchar",
                    },
                    {
                        name: "vehicle_class",
                        type: "varchar",
                    },
                    {
                        name: "pilots",
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
        await queryRunner.dropTable("vehicles");
    }

}
