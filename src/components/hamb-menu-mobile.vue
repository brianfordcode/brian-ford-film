<template>
<div class="entire-page">
    <router-link v-if="!isHome" to="/"><img src="../assets/brian-ford-logo-white.png"/></router-link>
    <div class="container">
        
        <div id= "hamb-menu"
            :class="{ 'open': isOpen }"
            @click="isOpen = !isOpen"
            :active="isOpen"
        >
            <span class="burger-bar-1"></span>
            <span class="burger-bar-2"></span>
            <span class="burger-bar-3"></span>
        </div>

    </div>

    <div id="nav" v-if="isOpen" @click="isOpen = !isOpen">
        <div class="links">
            <router-link to="/about"><p>About</p></router-link>
            <router-link to="/photography"><p>Photography</p></router-link>
            <router-link to="/film"><p>Film</p></router-link>
            <router-link to="/contact"><p>Contact</p></router-link>
        </div>
    </div>
</div>


</template>

<script scoped>
export default {
    data() { return {
        isOpen: false
    }},
    computed: {
        isHome() {
            return this.$route.name === 'Home'
        }
    }
}
</script>

<style scoped>

    .container {
        z-index: 100000;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        background-color: rgba(0,0,0,0.75);
    }

img {
    z-index: 100000000000;
    position: fixed;
    height: 50px;
    padding: 20px 20px 20px 40px;
}

    #hamb-menu {
        z-index: 10000000000;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        transition: transform .5s ease-in-out;
        user-select: none;
        padding: 40px;
    }
    #hamb-menu span:nth-child(2) {
        margin: 5px 0;
    }
    #hamb-menu span {
        height: 2px;
        width: 25px;
        background-color: white;
        transition: transform .2s ease-in-out, opacity .2s ease-in-out;
    }
    #hamb-menu.open .burger-bar-1 {
        transform: translateY(7px) rotate(-45deg) ;
    }
    #hamb-menu.open .burger-bar-2 {
        opacity: 0;
    }
    #hamb-menu.open .burger-bar-3 {
        transform: translateY(-7px) rotate(45deg);
        top: 10px;
    }



#nav {
    position: fixed;
    z-index: 100;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    transform: translateY(84px);
    
}

.links {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 60%;
    transform: translateY(-56px);
   
}

.links a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

.links a p {
    font-size: 30px;
}

.links a.router-link-exact-active {
  border: 1px solid white;
  padding: 5px;
}

</style>