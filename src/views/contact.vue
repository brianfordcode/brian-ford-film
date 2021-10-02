<template>


<div class="main">

  <sideBar/>

  <div class="container">
      <div class="wrapper">
        <div class="text">
          <p class="title">Let's Get In Touch!</p>
          <p>brianfordfilm@gmail.com</p>
          <p>805 689 5579</p>
        </div>
        
        <contactForm/>
      </div>





</div>
  
    
  </div>





</template>

<script>
import sideBar from "../components/sidebar.vue"
import contactForm from "../components/contact-form.vue"

export default {
  components: { sideBar, contactForm }

}
</script>

<style scoped>

.main {
  background-color: rgb(56,63,68);
  height: 100vh;
}

.container {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}

.wrapper {
  padding-top: 150px;
  padding-bottom: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 900px;
  /* height: 600px; */
  /* position: relative; */
  /* border: 1px solid blue; */
}

.text {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* border: 1px solid blue; */
}

.title {
  font-size: 50px;
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