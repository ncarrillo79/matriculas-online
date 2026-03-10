<template>
  <div class="container">
    <div class="card">
      <h2>Matrícula al Curso</h2>

      <form @submit.prevent="enviarMatricula">

        <div class="field">
          <label>Nombre</label>
          <input v-model="nombre" placeholder="Tu nombre completo" />
          <span class="error" v-if="errores.nombre">{{ errores.nombre }}</span>
        </div>

        <div class="field">
          <label>Email</label>
          <input type="email" v-model="email" placeholder="tu@email.com" />
          <span class="error" v-if="errores.email">{{ errores.email }}</span>
        </div>

        <div class="field">
          <label>Teléfono</label>
          <input v-model="telefono" placeholder="Opcional" />
        </div>

        <div class="field">
          <label>Curso</label>
          <select v-model="curso_id">
            <option disabled value="">Seleccione un curso</option>
            <option v-for="curso in cursos" :key="curso.id" :value="curso.id">
              {{ curso.nombre }}
            </option>
          </select>
          <span class="error" v-if="errores.curso_id">{{ errores.curso_id }}</span>
        </div>

        <button type="submit" :disabled="loading">
          {{ loading ? "Enviando..." : "Matricularme" }}
        </button>

        <p class="success" v-if="success">{{ success }}</p>
        <p class="error" v-if="error">{{ error }}</p>

      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Curso {
  id: number;
  nombre: string;
}

export default defineComponent({
  name: "FormularioMatricula",
  data() {
    return {
      nombre: "",
      email: "",
      telefono: "",
      curso_id: "",
      cursos: [] as Curso[],
      errores: {} as Record<string, string>,
      success: "",
      error: "",
      loading: false,
    };
  },
  async mounted() {
    try {
      const res = await fetch("http://localhost:3000/cursos");
      this.cursos = await res.json();
    } catch (err) {
      console.error(err);
    }
  },
  methods: {
    validar() {
      this.errores = {};
      if (!this.nombre) this.errores.nombre = "El nombre es obligatorio.";
      if (!this.email) this.errores.email = "El email es obligatorio.";
      else if (!/\S+@\S+\.\S+/.test(this.email))
        this.errores.email = "Email inválido.";
      if (!this.curso_id) this.errores.curso_id = "Seleccione un curso.";
      return Object.keys(this.errores).length === 0;
    },
    async enviarMatricula() {
      if (!this.validar()) return;

      this.loading = true;
      this.success = "";
      this.error = "";

      try {
        const res = await fetch("http://localhost:3000/matricula", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nombre: this.nombre,
            email: this.email,
            telefono: this.telefono,
            curso_id: Number(this.curso_id),
          }),
        });

        if (res.status === 201) {
          this.success = "Matrícula registrada con éxito!";
          this.nombre = "";
          this.email = "";
          this.telefono = "";
          this.curso_id = "";
        } else {
          const data = await res.json();
          this.error = data.mensaje || "Error al enviar la matrícula.";
        }
      } catch (err) {
        this.error = "Error de conexión con el servidor.";
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
  },
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background: #f4f6f8;
}
.card {
  background: white;
  padding: 40px;
  border-radius: 10px;
  width: 380px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
h2 {
  text-align: center;
  margin-bottom: 25px;
}
.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
}
label {
  font-size: 14px;
  margin-bottom: 5px;
  color: #555;
}
input,
select {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
}
input:focus,
select:focus {
  outline: none;
  border-color: #4caf50;
}
button {
  width: 100%;
  padding: 12px;
  border: none;
  background: #4caf50;
  color: white;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
}
button:hover {
  background: #43a047;
}
button:disabled {
  background: #a5d6a7;
  cursor: not-allowed;
}
.error {
  color: red;
  font-size: 12px;
}
.success {
  color: green;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
}
</style>