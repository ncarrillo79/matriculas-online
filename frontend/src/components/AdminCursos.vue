<template>
  <div>
    <h2>Panel de Cursos</h2>
    <table class="courses-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Próxima Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="curso in cursos" :key="curso.id">
          <td>{{ curso.nombre }}</td>
          <td>{{ curso.descripcion ?? "—" }}</td>
          <td>{{ curso.proxima_fecha ? formatFecha(curso.proxima_fecha) : "—" }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

// Definimos el tipo según lo que devuelve tu backend actualmente
interface Curso {
  id: number;
  nombre: string;
  descripcion?: string;     // opcional
  proxima_fecha?: string;   // opcional
}

export default defineComponent({
  name: "AdminCursos",
  setup() {
    const cursos = ref<Curso[]>([]);

    const fetchCursos = async () => {
      const res = await fetch("http://localhost:3000/cursos");
      cursos.value = await res.json();
    };

    onMounted(fetchCursos);

    const formatFecha = (fecha: string) => {
      const d = new Date(fecha);
      const dia = String(d.getDate()).padStart(2, "0");
      const mes = String(d.getMonth() + 1).padStart(2, "0");
      const anio = d.getFullYear();
      return `${dia}/${mes}/${anio}`;
    };

    return { cursos, formatFecha };
  },
});
</script>

<style scoped>
.courses-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.courses-table th {
  background: #1976d2;
  color: white;
  padding: 10px;
  text-align: left;
  font-weight: 600;
  border-radius: 4px 4px 0 0;
}

.courses-table td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.courses-table tr:hover {
  background: #f1f1f1;
  transition: background 0.2s;
}
</style>