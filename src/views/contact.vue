<template>


<div class="main">

  <div class="container">
      <div class="wrapper">
        <div class="text">
          <p class="title">Let's Get In Touch!</p>
          <span><i class="fas fa-phone"></i><a href="tel: 805-689-5579">805 689 5579</a></span>
          <span><i class="fas fa-envelope-square"></i><a href="mailto:brianfordfilm@gmail.com ">brianfordfilm@gmail.com</a></span>
        </div>
        <contactForm/>
      </div>
  </div>

</div>





</template>

<script>
import contactForm from "../components/contact-form.vue"

export default {
  components: { contactForm }

}
</script>

<style scoped>

.main {
  background-color: rgb(56,63,68);
  min-height: 100vh;
}

.container {
  display: flex;
  justify-content: space-around;
}

.wrapper {
  padding-top: 150px;
  padding-bottom: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 900px;
  /* border: 1px solid blue; */
}

.text {
  color: white;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 50px;
}

p {
  margin-bottom: 3px;
}

a {
  margin-left: 5px;
  color: white;
  text-decoration: none;
}

span {
  margin: 0 0 3px;
}



@media screen and (max-width: 1100px) {
  .container {
    align-items: flex-start;
  }
  .wrapper {
    flex-direction: column;
    padding-top: 120px;
    padding-bottom: 100px;
  }
  .text {
    padding-bottom: 30px;
    display: flex;
    align-items: center;
  }
  .title {
    text-align: center;
    font-size: 40px;
  }
  
}

</style>