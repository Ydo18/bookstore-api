import {Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Book} from './book.entity';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book) // Inyecta el repositorio de libros
        private booksRepository: Repository<Book>,
    ) {}
    
    // Método para buscar todos los libros
    async findAll(): Promise<Book[]> {
        const books = this.booksRepository.find(); // Obtiene todos los libros de la base de datos
        if (!books) {
            throw new NotFoundException('No existen libros creados.'); // Lanza una excepción si no se encuentran libros
        }
        return books;
    }
    
    // Método para buscar un libro por su ID
    async findOne(id: number): Promise<Book> {
        if (isNaN(id)){ // Verifica si el ID es un número
            throw new NotFoundException('El ID debe ser un número.');
        } else {
            const book = await this.booksRepository.findOne({where: {id}}); // Busca un libro por su ID en la base de datos
            if (!book) {
                throw new NotFoundException('Libro no encontrado.');
            }
            return book;
        }
    }

    // Método para crear un nuevo libro
    async create(bookData: Book): Promise<Book> {
        if (!bookData.titulo || !bookData.autor || !bookData.publicacion) { //Valida que contenga todos los campos para crear un libro
            throw new BadRequestException('Falta uno o más campos obligatorios.');
        }
        const book = this.booksRepository.create(bookData); // Crea un nuevo libro con los datos proporcionados
        return this.booksRepository.save(book); // Guarda el nuevo libro en la base de datos
    }

    // Método para actualizar un libro existente
    async update(id: number, bookData: Book): Promise<Book> {
        if (isNaN(id)){
            throw new NotFoundException('El ID debe ser un número.');
        } else {
            const Result = await this.booksRepository.update(id, bookData); // Actualiza el libro en la base de datos
            if (Result.affected === 0) {
                throw new NotFoundException('No se pudo actualizar, libro no encontrado.');
            }
            return this.booksRepository.findOne({where: {id: id}}); // Retorna el libro actualizado
        }
    }

    // Método para eliminar un libro existente
    async remove(id: number): Promise<void> {
        if (isNaN(id)){
            throw new NotFoundException('El ID debe ser un número.');
        } else {
            const Result = await this.booksRepository.delete(id); // Elimina el libro de la base de datos
            if (Result.affected === 0) {
                throw new NotFoundException('No se pudo eliminar, libro no encontrado.'); // Lanza una excepción si el libro no se encuentra para eliminar
            }
        }
    }
}
