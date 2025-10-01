## Problema encontrado con el GET /users y su solución

Al inicio de la implementación de la API ya existía un método `GET /users`.  
El problema surgió cuando se intentó agregar otro `GET /users` en la parte inferior del archivo para implementar el filtrado por `rol` y búsqueda por `nombre`.  

Esto generó **conflicto entre ambas rutas**, ya que Express ejecutaba siempre la primera definición e **ignoraba la segunda**, que contenía la lógica de filtrado.  

###  Solución
La solución fue **unificar ambas rutas en una sola**, incorporando la lógica de filtros dinámicos.  
Así, permite filtrar y buscar de manera flexible con parámetros de consulta.

## Commit 7, finalización
ENDPOINTS
Para Usuarios:
- GET /api/v1/users 200 OK
- GET /api/v1/users/:id 200 OK
- POST /api/v1/users 201 CREATED
- PUT /api/v1/users/:id 200 OK
- DELETE /api/v1/users/:id 200 OK

## ENDPOINTS PARA FEAT/EJERCICIOS
Para ejercicios: 
- GET /api/v1/ejercicios  200 OK
- GET /api/v1/ejercicios/:id 200 OK
- POST /api/v1/ejercicios 201 CREATED
- PUT /api/v1/ejercicios/:id 200 OK
- DELETE /api/v1/ejercicios/:id 200 OK

## ENDPOINTS PARA feat/entrenamientos

 Definición de rutas
- GET /api/v1/entrenamientos 200 OK
- GET /api/v1/entrenamientos/:id 200 OK
- POST /api/v1/entrenamientos 200 CREATED
- PUT /api/v1/entrenamientos/:id 200 OK
- DELETE /api/v1/entrenamientos/:id 200 OK

## ENDPOINTS PARA feat/ejerciciosentrenamientos

- GET /api/v1/ejercicios-entrenamientos  200 OK
- GET /api/v1/ejercicios-entrenamientos/:id 200 OK
- POST /api/v1/ejercicios-entrenamientos 201 CREATED
- PUT /api/v1/ejercicios-entrenamientos/:id 200 OK
- DELETE /api/v1/ejercicios-entrenamientos/:id 200 OK