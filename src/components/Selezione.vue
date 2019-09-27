<!-- La selezione rimane in pausa causa problemi con v-for -->
<template>
    <div id="selezione">
        <div class="slidecontainer">
            <input type="range" min="3" max="8" :value="groupNumber"
                   class="slider" id="sliderRange"> 
        </div>

        <tr v-for = "i in groupNumber" :key = "i">
            <input v-model="message" placeholder="edit me">
            
        </tr>

        <input type = "button" @click="updateNumber">
        
    </div>
</template>

<script>

export default {
    name: "Selezione",
    data(){
        return{
            groupNumber: 3, 
            
        }
    },
    methods: {
        updateNumber(){
            groupNumber = document.getElementById("sliderRange").value;
            console.log(groupNumber);
        }
    }
    
}
</script>

<style src="../css/caricadati.css"></style>
<style src="../css/slider.css"></style>
