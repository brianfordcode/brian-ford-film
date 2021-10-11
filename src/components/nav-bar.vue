<template>
    <div id="nav">
        <div class="links">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/photography">Photography</router-link>
            <router-link to="/film">Film</router-link>
            <router-link to="/contact">Contact</router-link>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#nav {
  /* padding: 30px 0; */
  /* text-align: center; */
  z-index: 100000;
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  width: 50%;
  display: flex;
  align-items: center;
  border: 1px solid blue;
}

.links {
    border: 1px solid white;
    width: 50%;
    display: flex;
    justify-content: space-between;
}

.links a {
  color: black;
  font-weight: bold;
  text-decoration: none;
}

.links a.router-link-exact-active {
  color: rgb(17, 85, 15);
}
</style>