# Listado de productos
App Fullstack realizada con React, Nodejs y mongodb, 

## Como correr cada proyecto
1. Instalar ```NodeJs v12.13.1```, con nvm se instalaria con ```nvm install --lts=erbium```,  
2. Iniciar el servidor de mongo con ```sudo systemctl start mongod```,
3. Ingresar a las carpetas **client** y **server**, 
4. En cada carpeta ejecutar ```npm i``` y ```npm run start```.

## Temas que tuve en cuenta
### Server
* La estructura del proyecto la hice teniendo en cuenta [esto](https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/projectstructre/breakintcomponents.md) y [esto](https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/projectstructre/breakintcomponents.md)
* Usé **Nodemon** para que el proyecto se recargue ante cada cambio
* Usé la extensión de vscode [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) por sobre *Insomnia* o *Postman* por su integración con VSCode y facilidad de uso. El archivo para realizar las llamadas está en ```source/resources/product/products.rest ```

### Client
* El proyecto fué generado con [Create React App](https://github.com/facebook/create-react-app)
* Usé [Reach Router](https://reach.tech/router) como Router debido a su enfoque en la [accesibilidad](https://reach.tech/router/accessibility).
* Usé [Semantic UI React](https://react.semantic-ui.com/) ya que su API es bastante transparente, y flexible, lo cual sirve cuando se quieren hacer cosas no predeterminadas; un ejemplo de la flexibilidad, es que los componentes se pueden usar así ```<Button />``` o así ```<button class="ui button"></button>```.
* Agregué el Wrapper ```<React.StrictMode>``` para que en *Desarrollo* señale malas prácticas o caracteristicas deprecadas.
* Para maquetar algunas secciones de forma más real, es decir, haciendo un loop con info que llega desde un servidor, hice un mock de la data que podría llegar y la puse en la carpeta de *utils*.
* Siguiendo un poco la idea de Angular y de [este](https://github.com/goncy/cablevision-test-milton/tree/master/src/services) repositorio, creé una carpeta de servicios donde están los métodos para llamar al servidor, pensándolo además como un *singletone*.
* Por último, hice un archivo en utils con 2 métodos auxiliares:
  *  El primero para formatear los números que vienen del servidor a moneda
  *  El segundo para crear ids de la data falsa.

### General
* Para mantener un estandar en el código agregué las herramientas: *Husky*, *pretty-quick*, *Eslint* (con la guía de airbnb y algunas reglas silenciadas) y *Prettier*
* Agregué la configuración para usar el debugger de VSCode en cualquiera de los 2 proyectos, para iniciarlo solo hay que oprimir *F5*.   
* Usé **Axios** para hacer llamadas HTTP. 

## Algo que me habría gustado mejorar
### Server
* Tener un mejor manejo de errores
* Haber usado TypeScript para mejorar la fiabilidad del código

### Client
* Por un error que no pude arreglar, Semantic UI está siendo importado al proyecto por CDN en vez de usarse lo instalado como dependencia.

### General
* Haber logrado configurar Docker, en la branch *docker* hay un adelanto de lo que logré hacer
