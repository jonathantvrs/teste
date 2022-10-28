import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Starship {
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
    passengers: string;
    
    @Column()
    cargo_capacity: string;
    
    @Column()
    consumables: string;
    
    @Column()
    hyperdrive_rating: string;
    
    @Column()
    mglt: number;
    
    @Column()
    startship_class: string;

    @Column()
    pilots: string;

    @Column()
    films: string;
    
    @CreateDateColumn()
    created: Date;
    
    @UpdateDateColumn()
    updated: Date;
}