Backend de Productos para Tienda Online

Descripción

Este backend permite administrar el catálogo de productos de una tienda online de manera segura y eficiente.
La API permite listar, agregar y eliminar productos, y todas las operaciones que modifican datos requieren autenticación con JWT.
Los datos se almacenan en Firebase Firestore, asegurando disponibilidad y escalabilidad en la nube.

Tecnologías Utilizadas

Node.js y Express para el servidor web.

Firebase Firestore como base de datos en la nube.

JWT (JSON Web Tokens) para la autenticación de rutas protegidas.

CORS para permitir solicitudes desde dominios autorizados.

dotenv para gestionar variables de entorno sensibles.

Instalación y Configuración

Clonar el proyecto:

git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>


Instalar dependencias:

npm install


Crear un archivo .env en la raíz del proyecto con las siguientes variables:

PORT=3000
JWT_SECRET_KEY=<tu_clave_secreta>
FIREBASE_API_KEY=<tu_api_key>
FIREBASE_AUTH_DOMAIN=<tu_auth_domain>
FIREBASE_STORAGE_BUCKET=<tu_storage_bucket>
FIREBASE_APP_ID=<tu_app_id>


Ejecutar el servidor:

npm start


El servidor quedará disponible en http://localhost:3000.

Endpoints
Autenticación

POST /api/auth/login
Permite obtener un token JWT válido para acceder a rutas protegidas.

Body:

{
  "email": "test@gmail.com",
  "password": "123456"
}


Respuesta exitosa (200):

{
  "token": "<jwt_token>"
}


Errores posibles:

401 Unauthorized → Credenciales inválidas.

Productos

GET /api/products
Obtiene la lista completa de productos.

GET /api/products/:id
Obtiene un producto por su ID.

POST /api/products (protegido)
Agrega un nuevo producto al catálogo. Requiere incluir el token JWT en el header Authorization: Bearer <token>.

Body ejemplo:

{
  "nombre": "Yerba Mate",
  "categoria": "Infusiones",
  "precio": 200
}


DELETE /api/products/:id (protegido)
Elimina un producto por su ID. Requiere token JWT en el header Authorization.

Manejo de errores

400 Bad Request → Datos enviados incorrectos o incompletos.

401 Unauthorized → Token ausente o inválido.

403 Forbidden → Token válido pero sin permisos.

404 Not Found → Ruta o recurso inexistente.

500 Internal Server Error → Error inesperado del servidor o de la base de datos.

Seguridad y buenas prácticas

Los endpoints de creación y eliminación de productos están protegidos por JWT.

Todas las contraseñas o tokens sensibles se gestionan mediante variables de entorno.

La API utiliza CORS para restringir los dominios que pueden consumirla.

Espero que disfrutes usando esta API ya que fue hecha con ❤️ para aprender y practicar Node.js y Firebase!
