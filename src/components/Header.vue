<template>
    <div id = "head">
        <img src='../assets/header/bordo.png' class="bordo">
        <nav>
            <button id="italian" v-on:click.prevent="toItalian" :disabled="italianButton"><img src="../assets/header/IT.png" class="ButtonIMG"></button>
            <button id="english" v-on:click.prevent="toEnglish" :disabled="englishButton"><img src="../assets/header/ENG.jpg" class="ButtonIMG"></button>     
        </nav>
    </div>
</template>

<script>

    import { image_info } from '../js/constants'
    var italianButton = true;
    var englishButton = false;
    var currentLanguage = image_info.ITALIAN_IMAGE;

    export default {
        name: 'Header',
        data() {
            return{  
                italianButton,
                englishButton,
                currentLanguage,    
            }
        },
        methods: {    
            toItalian() {
                this.italianButton = true;
                this.englishButton = false;
                currentLanguage = image_info.ITALIAN_IMAGE;
                console.log(currentLanguage);
            },

            toEnglish() {
                this.italianButton = false;
                this.englishButton = true;
                currentLanguage = image_info.ENGLISH_IMAGE;
                console.log(currentLanguage);
            },
        }
    }

</script>

<style src="../css/header.css"></style>
