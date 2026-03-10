import { Request, Response } from "express";
import pool from "../database";
import { Matricula } from "../types";

// Crear matrícula con validación y códigos HTTP adecuados
export const crearMatricula = async (req: Request, res: Response) => {
  const { nombre, email, telefono, curso_id } = req.body as Matricula;

  // Validaciones básicas
  if (!nombre || !email || !curso_id) {
    return res.status(400).json({ mensaje: "Nombre, email y curso son obligatorios" });
  }

  try {
    const resultado = await pool.query(
      `INSERT INTO matriculas (nombre,email,telefono,curso_id)
       VALUES ($1,$2,$3,$4)
       RETURNING *`,
      [nombre, email, telefono || null, curso_id]
    );

    res.status(201).json(resultado.rows[0]); // 201 Created
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al registrar matrícula" });
  }
};

// Listar matrículas
export const listarMatriculas = async (_req: Request, res: Response) => {
  try {
    const resultado = await pool.query(`
      SELECT m.id, m.nombre, m.email, m.telefono,
             c.nombre AS curso, m.fecha
      FROM matriculas m
      JOIN cursos c ON m.curso_id = c.id
      ORDER BY m.fecha DESC
    `);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener matrículas" });
  }
};