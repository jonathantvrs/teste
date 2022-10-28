import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Person {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    height: number;
    
    @Column()
    mass: number;
    
    @Column()
    hair_color: string;
    
    @Column()
    skin_color: string;
    
    @Column()
    eye_color: string;
    
    @Column()
    birth_year: string;
    
    @Column()
    gender: string;

    @Column()
    homeworld: string;
    
    @Column()
    films: string;

    @Column()
    species: string;

    @Column()
    vehicles: string;

    @Column()
    starships: string;

    @CreateDateColumn()
    created: Date;
    
    @UpdateDateColumn()
    updated: Date;
}