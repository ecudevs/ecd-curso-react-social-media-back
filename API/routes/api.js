import { Router } from "express";
const router = new Router();


router.get("/", (req, res) => {
    res.send("Go on Little Batmanx!");
});

export default router;
