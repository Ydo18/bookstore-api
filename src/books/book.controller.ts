import {Controller, Get, Post, Put, Delete, Param, Body, UseGuards} from '@nestjs/common';
import {BooksService} from './book.service';
import {Book} from './book.entity';
import { AuthGuard } from '../auth/auth.guard';

@Controller('libros')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @UseGuards(AuthGuard)
    @Get()
    async findAll(): Promise<Book[]> {
        return this.booksService.findAll();
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Book> {
        return this.booksService.findOne(id);
    }

    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() bookData: Book): Promise<Book> {
        return this.booksService.create(bookData);
    }

    @UseGuards(AuthGuard)
    @Put(':id')
    async update(@Param('id') id: number, @Body() bookData: Book): Promise<Book> {
        return this.booksService.update(id, bookData);
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.booksService.remove(id);
    }
}
