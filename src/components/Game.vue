<template>
    <div>
        <div class="testo">
            <h1 class="turno"> Turno {{ turn }} </h1>
            <h1 class="probabilita">Probabilita' precipitazioni: {{ probabilita }} % </h1>
            <h1 class="assicuri"> cliccare la casella della rispettiva citta' per assicurarsi </h1>
        </div>
        <tr v-for = "(t, index) in teams" :key = "t">
            <img v-if = "t === 'big'" :src = "getImage(0)" class="image">
                <!-- Inserisci -->
            <img v-else-if = "t === 'medium'" :src = "getImage(1)" class="image1">
            
            <img v-else :src = "getImage(2)" class="image2">
            <label class="container">
                {{ t }}
                <input type = "checkbox" :id = "index"> 
                <span class="checkmark"></span>
            </label>
            <!-- 
            <button id = "yes" :disabled = "clicked" v-on:click = "confirmChoice(this.id, index)"> Si </button>
            <button id = "no" :disabled = "clicked" v-on = "confirmChoice(this.id, index)"> No </button>
            -->
        </tr>
        
        <router-link :to = "{name: 'Results', params: {teams : teams, risultati: risultati, turn: turn, events: events } }"> <button @click = "save" class="button"> Fine Round </button> </router-link>

    </div>
</template>

<script>

import { it_cities } from '../assets/selezione/index.js'

export default {
    name: "Game",
    props: [ ],
    data(){
        return{
            teams: [
                "big",
                "medium",
                "small"
            ],
            probabilita: Math.floor(Math.random() * 100),
            index: 0,
            risultati: Array.from(Array(3), () => new Array(10)), // team x turn
            turn: 1,
            events: new Array(10),
        }
        
    },
    methods: {
        getImage(number){
            switch(number){
                case 0:
                    return it_cities.big;
                case 1:
                    return it_cities.medium;
                case 2:
                    return it_cities.small;
            }
        },
        save(){
            
            for(var index in this.teams){
                // eslint-disable-next-line
                //console.log(document.getElementById(index).checked);
                if(this.$route.params.turn === undefined){
                    this.risultati[index][0] = document.getElementById(index).checked;
                } else {
                    this.risultati[index][this.$route.params.turn - 1] = document.getElementById(index).checked;
                }
                
            }

            var app = Math.floor(Math.random() * 100)
            if(app <= this.probabilita) this.event = true;
            else this.event = false;

            this.events[this.turn - 1] = this.event;
            
        }
    },
    created: function(){
        if(this.$route.params.turn === undefined){
            this.turn = 1;
        } else {
            this.turn = this.$route.params.turn;
            this.risultati = this.$route.params.risultati;
            this.events = this.$route.params.events;
        }
    }
}
</script>

<style src="../css/Game.css"></style>
