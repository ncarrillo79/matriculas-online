export interface Curso {
  id?: number        // ID del curso (auto-incremental)
  nombre: string     // Nombre del curso, ejemplo: "Matemática I"
  descripcion?: string // Descripción opcional
  precio: number     // Precio del curso
}