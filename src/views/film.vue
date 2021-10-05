<template>
  <sideBar/>

  <div class="main">

    <div class="container">

      <div class="film-wrapper"
          v-for="film in films"
          :key="film"
      >
        <iframe
          :src="`${film.url}`" 
          allow="autoplay; fullscreen; picture-in-picture" 
          allowfullscreen
        />

        <div class="summary">
          <div class="summary-text">
            <span>{{ film.title }}</span>
            <span>{{ film.description }}</span>
          </div>
          <div class="awards"
              v-if="film.award1"
          >
            <img style="width: 150px" :src="`${film.award1}`" alt="award">
            <img style="width: 150px" :src="`${film.award2}`" alt="award">
          </div>
        </div>

      </div>
    </div>

 </div>



</template>

<script>
import sideBar from "../components/sidebar.vue"

export default {
  components: { sideBar },
  data() {
    return {
      films: [
        {
          url: "https://player.vimeo.com/video/77258876?h=14ac82ce37",
          title: "Home Front",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A voluptatum tempora quam ratione maiores itaque harum sed culpa provident expedita.",
          award1: require("../assets/awards/gi-laurel.png"),
          award2: require("../assets/awards/high-desert-laurel.png"),
        },
        {
          url: "https://player.vimeo.com/video/77258875?h=d067f71b65",
          title: "Brant Cotton - See If I Care",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A voluptatum tempora quam ratione maiores itaque harum sed culpa provident expedita.",
        },
        {
          url: "https://player.vimeo.com/video/573268188?h=ada4683bc1",
          title: "Xinspire Promo Video",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A voluptatum tempora quam ratione maiores itaque harum sed culpa provident expedita.",
        },
        {
          url: "https://player.vimeo.com/video/573274760?h=8151271e35",
          title: "Brunch at Sandbar",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A voluptatum tempora quam ratione maiores itaque harum sed culpa provident expedita.",
        },
        {
          url: "https://player.vimeo.com/video/584613989?h=77c56203df",
          title: "House Tour for Real Estate",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A voluptatum tempora quam ratione maiores itaque harum sed culpa provident expedita.",
        },
        {
          url: "https://player.vimeo.com/video/572907199?h=83e4423f22",
          title: "EPA Dream Center Promo Video",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A voluptatum tempora quam ratione maiores itaque harum sed culpa provident expedita.",
        },
      ]
    }
  }

}
</script>

<style scoped>

.main {
  padding-top: 120px;
  background-color: rgb(34, 34, 34);
}

.container {
  width: 70%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}

.film-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  /* border: 1px solid green; */
  position: relative;
}

iframe {
  width: 640px;
  height: 360px;
  border: none;
}

.summary {
  /* border: 1px solid blue; */
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  margin-left: 20px;
}

.summary-text {
  display: flex;
  flex-direction: column;
}

span {
  padding-bottom: 20px;
}

.awards {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>