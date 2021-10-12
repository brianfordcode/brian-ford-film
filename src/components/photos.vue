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
                    url: "https://live.staticflickr.com/65535/51577670212_15f9cfec78_b.jpg[/img][/url][url=https://flic.kr/p/2mzK3q5]TheVegetableSeller[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579165564_d77cc27434_b.jpg[/img][/url][url=https://flic.kr/p/2mzSGW1]IMG_9773[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
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
                    url: "https://live.staticflickr.com/65535/51578715178_6040b5134c_b.jpg[/img][/url][url=https://flic.kr/p/2mzQp3J]IMG_7628[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51577666452_ea398e393c_b.jpg[/img][/url][url=https://flic.kr/p/2mzK2if]IMG_7107[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51577666362_982a22040e_b.jpg[/img][/url][url=https://flic.kr/p/2mzK2gG]IMG_7070[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579399875_f3933a05aa_b.jpg[/img][/url][url=https://flic.kr/p/2mzTUzR]IMG_7068[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51577666042_0982594dc2_b.jpg[/img][/url][url=https://flic.kr/p/2mzK2bb]IMG_7063[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579399470_a50abb4a8b_b.jpg[/img][/url][url=https://flic.kr/p/2mzTUsS]IMG_6669[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578714173_cafaa6340a_b.jpg[/img][/url][url=https://flic.kr/p/2mzQoKp]IMG_6322[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579162659_8659f7c027_b.jpg[/img][/url][url=https://flic.kr/p/2mzSG4V]IMG_6253[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578481766_3283143ccb_b.jpg[/img][/url][url=https://flic.kr/p/2mzPcEo]IMG_5988[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579162354_4fdefa29ca_b.jpg[/img][/url][url=https://flic.kr/p/2mzSFYE]IMG_5746[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579398595_3dd94aa01d_b.jpg[/img][/url][url=https://flic.kr/p/2mzTUcM]IMG_5718[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578481356_ef9a341c55_b.jpg[/img][/url][url=https://flic.kr/p/2mzPcxj]IMG_5598[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578713298_a6632a15c3_b.jpg[/img][/url][url=https://flic.kr/p/2mzQouj]IMG_5550[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51577664792_ccca166dff_b.jpg[/img][/url][url=https://flic.kr/p/2mzK1NC]IMG_5377[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578712988_f901b54239_b.jpg[/img][/url][url=https://flic.kr/p/2mzQooY]IMG_5326[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578712873_ab8a05eeb4_b.jpg[/img][/url][url=https://flic.kr/p/2mzQomZ]IMG_5319[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578480706_7a67afb551_b.jpg[/img][/url][url=https://flic.kr/p/2mzPcm7]IMG_5272[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579397715_86686cb59b_b.jpg[/img][/url][url=https://flic.kr/p/2mzTTWB]IMG_5178[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578480401_d67e194358_b.jpg[/img][/url][url=https://flic.kr/p/2mzPcfR]IMG_5034[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578480266_3b5f0aec83_b.jpg[/img][/url][url=https://flic.kr/p/2mzPcdw]IMG_4968[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578712133_4d6c9ec6e6_b.jpg[/img][/url][url=https://flic.kr/p/2mzQo9e]IMG_4782[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578712023_ec17f3f0aa_b.jpg[/img][/url][url=https://flic.kr/p/2mzQo7k]IMG_4754[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578479801_77d95f9286_b.jpg[/img][/url][url=https://flic.kr/p/2mzPc5v]IMG_4691[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579160369_0115c7646c_b.jpg[/img][/url][url=https://flic.kr/p/2mzSFor]IMG_4630[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579160199_05bf39a64d_b.jpg[/img][/url][url=https://flic.kr/p/2mzSFkv]IMG_4489[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578711503_74930d66ee_b.jpg[/img][/url][url=https://flic.kr/p/2mzQnXn]IMG_4085[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578711393_c8304a9c76_b.jpg[/img][/url][url=https://flic.kr/p/2mzQnVt]IMG_4006[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51577662697_fd3070f49e_b.jpg[/img][/url][url=https://flic.kr/p/2mzK1bv]IMG_3985 2[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579396210_e6aaeb67c6_b.jpg[/img][/url][url=https://flic.kr/p/2mzTTuE]IMG_3914[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578710943_6e271223aa_b.jpg[/img][/url][url=https://flic.kr/p/2mzQnMH]IMG_3865 2[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579395870_ea49e108cd_b.jpg[/img][/url][url=https://flic.kr/p/2mzTToN]IMG_3864 2[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578478631_118b10be96_b.jpg[/img][/url][url=https://flic.kr/p/2mzPbJk]IMG_3506[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579159049_50d447778d_b.jpg[/img][/url][url=https://flic.kr/p/2mzSEZF]IMG_3389[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579395375_04afe53f58_b.jpg[/img][/url][url=https://flic.kr/p/2mzTTfg]IMG_3327[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579395145_2a8f8a135a_b.jpg[/img][/url][url=https://flic.kr/p/2mzTTbi]IMG_3293[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579158539_642d1d7cca_b.jpg[/img][/url][url=https://flic.kr/p/2mzSEQT]IMG_3276[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578477736_2079f774a0_b.jpg[/img][/url][url=https://flic.kr/p/2mzPbsU]IMG_3218[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579394730_4f7f780aa9_b.jpg[/img][/url][url=https://flic.kr/p/2mzTT49]IMG_3065[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579158069_8c08e8e94d_b.jpg[/img][/url][url=https://flic.kr/p/2mzSEGM]IMG_2943[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579394405_0832a0a187_b.jpg[/img][/url][url=https://flic.kr/p/2mzTSXx]IMG_2822[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579157729_495ca2859a_b.jpg[/img][/url][url=https://flic.kr/p/2mzSEAV]IMG_2631[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579157599_d214fe9d55_b.jpg[/img][/url][url=https://flic.kr/p/2mzSEyF]IMG_1528[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579157414_1c05c037eb_b.jpg[/img][/url][url=https://flic.kr/p/2mzSEvu]IMG_1237[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578476666_71ee6e4996_b.jpg[/img][/url][url=https://flic.kr/p/2mzPb9s]IMG_1224[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578476311_45a14c6911_b.jpg[/img][/url][url=https://flic.kr/p/2mzPb3k]IMG_0985[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579393220_eed38982b0_b.jpg[/img][/url][url=https://flic.kr/p/2mzTSB7]IMG_0748[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "[https://live.staticflickr.com/65535/51578708043_5e4da1841f_b.jpg[/img][/url][url=https://flic.kr/p/2mzQmVH]IMG_0733[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579156444_a2173c5d72_b.jpg[/img][/url][url=https://flic.kr/p/2mzSEdL]IMG_0686[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578475556_61d34ac4a5_b.jpg[/img][/url][url=https://flic.kr/p/2mzPaPj]IMG_0677[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51577659432_640691267a_b.jpg[/img][/url][url=https://flic.kr/p/2mzJZdd]IMG_0341[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578475146_512bc378aa_b.jpg[/img][/url][url=https://flic.kr/p/2mzPaGf]IMG_0318[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579392160_1340f6b8a6_b.jpg[/img][/url][url=https://flic.kr/p/2mzTShQ]IMG_0023[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578707068_3b0781b85f_b.jpg[/img][/url][url=https://flic.kr/p/2mzQmCU]IMG_0009[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578474756_3f1c7e0f08_b.jpg[/img][/url][url=https://flic.kr/p/2mzPazw]GOPR1766[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579155519_08e60a4cf4_b.jpg[/img][/url][url=https://flic.kr/p/2mzSDWP]DSC_4151 - 2015-07-03 at 11-49-00[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579391610_6122fd8969_b.jpg[/img][/url][url=https://flic.kr/p/2mzTS8m]BRI_8947[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578706583_f0c4d1338d_b.jpg[/img][/url][url=https://flic.kr/p/2mzQmux]BRI_8778[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579154804_47bc8fb15e_b.jpg[/img][/url][url=https://flic.kr/p/2mzSDJu]BRI_8772[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579391010_d79032fd27_b.jpg[/img][/url][url=https://flic.kr/p/2mzTRX1]BRI_4952[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578473376_c0529ec078_b.jpg[/img][/url][url=https://flic.kr/p/2mzPaaJ]BRI_4289 - 2015-09-15 at 13-39-23[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578473106_2652c0681b_b.jpg[/img][/url][url=https://flic.kr/p/2mzPa65]BRI_4207 - 2015-09-15 at 13-14-29[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578705038_195c3bf9e0_b.jpg[/img][/url][url=https://flic.kr/p/2mzQm2U]BRI_4178 - 2015-09-15 at 13-05-44[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578472391_39bfe936b7_b.jpg[/img][/url][url=https://flic.kr/p/2mzP9SK]BRI_4150 - 2015-09-15 at 12-46-22[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579152909_49be7bcd82_b.jpg[/img][/url][url=https://flic.kr/p/2mzSDaP]BRI_4067[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578471916_5e0e81a743_b.jpg[/img][/url][url=https://flic.kr/p/2mzP9Jy]BRI_3644[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51579389045_76b8ff1a2c_b.jpg[/img][/url][url=https://flic.kr/p/2mzTRn8]BRI_2490 - 2015-09-09 at 12-52-04[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51578703848_9601256fd4_b.jpg[/img][/url][url=https://flic.kr/p/2mzQkFo]BRI_2067[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
                },
                {
                    url: "https://live.staticflickr.com/65535/51577655327_5cb001acaf_b.jpg[/img][/url][url=https://flic.kr/p/2mzJXZr]BRI_1898[/url] by [url=https://www.flickr.com/photos/194155689@N04/]Brian Ford[/url], on Flickr",
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
