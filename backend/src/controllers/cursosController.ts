import { Request, Response } from "express";
import pool from "../database";

export const listarCursos = async (req: Request, res: Response) => {
  try {
    const resultado = await pool.query(
      `SELECT id, nombre, descripcion, proxima_fecha
       FROM cursos
       ORDER BY nombre`
    );

    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error al obtener cursos"
    });
  }
};