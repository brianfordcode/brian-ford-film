<template>
  <navigation/>
  <sideBar/>

  <router-view/>
</template>

<script>
import navigation from "./components/nav-bar.vue"
import sideBar from "./components/sidebar.vue"


export default {
  components: {
    navigation, sideBar
  }

}
</script>


<style>

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

</style>
