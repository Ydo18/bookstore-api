import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity() // Decorador para marcar la clase como una entidad de la base de datos
export class Book {
    @PrimaryGeneratedColumn() // Decorador para definir una columna de clave primaria generada automáticamente
    id: number; // Identificador unico del libro

    @Column() // Decorador para definir una columna de base de datos
    titulo: string; // titulo del libro

    @Column() // Decorador para definir una columna de base de datos
    autor: string; // autor del libro

    @Column() // Decorador para definir una columna de base de datos
    publicacion: number; // publicacion del libro
}
