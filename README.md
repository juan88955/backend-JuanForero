# backend-JuanForero

Configuración de un proyecto de backend con Node.js, Express y MongoDB

1. Instalar dependencias:
   - Express: Framework web para Node.js
     npm install express

   - Nodemon: Herramienta para reiniciar automáticamente el servidor durante desarrollo
     npm install --save-dev nodemon

   - Dotenv: Para cargar variables de entorno desde un archivo
     npm install dotenv

   - Mongoose: Librería para trabajar con MongoDB en Node.js
     npm install mongoose

2. Crear archivo de configuración:
   Crea un archivo llamado .env en la raíz del proyecto

3. Configurar variables de entorno en .env:
   PORT = 8080
   password = tu_contraseña_de_base_de_datos

Explicación:
- Express te ayudará a crear y manejar tu servidor web.
- Nodemon facilitará el desarrollo al reiniciar el servidor automáticamente.
- Dotenv permitirá manejar configuraciones de forma segura.
- Mongoose simplificará la interacción con tu base de datos MongoDB.
- El archivo .env guardará información sensible y configuraciones.

Recuerda:
- Ejecuta estos comandos en la terminal, en la carpeta de tu proyecto.
- No compartas tu archivo .env, especialmente si contiene contraseñas.
- El puerto 8080 es donde tu servidor web escuchará las peticiones.
- Reemplaza "tu_contraseña_de_base_de_datos" con tu contraseña real de MongoDB.