<template>
  
  <div class="container">
    <div class="pic-text-container">
      <h1>About Me</h1>
      <img class="about-pic" src="../assets/about-pic.jpg" alt="about-pic"/>
      <p>{{about}}</p>
      <img class="signature" src="../assets/signature-white.png" alt="signature"/>
    </div>
  </div>

</template>

<script>

export default {
  data() {
    return {
      about: "Hello! My name is Brian Ford. I attended Loyola Marymount University School of Film and Television and have worked in the film and photo industry all over the world. Check out my photography and film projects. If you like what you see, let's get together and make something amazing! "
    }
  },

}
</script>


<style scoped>

.container {
  background-color: rgb(59,44,31);
  min-height: calc(100vh - 100px);
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 100px;
}

.pic-text-container {
  width: 450px;
  color: rgb(211, 211, 211);
  padding-bottom: 10px;
}

h1 {
  text-align: center;
  padding-bottom: 20px;
}

.about-pic {
  height: auto;
  width: 200px;
  padding-right: 10px;
  float: left;
}

.container p {
  text-align: justify;
}

.signature {
  height: auto;
  width: 200px;
  padding-top: 25px;
}

@media screen and (max-width: 700px) {
  .pic-text-container {
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    padding: 20px 30px 0 30px;
  }
  
}


</style>