<template>
  <nav id="nav">
    <router-link to="/"><img :src="logo" alt="Logo Burger" id="logo"></router-link>
    <router-link to="/">Home</router-link> |
    <router-link to="/pedidos">Pedidos</router-link>
  </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data(){

    },
};
</script>

<style scoped>
</style>