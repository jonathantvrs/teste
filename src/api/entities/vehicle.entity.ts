import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Vehicle {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    model: string;
    
    @Column()
    manufacturer: string;
    
    @Column()
    cost_in_credits: string;
    
    @Column()
    length: number;

    @Column()
    max_atmosphering_speed: number;

    @Column()
    crew: string;

    @Column()
    passengers: number;

    @Column()
    cargo_capacity: string;

    @Column()
    consumables: string;

    @Column()
    vehicle_class: string;

    @Column()
    pilots: string;

    @Column()
    films: string;

    @CreateDateColumn()
    created: Date;
    
    @UpdateDateColumn()
    updated: Date;
}