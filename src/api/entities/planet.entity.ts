import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Planet {
    @PrimaryColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    rotation_period: number;
    
    @Column()
    orbital_period: number;
    
    @Column()
    diameter: number;
    
    @Column()
    climate: string;
    
    @Column()
    gravity: string;
    
    @Column()
    terrain: string;
    
    @Column()
    surface_water: string;
    
    @Column()
    population: number;

    @Column()
    residents: string;

    @Column()
    films: string;

    @CreateDateColumn()
    created: Date;
    
    @UpdateDateColumn()
    updated: Date;
}