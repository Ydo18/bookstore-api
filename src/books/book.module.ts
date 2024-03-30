import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from './book.controller';
import { BooksService } from './book.service';
import { Book } from './book.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Book])
    ],
    controllers: [BooksController],
    providers: [BooksService],
})
export class BookModule {}
