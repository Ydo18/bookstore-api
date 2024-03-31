# API - Crud Libreria

## Herramientas y tecnologias

- NestJS + TypeORM + Postgres

## Descripción del proyecto y endpoints

Es un CRUD de una colección de libros que se conecta a la BD de postgres y usa JWT para la autenticación ejecución de los endpoints establecidos

### Endpoint: /libros
Método: GET
Descripción: Obtiene todos los libros disponibles.
Formato de respuesta: Un array de objetos Book.
Códigos de Estado:
200 OK: Se devuelve la lista de libros correctamente.
401 Unauthorized: El usuario no está autenticado.

Método: POST
Descripción: Crea un nuevo libro.
Formato de Solicitud: Objeto Book con los detalles del nuevo libro.
Formato de Respuesta: El libro recién creado.
Códigos de Estado:
201 Created: El libro fue creado correctamente.
400 Bad Request: La solicitud está mal formada o faltan datos.
401 Unauthorized: El usuario no está autenticado.

### Endpoint: /libros/:id
Método: GET
Descripción: Obtiene un libro específico por su ID.
Parámetros:
* id: El ID único del libro que se desea obtener.
Formato de Respuesta: Un objeto Book.
Códigos de Estado:
200 OK: Se devuelve el libro correctamente.
404 Not Found: El libro con el ID especificado no fue encontrado.
401 Unauthorized: El usuario no está autenticado.

Método: PUT
Descripción: Actualiza un libro existente.
Parámetros de Ruta:
* id: El ID único del libro que se desea actualizar.
* Objeto Book con los datos actualizados.
Formato de Respuesta: El libro actualizado.
Códigos de Estado:
200 OK: El libro fue actualizado correctamente.
404 Not Found: El libro con el ID especificado no fue encontrado.
401 Unauthorized: El usuario no está autenticado.

Método: DELETE
Descripción: Elimina un libro existente por su ID.
Parámetros de Ruta:
id: El ID único del libro que se desea eliminar.
Formato de Respuesta: Ninguno.
Códigos de Estado:
204 No Content: El libro fue eliminado correctamente.
404 Not Found: El libro con el ID especificado no fue encontrado.
401 Unauthorized: El usuario no está autenticado.

## A tener en cuenta
De ser necesario en la carpeta BD se encuentra el sql para la creación de la BD y tabla "book" con 3 libros previamente creados
