<template>
  <div>
    <h2>Panel de Matrículas</h2>
    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Nombre</th>
        <th>Email</th>
        <th>Teléfono</th>
        <th>Curso</th>
        <th>Fecha</th>
      </tr>
      <tr v-for="m in matriculas" :key="m.id">
        <td>{{ m.nombre }}</td>
        <td>{{ m.email }}</td>
        <td>{{ m.telefono }}</td>
        <td>{{ m.curso }}</td>
        <td>{{ formatFecha(m.fecha) }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

interface Matricula {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  curso: string;
  fecha: string; // viene como ISO string de la API
}

export default defineComponent({
  name: "AdminMatriculas",
  setup() {
    const matriculas = ref<Matricula[]>([]);

    const fetchMatriculas = async () => {
      const res = await fetch("http://localhost:3000/matricula");
      matriculas.value = await res.json();
    };

    onMounted(fetchMatriculas);

    // Función para formatear la fecha dd/mm/yyyy
    const formatFecha = (fecha: string) => {
      const d = new Date(fecha);
      const dia = String(d.getDate()).padStart(2, "0");
      const mes = String(d.getMonth() + 1).padStart(2, "0"); // Enero = 0
      const anio = d.getFullYear();
      return `${dia}/${mes}/${anio}`;
    };

    return { matriculas, formatFecha };
  },
});
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th {
  background: #4caf50;
  color: white;
}
td {
  text-align: center;
  padding: 6px;
}
</style>