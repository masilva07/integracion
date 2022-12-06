# Proyecto Integraciòn continua

Este proyecto será desarrollado para la clase integración continua del politécnico grancolombiano.

El proyecto es un REST server con arquitectura cliente-servidor, que se encargara de servir los archivos del lado del cliente, y responderá peticiones http para trabajar el CRUD de una base de datos de usuarios almacenada en mongoDB.

## Stack

-   Docker
-   Docker Compose
-   Node 18
-   Express
-   MongoDB 6.0.2
-   HTML - CSS - JS

## Instalación:

Nos dirigimos a la carpeta del proyecto y construimos la imagen de docker

```bash
  docker-compose build
```

Levantamos el compose de docker para correr los contenedores

```bash
  docker-compose up
```

## Puertos de acceso en local:

-   Servidor: 5000
-   MongoDB : 6000

Más información en el archivo docker-compose.yml
