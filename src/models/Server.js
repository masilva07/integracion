const express = require("express");
const cors = require("cors");
const path = require("path");
const { dbConnection } = require("../database/config");

class Server {
    constructor() {
        this.app = express();
        this.port = 3000;
        this.usuarios = "/api/usuarios";

        //Conectar a base de datos
        this.conectarDB();
        //Midlewares
        this.middlewares();
        //rutas
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    routes() {
        this.app.use(this.usuarios, require("../routes/usuarios"));
    }
    listen() {
        this.app.listen(this.port, () => console.log(`Servidor escuchando`));
    }
    middlewares() {
        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        //Directorio Publico
        this.app.use(express.static(path.join(__dirname, "../public")));
    }
}

module.exports = Server;
