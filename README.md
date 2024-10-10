# backend-JuanForero

Configuración y ejecución de un servidor Express

1. Inicializa tu proyecto:
   npm init -y

2. Instala las dependencias necesarias:
   npm install express
   npm install nodemon --save-dev

3. Modifica el package.json:
   - Añade "type": "module"
   - Añade scripts:
     "scripts": {
       "start": "node index.js",
       "dev": "nodemon index.js"
     }

4. Crea un archivo index.js con el siguiente contenido:
   import express from 'express';

   const server = express()

   const PORT = 8080

   const ready = () => console.log("server ready in port :" + PORT)

   server.listen(PORT, ready)

5. Levanta el servidor:
   - Para desarrollo (con nodemon):
     npm run dev
   - Para producción:
     npm start

6. Verifica que el servidor esté funcionando:
   - Abre un navegador y visita http://localhost:8080
   - Deberías ver un mensaje de error por defecto de Express

7. Añade una ruta básica en index.js:
   server.get('/', (req, res) => {
     res.send('¡Hola, mundo!');
   });

8. Reinicia el servidor si es necesario.

9. Verifica la nueva ruta:
   - Visita http://localhost:8080 de nuevo
   - Deberías ver el mensaje "¡Hola, mundo!"

Felicidades, tu servidor Express está funcionando correctamente.