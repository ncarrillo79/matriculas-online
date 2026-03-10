import { Router } from "express"
import { crearMatricula, listarMatriculas } from "../controllers/matriculaController"

const router = Router()

router.post("/", crearMatricula)

router.get("/", listarMatriculas)

export default router