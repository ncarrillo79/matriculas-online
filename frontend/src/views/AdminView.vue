<template>
  <div class="admin-container">
    <h1>Panel Administrador</h1>

    <!-- Panel de Matrículas -->
    <AdminMatriculas />

    <hr />

    <!-- Panel de Cursos -->
    <AdminCursos />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AdminMatriculas from "../components/AdminMatriculas.vue";
import AdminCursos from "../components/AdminCursos.vue";

export default defineComponent({
  name: "AdminView",
  components: {
    AdminMatriculas,
    AdminCursos
  }
});
</script>

<style scoped>
.admin-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
}

hr {
  margin: 40px 0;
  border: 0;
  border-top: 1px solid #ddd;
}
</style>