const { Router } = require("express");
const { check } = require("express-validator");

const {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
} = require("../controllers/usuarios");

const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.get("/", usuariosGet);
router.put(
    "/:id",
    [
        check("id").isMongoId(),
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("correo", "El correo es obligatorio").not().isEmpty(),
        validarCampos,
    ],
    usuariosPut
);
router.post(
    "/",
    [
        check("correo", "El correo no es valido").isEmail(),
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        validarCampos,
    ],
    usuariosPost
);
router.delete("/:id", [check("id").isMongoId(), validarCampos], usuariosDelete);

module.exports = router;
