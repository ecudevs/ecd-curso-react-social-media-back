import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";
const router = new Router();

router.get("/test", (req, res) => {
    res.send("Go on Little Batmanx!");
});

router.get("/hola", (req, res) => {
    res.send("Go on Little Batmanx!");
});


router
    .get("/usuarios", (req, res) => {
        UsuarioController.getUsuarios(res)
    })
    .post("/usuarios", (req, res) => {
        UsuarioController.saveUsuario(req, res)
    })
    .put("/usuarios", (req, res) => {
        UsuarioController.updateUsuario(req, res)
    })


// SI TUVIERAMOS QUE MANDAR PARAMETROS
// router.get("/lumina/updates", (req, res) => {
//     UsuariosController.getUsuarios(req, res)
// });

export default router;
