import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './books/book.module';

@Module({
  imports: [
    BookModule,
    TypeOrmModule.forRoot({
      "type": "postgres",
      "host": "localhost",
      "port": 5432,
      "password": "ydo1811",
      "username": "postgres",
      "entities": ["dist/**/*.entity{.ts,.js}"],
      "database": "libreria",
      "synchronize": true
    })
  ],
})
export class AppModule {}
