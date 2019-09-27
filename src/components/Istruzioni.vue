<template>
    <div id="myImage">

      <!-- swiper -->
      <swiper :options="swiperOption" @reachEnd = "activateButton" class="swiffer">
        <swiper-slide><img v-bind:src = "getImage(0)" alt = "pagina" id="image"></swiper-slide>
        <swiper-slide><img v-bind:src = "getImage(1)" alt = "pagina" id="image"></swiper-slide>
        <swiper-slide><img v-bind:src = "getImage(2)" alt = "pagina" id="image"></swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>

      <router-link to = "/Game" ><img v-bind:src = "getImage(3)" class="iniziaIMG" alt="bottone"></router-link>
    </div>
</template>

<script>
  // import { image_info } from '../js/constants'
  // import Header from './Header'
  import { it_images } from "../assets/istruzioni/index.js"
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  var button_image = it_images.inizia;
  var disabled = true;
  // var currentLanguage = Header.data().currentLanguage;
  var img_source = it_images.italian0;

  export default {
    name: 'Istruzioni',
    data() {
      return{
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            type: 'progressbar'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },

    components: {
      swiper,
      swiperSlide
    },
    
    methods:{
      getImage(number){
        var img_source;

        switch (number) {
          case 0: 
          
            img_source = it_images.italian0;
                      
            break;

          case 1:

            img_source = it_images.italian1;
            /*if (currentImage === image_info.ITALIAN_IMAGE)
            button_image = ;
            else button_image = ;*/
            break;
          
            case 2:
              img_source = it_images.italian2;
              break;
                  
            case 3:
              img_source = it_images.inizia;
                  
        }

        return img_source;
      },
      activateButton(){
        disabled = false;
      },
      nextPage(){
        console.log("Next Page");
      }
    }
  }
</script>

<style src="../css/index.css"></style>
