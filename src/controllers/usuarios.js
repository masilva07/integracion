const { response } = require("express");

const usuariosGet = (req, res = response) => {
    res.json({
        msg: "getAPI - Controller",
    });
};

module.exports = {
    usuariosGet,
};
