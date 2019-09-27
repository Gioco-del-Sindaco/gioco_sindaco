<template>
    <div>
        <tr>
            <td> Giorno </td>
            <td> Evento </td>
            <td v-for = "t in $route.params.teams" :key = "t"> {{ t }} </td>
        </tr>
        <tr v-for = "i in 10" :key = "i">
            <td> {{ i }} </td>
            <td> {{ $route.params.events[ i - 1] }} </td>
            <td v-for = "(index, t) in $route.params.teams" :key = "index"> {{ $route.params.risultati[t][i-1] }} </td>
        </tr>
    </div>
</template>

<script>
export default {
    name: "Fine",
    data(){
        return{

        }
    }
}
</script>

<style>

</style>