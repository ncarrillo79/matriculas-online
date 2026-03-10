import { Router } from "express"
import { listarCursos } from "../controllers/cursosController"

const router = Router()

router.get("/", listarCursos)

export default router