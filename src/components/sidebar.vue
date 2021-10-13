<template>
  <div class="link-wrapper">
    <a href="https://www.imdb.com/name/nm3487924/?ref_=tt_ov_dr" target="_blank"><i class="fab fa-imdb"></i></a>
    <a href="https://www.linkedin.com/in/brianfordfilm/" target="_blank"><i class="fab fa-linkedin"></i></a>
    <a href="https://vimeo.com/brianfordfilm" target="_blank"><i class="fab fa-vimeo"></i></a>
    <a href="https://www.flickr.com/photos/194155689@N04/" target="_blank"><i class="fab fa-flickr"></i></a>
    
  </div>
      
</template>

<script>
export default {

}
</script>

<style scoped>

.link-wrapper {
  z-index: 1000;
  position: fixed;
  background-color: rgba(255,255,255,0.65);
  width: 55px;
  height: 250px;
  top: 50%;
  transform: translateY(-50%);
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  
}

a {
  transition: 0.2s ease-in-out;
}

a:hover {
  transform: scale(1.1);
}

.fa-imdb, .fa-linkedin, .fa-envelope-square, .fa-vimeo, .fa-flickr {
  color: black;
  font-size: 40px;
}

@media screen and (max-width: 700px) {
  .link-wrapper {
    position: fixed;
    background-color: rgba(255,255,255,0.65);
    width: 250px;
    height: 55px;
    margin: 0 auto;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(-100%);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 0;
  }
}

</style>