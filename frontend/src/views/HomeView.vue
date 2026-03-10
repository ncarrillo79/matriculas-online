<template>
  <div class="home-container">
    <h1>Sistema de Matrículas Online</h1>

    <router-link to="/matricula" class="btn">
      Ir al Formulario
    </router-link>

    <!-- Panel de cursos -->
    <CursosPanel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CursosPanel from "../components/CursosPanel.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    CursosPanel
  }
});
</script>

<style scoped>
.home-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
}

h1 {
  font-size: 28px;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  margin-bottom: 40px;
  padding: 12px 20px;
  background: #4caf50;
  color: white;
  text-decoration: none;
  font-weight: 500;
  border-radius: 6px;
  transition: 0.2s;
}

.btn:hover {
  background: #43a047;
}
</style>