import { BooksController } from '../src/books/book.controller';
import { BooksService } from '../src/books/book.service';
import { Repository } from 'typeorm';
import { Book } from '../src/books/book.entity';

describe('BooksController', () => {
    let booksController: BooksController;
    let booksService: BooksService;
    let mockBooksRepository: jest.Mocked<Repository<Book>>;

    beforeEach(() => {
        mockBooksRepository = {} as jest.Mocked<Repository<Book>>;
        booksService = new BooksService(mockBooksRepository);
        booksController = new BooksController(booksService);
    });

    describe('findAll', () => {
        it('Debe retornar un array de libros', async () => {
            const result: Book[] = [{ id: 1, titulo: 'Book 1', autor: 'Author 1', publicacion: 1 }, { id: 2, titulo: 'Book 2', autor: 'Author 2', publicacion: 2 }];
            mockBooksRepository.find = jest.fn().mockResolvedValue(result);

            expect(await booksController.findAll()).toBe(result);
        });
    });

    describe('findOne', () => {
        it('Debe retornar un libro específico', async () => {
            const id = 1;
            const result: Book = { id: 1, titulo: 'Book 1', autor: 'Author 1', publicacion: 1 };
            mockBooksRepository.findOne = jest.fn().mockResolvedValue(result);

            expect(await booksController.findOne(id)).toBe(result);
        });
    });

    describe('create', () => {
        it('Debe crear un nuevo libro', async () => {
            const bookData: Book = { id: 1, titulo: 'Nuevo Libro', autor: 'Autor Nuevo', publicacion: 2022 };
            const result: Book = { id: 3, ...bookData };
            mockBooksRepository.create = jest.fn().mockReturnValue(result);
            mockBooksRepository.save = jest.fn().mockResolvedValue(result);

            expect(await booksController.create(bookData)).toBe(result);
        });
    });

    describe('update', () => {
        it('Debe actualizar un libro existente', async () => {
            const id = 1;
            const bookData: Book = { id: 1, titulo: 'Libro Actualizado', autor: 'Autor Actualizado', publicacion: 2023 };
            mockBooksRepository.update = jest.fn().mockResolvedValue({ affected: 1 });
            mockBooksRepository.findOne = jest.fn().mockResolvedValue(bookData);
    
            expect(await booksController.update(id, bookData)).toBe(bookData);
        });
    });

    describe('remove', () => {
        it('Debe eliminar un libro existente', async () => {
            const id = 1;
            mockBooksRepository.delete = jest.fn().mockResolvedValue({ affected: 1 });
    
            expect(await booksController.remove(id)).toBeUndefined();
        });
    });    
});
