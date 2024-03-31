import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from './book.controller';
import { BooksService } from './book.service';
import { Book } from './book.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../auth/constants';

@Module({
    imports: [
        TypeOrmModule.forFeature([Book]), // Importa el módulo TypeOrmModule y registra la entidad Book para su uso en el módulo
        JwtModule.register({ // Importa el módulo JwtModule y registra la configuración del token JWT
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
        }),
    ],
    controllers: [BooksController],
    providers: [BooksService],
})
export class BookModule {} // Exporta la clase BookModule que representa el módulo de libros de la aplicación
