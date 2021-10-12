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
      about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A voluptatum tempora quam ratione maiores itaque harum sed culpa provident expedita. Sapiente impedit ullam et maxime ex dolorem eligendi doloremque eum perferendis sit? Illo libero architecto illum quibusdam, saepe unde, nisi nobis officiis est ullam aperiam reprehenderit molestiae. Fugiat maxime similique minus magnam ipsum inventore laudantium a! Laboriosam, natus. Minima, tenetur quasi inventore natus repellat eum optio quaerat. Nam natus adipisci officiis soluta molestiae, ut laborum fuga porro assumenda nulla quaerat ad vitae eveniet id exercitationem iusto suscipit? Adipisci id molestias debitis quis eum similique incidunt tempore consectetur fuga, vitae aliquam."
    }
  },

}
</script>


<style scoped>

.container {
  background-color: rgb(59,44,31);
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 120px;
}

.pic-text-container {
  
  width: 450px;
  color: rgb(211, 211, 211);
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