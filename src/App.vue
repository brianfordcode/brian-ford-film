<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/photography">Photography</router-link> |
    <router-link to="/film">Film</router-link> |
    <router-link to="/contact">Contact</router-link>
  </div>
  <router-view/>
</template>

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
  /* margin-top: 75px; */
  background-color: rgba(0,0,0,0.5);
  position: absolute;
  width: 100%;
}

#nav a {
  color: white;
  font-weight: bold;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: blue;
}
</style>
