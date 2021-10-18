<template>
    <div id="nav">
        <div class="links">
            <img v-if="!isHome" src="../assets/brian-ford-logo-white.png"/>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/photography">Photography</router-link>
            <router-link to="/film">Film</router-link>
            <router-link to="/contact">Contact</router-link>
        </div>
    </div>

    <mobileMenu class="mobile-menu"/>

</template>

<script>
import mobileMenu from "./hamb-menu-mobile.vue"
export default {
    components: {
        mobileMenu
    },
    computed: {
        isHome() {
            return this.$route.name === 'Home'
        }
    }

}
</script>

<style scoped>

.mobile-menu {
    display: none;
}

#nav {
  z-index: 100000;
  background-color: rgba(0,0,0,0.75);
  position: fixed;
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 30px 0;
}

.links {
    width: 100%;
    max-width: 500px;
    min-width: 350px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

img {
    height: 50px;
}

.links a {
  color: white;
  font-weight: bold;
  text-decoration: none;
}

.links a.router-link-exact-active {
  border: 1px solid white;
  padding: 5px;
}

@media screen and (max-width: 550px) {
    #nav {
        display: none;
    }
    .mobile-menu {
        display: initial;
    }
    
}


</style>