import {Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Book} from './book.entity';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private booksRepository: Repository<Book>,
    ) {}
    
    async findAll(): Promise<Book[]> {
        const books = this.booksRepository.find();
        if (!books) {
            throw new NotFoundException('No existen libros creados.');
        }
        return books;
    }
    
    async findOne(id: number): Promise<Book> {
        if (isNaN(id)){
            throw new NotFoundException('El ID debe ser un número.');
        } else {
            const book = await this.booksRepository.findOne({where: {id}});
            if (!book) {
                throw new NotFoundException('Libro no encontrado.');
            }
            return book;
        }
    }

    async create(bookData: Book): Promise<Book> {
        if (!bookData.titulo || !bookData.autor || !bookData.publicacion) {
            throw new BadRequestException('Falta uno o más campos obligatorios.');
        }
        const book = this.booksRepository.create(bookData);
        return this.booksRepository.save(book);
    }

    async update(id: number, bookData: Book): Promise<Book> {
        if (isNaN(id)){
            throw new NotFoundException('El ID debe ser un número.');
        } else {
            const Result = await this.booksRepository.update(id, bookData);
            if (Result.affected === 0) {
                throw new NotFoundException('No se pudo actualizar, libro no encontrado.');
            }
            return this.booksRepository.findOne({where: {id: id}});
        }
    }

    async remove(id: number): Promise<void> {
        if (isNaN(id)){
            throw new NotFoundException('El ID debe ser un número.');
        } else {
            const Result = await this.booksRepository.delete(id);
            if (Result.affected === 0) {
                throw new NotFoundException('No se pudo eliminar, libro no encontrado.');
            }
        }
    }
}
