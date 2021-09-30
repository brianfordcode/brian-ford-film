<template>
  <div class="link-wrapper">
      <a href="#"><i class="link fab fa-imdb"></i></a>
      <a href="#"><i class="link fab fa-linkedin"></i></a>
  </div>
<div class="container">
  <div class="text-wrapper">
      <img id="logo" draggable="false" src="../assets/brian-ford-logo-white.png" alt="bf-logo">
      <p>Filmmaker | Photographer</p>
  </div>
</div>

</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>

.container {
  background: url("../assets/prof-pic.jpg");
  background-repeat: no-repeat;
  background-size: auto 75%;
  background-position: right;
  background-color: rgb(9,9,9);
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.text-wrapper p {
  color: white;
  font-size: 20px;
  text-align: center;
  margin-top: 50px;
}

#logo {
  height: 350px;
}

.link-wrapper {
  position: absolute;
  z-index: 100;
  background-color: rgba(255,255,255,0.75);
  /* height: 100%; */
  width: 50px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

a {
  transition: 0.1s ease-in-out;
}

a:hover {
  transform: scale(1.1);
}

.fa-imdb, .fa-linkedin {
  color: black;
  font-size: 40px;
  margin: 10px 0;
}


</style>
