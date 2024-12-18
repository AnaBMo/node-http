/* ***** Crear un Servidor HTTP *****
que responda con un documento HTML que contiene información específica de una página web. */

//Importa el módulo de datos `data.js` en el archivo del servidor.
const http = require('http');
const {crearEncabezado, crearCuerpo, crearFooter} = require('./data.js'); 

// Configura el servidor para responder a las solicitudes con el resultado de mostrar información de la página web.
const server = http.createServer((req, res) => {
    console.log('Solicitud recibida');

    // Respuesta con status 200(exitosa) y de tipo html
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Construir el contenido con las funciones creadas en data.js
    const titulo = 'S9-U2-Node';
    const mensaje = 'Prueba de página web creada con Node.js y JavaScript.';
    const footer = 'Espero que funcione ;-)'
    
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${titulo}</title>
            <style>
              body {
                background-color: #f4f4f9;
                font-family: Arial, sans-serif;
                margin: 10px;
                padding: 10px;
                color: grey;
              }
              header {
                background-color:rgb(114, 131, 121);
                color: white;
                padding: 1rem;
                text-align: center;
              }
              main {
                padding: 20px;
                text-align: center;
                border-colour: grey;
                border-raius: 5px;
              }
              footer {
                background-color:rgb(114, 131, 121);
                text-align: center;
                padding: 10px;
                color: white;
              }
          </style>
        </head>
        <body>
            ${crearEncabezado(titulo)}
            ${crearCuerpo(mensaje)}
            ${crearFooter(footer)}
        </body>
        </html>
    `;
    res.end(htmlContent);
});

server.listen (0, () => { // cero para que nos ubique en un puerto aleatorio disponible
  console.log(`server listening on port http://localhost:${server.address().port}`);
}); 