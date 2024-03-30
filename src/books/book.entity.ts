import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    autor: string;

    @Column()
    publicacion: number;
}
