<template>
  <Navbar :logo="logo_src" :alt="app_name"/>
  <router-view/>
  <Footer/>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';
  
  export default{
    name: 'App',
    components: {
      Navbar,
      Footer,
    },
    data(){
      return {
        logo_src: "/img/logo.png",
        app_name: "Make your burguer"
      }
    }
  }
</script>

<style>
  *{
    font-family: Helvetica;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .main-container{
    margin: 2rem;
    min-height: 15rem;
  }

  h1{
    text-align: center;
    font-size: 3rem;
    margin-bottom: 2rem;
    color: rgb(53, 53, 53);
  }
</style>
