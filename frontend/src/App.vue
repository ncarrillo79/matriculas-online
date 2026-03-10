<template>

<div>

  <nav class="navbar">

    <div class="logo">
      🎓 Sistema de Matrículas
    </div>

    <div class="menu">

      <router-link to="/">
        Inicio
      </router-link>

      <router-link to="/matricula">
        Matricular
      </router-link>

      <router-link to="/admin">
        Admin
      </router-link>

    </div>

  </nav>

  <main class="content">

    <router-view />

  </main>

</div>

</template>

<style>

body{
margin:0;
font-family:Arial, Helvetica, sans-serif;
background:#f4f6f8;
}

.navbar{
display:flex;
justify-content:space-between;
align-items:center;
padding:15px 40px;
background:#2c3e50;
color:white;
}

.logo{
font-weight:bold;
font-size:18px;
}

.menu a{
margin-left:20px;
color:white;
text-decoration:none;
font-weight:500;
}

.menu a:hover{
text-decoration:underline;
}

.content{
padding:40px;
}

</style>