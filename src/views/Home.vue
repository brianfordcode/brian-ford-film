<template>
  <div class="link-wrapper">
    <div class="link-content">

    </div>
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
  /* border: 1px solid blue; */
  background-color: rgb(9,9,9);
  
  /* background-size: cover; */
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
  background-color: white;
  height: 200px;
  width: 50px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-around;
  align-items: center;
}



</style>
