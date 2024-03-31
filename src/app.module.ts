import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './books/book.module';

@Module({
  imports: [
    BookModule,
    TypeOrmModule.forRoot({ // Configuración de TypeORM para la conexión a la base de datos
      "type": "postgres", // Tipo de base de datos
      "host": "localhost", // Host de la base de datos
      "port": 5432, // Puerto de la base de datos
      "password": "ydo1811", // Contraseña de la base de datos
      "username": "postgres", // Nombre de usuario de la base de datos
      "entities": ["dist/**/*.entity{.ts,.js}"], // Rutas de las entidades de TypeORM
      "database": "libreria", // Nombre de la base de datos
      "synchronize": true // Sincronizar automáticamente el esquema de la base de datos con las entidades definidas
    })
  ],
})
export class AppModule {} // Exporta la clase AppModule que representa el módulo principal de la aplicación
