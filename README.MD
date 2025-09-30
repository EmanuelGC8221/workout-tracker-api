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
-	GET /usuarios - Este llama y lista los usuarios ya existentes. 200 OK
-	GET /usuarios/{id} – obtiene un usuario por dicho identificador. 200 OK
-	POST /usuarios – Crea un nuevo usuario. 201 Created
-	PUT /usuarios/{id} – Actualiza el usuario por identificador. 200OK
-	DELETE /usuarios/{id} – elimina usuario por identificador. 200 OK

