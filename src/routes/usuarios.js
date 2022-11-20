const { Router } = require("express");
const { usuariosGet } = require("../controllers/usuarios");

const router = Router();

router.get("/", usuariosGet);

module.exports = router;
