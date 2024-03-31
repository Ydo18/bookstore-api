import {Controller, Get, Post, Put, Delete, Param, Body, UseGuards} from '@nestjs/common';
import {BooksService} from './book.service';
import {Book} from './book.entity';
import { AuthGuard } from '../auth/auth.guard';

@Controller('libros') // Define la ruta base para las operaciones del controlador
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @UseGuards(AuthGuard) // Aplica la autenticación de JWT a los metodos del controlador
    @Get()
    async findAll(): Promise<Book[]> { // Método para obtener todos los libros
        return this.booksService.findAll();
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Book> { // Método para obtener un libro por su ID// Método para obtener un libro por su ID
        return this.booksService.findOne(id);
    }

    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() bookData: Book): Promise<Book> { // Método para crear un nuevo libro
        return this.booksService.create(bookData);
    }

    @UseGuards(AuthGuard)
    @Put(':id')
    async update(@Param('id') id: number, @Body() bookData: Book): Promise<Book> { // Método para actualizar un libro
        return this.booksService.update(id, bookData);
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> { // Método para eliminar un libro
        return this.booksService.remove(id);
    }
}
