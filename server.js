const objetoWeb = require ('./data')
const http = require('node:http');

const server = http.createServer((req, res)=> {
    res.end(`<!DOCTYPE html>
        <html lang="es">
          <head>
            <meta charset="utf-8">
            <title>${objetoWeb.title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
        
          <body>
            <header>
            <h1>${objetoWeb.title}</h1>
              <nav>
                <a href="${objetoWeb.linkFichajes}">Fichajes</a>
                <a href="${objetoWeb.linkRumores}">Rumores</a>
                <a href="${objetoWeb.linkResultados}">Resultados y análisis</a>
              </div>
            </nav>

            <h2>${objetoWeb.subtitle}</h2>
            <h3>${objetoWeb.description}</h3>
          </body>

          <footer>
            <div>
                <p>Autor: ${objetoWeb.author}</p>
                <p>Página creada en: ${objetoWeb.creationDate}</p>
                <p>Contáctanos: <a href="mailto:${objetoWeb.contact}">${objetoWeb.contact}</a></p>
            </div>  
          </footer>  
        </html>`
        );
})

server.listen(0, () => {
    console.log(`http://localhost:${server.address().port}`);
})
