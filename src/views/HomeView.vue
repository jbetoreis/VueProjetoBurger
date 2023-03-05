<template>
  <div>
    <Banner/>
    <div class="main-container">
      <h1>Monte o seu Burguer</h1>
      <Form/>
    </div>
  </div>
</template>

<script>
  import Banner from '../components/Banner.vue'
  import Form from '../components/Form.vue'
  export default{
    name: 'HomeView',
    components: {
      Banner,
      Form,
    }
  }
</script>
