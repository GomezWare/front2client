# Front2Client

## Descripción

**Front2Client** es un componente diseñado para facilitar la transferencia de datos del frontmatter del lado del servidor al lado del cliente en aplicaciones construidas con Astro. Este enfoque permite acceder a variables desde el frontmatter en el navegador de manera segura y eficiente.

## Características

- Inyección segura de variables del frontmatter`.
- Acceso sencillo a los datos en el cliente utilizando JavaScript.
- Soporte para múltiples variables y tipos de datos.

## Requisitos

- Node.js (v14 o superior)
- NPM (v6 o superior)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/front2client.git
   ```

2. Clona el repositorio:
    ```bash
    cd front2client
    ```
    
3. Instalar las dependencias:
    ```bash
    npm install
    ``` 

## Uso

1. Importa el componente Front2Client y el getter en tu archivo .astro
    ```javascript
    import F2C from '../../front2client/Front2Client.astro';
    ```
2. Añadir los tipos globales a la carpetas types de tu proyecto;
    ```javascript
    src/types/global.d.ts
    ```
3. Importar el getter al codigo del cliente:
    ```javascript
    import { getFrontData } from "../../front2client/getFrontData";
    ```
4. Definir las variables que quieras pasar al cliente:
    ```html
    <F2C frontmatterData={{ variable1, variable2 }}></F2C>
    ```
5. Obtener las variables desde el cliente:
    ```javascript
    const data = getFrontData();
    console.log(data); // Muestra las variables en el cliente
    ```
