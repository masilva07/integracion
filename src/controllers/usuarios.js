const { response } = require("express");
const Usuario = require("../models/Usuario");

const usuariosGet = async (req, res = response) => {
    //manejo de query params
    // const { desde = 0, limite = 5 } = req.query;

    //hacemos la peticion a la BD con un query de solo ususarios activos
    const [total_usuarios_activos, usuarios] = await Promise.all([
        Usuario.countDocuments({ estado: true }),
        Usuario.find({ estado: true }),
        // .limit(Number(limite))
        // .skip(Number(desde)),
    ]);

    res.json({
        msg: "getApi - Controlador",
        total_usuarios_activos,
        usuarios,
    });
};
const usuariosPost = async (req, res = response) => {
    //extraer el contenido del body
    const { nombre, correo } = req.body;

    try {
        //creamos la instancia del modelo de Mongo
        const usuario = new Usuario({ nombre, correo });
        //Crear usuario en la base de datos
        await usuario.save();
        //Devolvemos la respuesta del controlador
        res.json({
            msg: "postApi - Controlador",
            usuario,
        });
    } catch (error) {
        //Devolvemos la respuesta del controlador
        res.status(404).json({
            msg: "postApi - Controlador",
            error,
        });
    }
};
const usuariosPut = async (req, res = response) => {
    //manejo de parametro
    const { id } = req.params;
    const { _id, ...body } = req.body;

    try {
        await Usuario.findByIdAndUpdate(id, body);
        res.json({
            msg: "putApi - Controlador",
            body,
        });
    } catch (error) {
        res.status(404).json({
            msg: "putApi - Controlador",
            error,
        });
    }
};
const usuariosDelete = async (req, res = response) => {
    //manejo de parametro
    const { id } = req.params;
    const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });
    res.json({
        msg: "deleteApi - Controlador",
        usuario,
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
};
