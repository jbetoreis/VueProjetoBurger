<template>
  <nav id="nav">
    <router-link to="/" id="logo"><img :src="logo" :alt="alt"></router-link>
    <router-link to="/">Home</router-link>
    <router-link to="/pedidos">Pedidos</router-link>
  </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data(){

    },
    props: ['logo', 'alt']
};
</script>

<style scoped>

#nav{
  background-color: rgb(37, 37, 37);
  border-bottom: 3px solid black;
  padding: 15px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#nav #logo{
  margin: auto;
  margin-left: 0;
}

#nav #logo img{
  width: 40px;
  height: 40px;
}

#nav a{
  color: rgb(252, 188, 68);
  text-decoration: none;
  margin: 12px;
  transform: 0.5s;
}

#nav a:hover{
  color: white;
}

</style>