<template>
  <div>
    <!-- Solo renderizamos el componente de formulario -->
    <FormularioMatricula />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormularioMatricula from "../components/FormularioMatricula.vue";

export default defineComponent({
  name: "MatriculaView",
  components: {
    FormularioMatricula
  }
});
</script>

