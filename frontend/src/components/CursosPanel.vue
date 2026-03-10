<template>
  <div class="container">
    <h2>Cursos Disponíveis</h2>

    <div v-if="loading" class="loading">
      Carregando cursos...
    </div>

    <div v-else-if="error" class="error">
      {{ error }}
    </div>

    <ul v-else class="cursos-list">
      <li v-for="curso in cursos" :key="curso.id">
        {{ curso.nombre }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Curso {
  id: number;
  nombre: string;
}

export default defineComponent({
  name: "CursosPanel",
  data() {
    return {
      cursos: [] as Curso[],
      loading: true,
      error: "",
    };
  },
  async mounted() {
    try {
      const res = await fetch("http://localhost:3000/cursos");
      if (!res.ok) throw new Error("Erro ao carregar cursos.");
      this.cursos = await res.json();
    } catch (err) {
      console.error(err);
      this.error = "Não foi possível carregar os cursos.";
    } finally {
      this.loading = false;
    }
  },
});
</script>

<style scoped>
.container {
  background: white;
  padding: 30px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
}
h2 {
  text-align: center;
  margin-bottom: 20px;
}
.cursos-list {
  list-style: none;
  padding: 0;
}
.cursos-list li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.loading {
  text-align: center;
  color: #555;
}
.error {
  text-align: center;
  color: red;
}
</style>