<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active" style="background-image: url('/img/burger.jpg');">
        <div class="conteudo_banner">
            <h1>Make Your Burger</h1>
        </div>
      </div>
      <div class="carousel-item" style="background-image: url('/img/burger.jpg');">
        
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
#carouselExampleControls .carousel-item {
    background-position: 0 60%;
    height: 500px;
    background-size: cover;
}

#carouselExampleControls .carousel-item .conteudo_banner{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
}

#carouselExampleControls .carousel-item .conteudo_banner h1{
    color: white;
    background-color: rgba(20, 20, 20, 0.5);
    padding: 1rem 3rem;
    text-align: center;
}

@media (max-width: 768px){
    #carouselExampleControls .carousel-item {
        background-position: 100% 60%;
    }
}

@media (max-width: 568px){
    #carouselExampleControls .carousel-item {
        background-position: 80% 60%;
    }
}

</style>