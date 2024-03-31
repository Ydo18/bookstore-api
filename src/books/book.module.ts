import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from './book.controller';
import { BooksService } from './book.service';
import { Book } from './book.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../auth/constants';

@Module({
    imports: [
        TypeOrmModule.forFeature([Book]),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
        }),
    ],
    controllers: [BooksController],
    providers: [BooksService],
})
export class BookModule {}
