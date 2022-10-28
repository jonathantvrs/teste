import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Specie {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    classification: string;
    
    @Column()
    designation: string;
    
    @Column()
    average_height: string;
    
    @Column()
    skin_colors: string;
    
    @Column()
    hair_colors: string;
    
    @Column()
    eye_colors: string;
    
    @Column()
    average_lifespan: string;
    
    @Column()
    language: string;

    @Column()
    people: string;

    @Column()
    films: string;

    @CreateDateColumn()
    created: Date;
    
    @UpdateDateColumn()
    updated: Date;
}