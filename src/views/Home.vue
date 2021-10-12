<template>

<div class="main">
  <div class="container">
    <div class="text-wrapper">
        <img id="logo" draggable="false" src="../assets/brian-ford-logo-white.png" alt="bf-logo">
        <p>Filmmaker | Screenwriter | Photographer</p>
    </div>


</div>

</div>

</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>

.main {
  background-color: rgb(9,9,9);
  min-height: 100vh;
}


.container {
  background: url("../assets/prof-pic.jpg");
  background-repeat: no-repeat;
  background-size: auto 75%;
  background-position: right;
  background-color: rgb(9,9,9);
  height: 100%;
  /* padding-top: 100px; */
}
.text-wrapper {
  /* border: 1px solid blue; */
  height: min-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
}
</style>