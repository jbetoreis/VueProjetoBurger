<template>
  <div>
    <Banner/>
    <div class="main-container">
      <h1>Monte o seu Burguer</h1>
      <form></form>
    </div>
  </div>
</template>

<script>
  import Banner from '../components/Banner.vue'

  export default{
    name: 'HomeView',
    components: {
      Banner,
    }
  }
</script>
