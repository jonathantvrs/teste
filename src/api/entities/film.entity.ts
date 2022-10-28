import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Film {
    @PrimaryColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    episode_id: number;

    @Column()
    opening_crawl: string;
    
    @Column()
    director: string;
    
    @Column()
    producer: string;
    
    @Column()
    release_date: Date;

    @Column()
    characters: string;

    @Column()
    planets: string;

    @Column()
    starships: string;

    @Column()
    vehicles: string;

    @Column()
    species: string;
    
    @CreateDateColumn()
    created: Date;
    
    @UpdateDateColumn()
    updated: Date;
}