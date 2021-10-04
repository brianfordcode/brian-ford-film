<template>

<!-- MODAL -->
<div 
  v-if="selectedImage"
  :class="{ modal: true, open: modalOpen }"
  @click="closePic()"
  :style="{
      'background-image': `url(${selectedImage.url})`,
      'background-repeat': 'no-repeat',
      'background-attachment': 'fixed',
      'background-position': 'center',
      'background-size': '80%',
  }"
/>



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
            console.log(this.selectedImageIndex)
            this.modalOpen = true
            console.log(this.modalOpen)
        },
        closePic() {
            this.modalOpen = false
            console.log(this.modalOpen)
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
                    url: "https://picsum.photos/300/200",
                },
                {
                    url: "https://picsum.photos/300/200",
                },
                {
                    url: "https://picsum.photos/300/200",
                },
                {
                    url: "https://picsum.photos/200/300",
                },
                {
                    url: "https://picsum.photos/200/300",
                },
                {
                    url: "https://picsum.photos/300/200",
                },
                {
                    url: "https://picsum.photos/200/300",
                },
                {
                    url: "https://picsum.photos/200/300",
                },
                {
                    url: "https://picsum.photos/300/200",
                },
                {
                    url: "https://picsum.photos/200/300",
                },
                {
                    url: "https://picsum.photos/300/200",
                },
                {
                    url: "https://picsum.photos/300/200",
                },
                {
                    url: "https://picsum.photos/200/300",
                },
                {
                    url: "https://picsum.photos/300/200",
                },
                {
                    url: "https://picsum.photos/200/300",
                },
                {
                    url: "https://picsum.photos/300/200",
                },
                {
                    url: "https://picsum.photos/300/200",
                },
                {
                    url: "https://picsum.photos/200/300",
                },
                {
                    url: "https://picsum.photos/300/200",
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
    margin: 5px;
    transition: .15s ease-in-out;
}

.image-container img:hover {
    transform: scale(1.03);
    filter: grayscale(100%);
    cursor: pointer;
}

/* MODAL */

.modal {
    display: none;
}

.open {
    z-index: 100;
    position: fixed;
    top: 82px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.75);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
}

#selected-image {
    width: 1000px;
    max-width: 80%;
    height: auto;
}




</style>