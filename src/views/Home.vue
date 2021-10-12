<template>


  <div class="container">
    <div class="text-wrapper">
        <img id="logo" draggable="false" src="../assets/brian-ford-logo-white.png" alt="bf-logo">
        <p>Filmmaker | Screenwriter | Photographer</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>

.container {
  background-color: rgb(9,9,9);
  background: url("../assets/prof-pic.jpg");
  background-repeat: no-repeat;
  background-size: auto 75%;
  background-position: right;
  background-color: rgb(9,9,9);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid blue; */
}
.text-wrapper {
  /* border: 1px solid blue; */
  height: min-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
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
@media screen and (max-width: 500px) {
  #logo {
    height: 200px;
  }
  .text-wrapper p {
    font-size: 17.5px;
  }
}
</style>