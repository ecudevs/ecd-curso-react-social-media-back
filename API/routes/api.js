import { Router } from "express";
import UsuariosController from "../controllers/UsuariosController";



const router = new Router();

router.get("/", (req, res) => {
    res.send("Go on Little Batmanx!");
});


router.get("/usuarios", (req, res) => {
    UsuariosController.getUsuarios(res)
});


// SI TUVIERAMOS QUE MANDAR PARAMETROS
// router.get("/lumina/updates", (req, res) => {
//     UsuariosController.getUsuarios(req, res)
// });

export default router;
