<template>
  <sideBar/>
  <div class="container">
    <photos/>


  </div>





</template>

<script>
import sideBar from "../components/sidebar.vue"
import photos from "../components/photos.vue"

export default {
  components: { sideBar, photos }

}
</script>

<style scoped>
.container {
  padding-top: 120px;
  padding-bottom: 100px;
  background-color: rgb(238, 238, 238);
}

</style>