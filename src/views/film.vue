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
            <span class="title">{{ film.title }}</span>
            <span>{{ film.description }}</span>
            <span>Roles: {{ film.roles }}</span>
          </div>
          <div class="awards"
              v-if="film.award1"
          >
            <img style="width: 150px" :src="`${film.award1}`" alt="award">
            <img style="width: 150px" :src="`${film.award2}`" alt="award">
          </div>
          <span v-if="film.websiteTitle">Website: 
            <a :href="`${film.websiteURL}`" target="_blank">{{film.websiteTitle}}</a>
          </span>
          
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
          description: "10 Minute short. Shot on 16mm film. An American mother and son cope with the absence of the father who is fighting overseas during WWII.",
          roles: "Screenwriter, Director, Editor",
          award1: require("../assets/awards/gi-laurel.png"),
          award2: require("../assets/awards/high-desert-laurel.png"),
          websiteTitle: "IMDb Page",
          websiteURL: "https://www.imdb.com/title/tt2424882/?ref_=fn_tt_tt_19",
        },
        {
          url: "https://player.vimeo.com/video/77258875?h=d067f71b65",
          title: "Brant Cotton - See If I Care",
          description: "Music Video for country singer Brant Cotton. Shot on location in the Santa Ynez Valley, CA.",
          roles: "Director, Editor",
          websiteTitle: "Brant Cotton",
          websiteURL: "https://www.facebook.com/Brantcotton/",
        },
        {
          url: "https://player.vimeo.com/video/573268188?h=ada4683bc1",
          title: "Xinspire Promo Video",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A voluptatum tempora quam ratione maiores itaque harum sed culpa provident expedita.",
          roles: "Director, Editor, Camera",
          websiteTitle: "Xinspire",
          websiteURL: "https://www.xinspire.com/",
        },
        {
          url: "https://player.vimeo.com/video/573274760?h=8151271e35",
          title: "Brunch at Sandbar",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A voluptatum tempora quam ratione maiores itaque harum sed culpa provident expedita.",
          roles: "Director, Producer, Editor,",
          websiteTitle: "Sandbar Santa Barbara",
          websiteURL: "https://sandbarsb.com/",
        },
        {
          url: "https://player.vimeo.com/video/584613989?h=77c56203df",
          title: "House Tour for Real Estate",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A voluptatum tempora quam ratione maiores itaque harum sed culpa provident expedita.",
          roles: "Director, Editor, Camera",
          websiteTitle: "",
          websiteURL: "",
        },
        {
          url: "https://player.vimeo.com/video/572907199?h=83e4423f22",
          title: "EPA Dream Center Promo Video",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A voluptatum tempora quam ratione maiores itaque harum sed culpa provident expedita.",
          roles: "Editor",
          websiteTitle: "EPA Dream Center",
          websiteURL: "https://www.epadreamcenter.org/",
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
  margin-bottom: 50px;
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
  padding-bottom: 10px;
}

.title {
  font-size: 30px;
}

a {
  text-decoration: none;
  color: white;
}

a:hover{
  color: grey;
}

.awards {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
}

@media screen and (max-width: 1200px){

  .film-wrapper {
    flex-direction: column;
    width: min-content;
  }

  .summary {
    width: 100%;
    margin-left: 0;
  }

  .awards {
    justify-content: space-around;
  }
}

@media screen and (max-width: 768px){
  iframe {
    width: 500px;
    height: 290px;
  }
}

@media screen and (max-width: 576px){
  iframe {
    width: 300px;
    height: 150px;
  }

  .summary {
    width: 85%;
  }
  .film-wrapper {
    padding-bottom: 0;
  }
}



</style>