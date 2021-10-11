<template>
  <navigation/>

  <router-view/>
</template>

<script>
import navigation from "./components/nav-bar.vue"
export default {
  components: {
    navigation
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

#nav {
  padding: 30px 0;
  text-align: center;
  z-index: 100000;
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  width: 100%;
}

#nav a {
  color: white;
  font-weight: bold;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: rgb(17, 85, 15);
}
</style>
