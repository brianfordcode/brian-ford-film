<template>

<!-- MODAL -->
<div class="modal-wrapper"
     v-if="selectedImage"
     :class="{ modal: true, open: modalOpen }"
     @click="closePic()">
    <img
        :src="selectedImage.url"
        :style="{
          'display': 'block',
          'max-width': '100%',
          'max-height': '100%'
        }"
    />
</div>

<!-- MAIN PAGE -->
<div class="image-container">
  <img
    v-for="(image, index) in images"
    @click="expandPic(index)"
    :key="image" 
    :src="image.url"
    alt="image"
    />
</div>

</template>

<script>

export default {
    methods: {
        expandPic(index) {
            this.selectedImageIndex = index
            this.modalOpen = true
        },
        closePic() {
            this.modalOpen = false
        }
    },
     computed: {
        selectedImage() {
            return this.images[this.selectedImageIndex]
        }
    },
    data() {
        return {
            selectedImageIndex: null,
            modalOpen: false,
            images: [
                {
                    url: "https://live.staticflickr.com/65535/51577670212_15f9cfec78_b.jpg",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579165564_d77cc27434_b.jpg",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579402205_5f83e26975_b.jpg[/img][/url][url=https://flic.kr/p/2mzTVh2]IMG_9752[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579402105_ba0ab532f6_b.jpg[/img][/url][url=https://flic.kr/p/2mzTVfi]IMG_9680[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579401915_3a56e8b784_b.jpg[/img][/url][url=https://flic.kr/p/2mzTVc2]IMG_9616[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579401630_21ffd33469_b.jpg[/img][/url][url=https://flic.kr/p/2mzTV77]IMG_9611[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578716038_dce164a479_b.jpg[/img][/url][url=https://flic.kr/p/2mzQpiy]IMG_9039[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578483511_11ec308ee3_b.jpg[/img][/url][url=https://flic.kr/p/2mzPdbt]IMG_8974[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578483341_28c3d50617_b.jpg[/img][/url][url=https://flic.kr/p/2mzPd8x]IMG_8829[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579400540_06b2dfd937_b.jpg[/img][/url][url=https://flic.kr/p/2mzTUMj]IMG_7832[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "",
                },
            ]
        }
    }
   

}
</script>

<style scoped>

.image-container {
    /* border: 1px solid black; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    max-width: 1500px;
    margin: 0 auto;
}

.image-container img {
    width: 300px;
    height: auto;
    margin: 5px;
    transition: .15s ease-in-out;
}

.image-container img:hover {
    transform: scale(1.03);
    filter: grayscale(100%);
    cursor: pointer;
}

/* MODAL */

.modal-wrapper {
    position: fixed;
    padding: 40px;
    top: 82px;
    bottom: 0;
    left: 0;
    right: 0;z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-wrapper p {
    color: white;
    /* font-size: 200px; */
}

.modal {
    display: none;
}

.open {
    background-color: rgba(0,0,0,0.75);
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-size: contain;
}




</style>
