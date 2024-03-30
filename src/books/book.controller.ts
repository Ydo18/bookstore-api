import {Controller, Get, Post, Put, Delete, Param, Body} from '@nestjs/common';
import {BooksService} from './book.service';
import {Book} from './book.entity';

@Controller('libros')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Get()
    async findAll(): Promise<Book[]> {
        try{
            return this.booksService.findAll();
        } catch(err){
            console.log('Error al obtener todos los libros: '+err);
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Book> {
        try{
            return this.booksService.findOne(id);
        } catch(err){
            console.log('Error al buscar el libro: '+err);
        }
    }

    @Post()
    async create(@Body() bookData: Book): Promise<Book> {
        try{
            return this.booksService.create(bookData);
        } catch(err){
            console.log('Error al almacenar el libro: '+err);
        }
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() bookData: Book): Promise<Book> {
        try{
            return this.booksService.update(id, bookData);
        } catch(err){
            console.log('Error al actualizar el libro: '+err);
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        try{
            return this.booksService.remove(id);
        } catch(err){
            console.log('Error al eliminar el libro: '+err);
        }
    }
}
