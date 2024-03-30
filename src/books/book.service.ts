import {Injectable} from '@nestjs/common';
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
        return this.booksRepository.find();
    }
    
    async findOne(id: number): Promise<Book> {
        return this.booksRepository.findOne({where: {id: id}});
    }

    async create(bookData: Book): Promise<Book> {
        const book = this.booksRepository.create(bookData);
        return this.booksRepository.save(book);
    }

    async update(id: number, bookData: Book): Promise<Book> {
        await this.booksRepository.update(id, bookData);
        return this.booksRepository.findOne({where: {id: id}});
    }

    async remove(id: number): Promise<void> {
        await this.booksRepository.delete(id);
    }
}
