<template>
  <component :is = "currentView"></component>
</template>

<script>
import IstruzioniVue from './Istruzioni.vue';
export default {
  name: "router-view",
  return: {
      currentView: {}
  },
  created() {
    this.currentView = routes.find(
      route => route.path === window.location.pathname
    ).component;
  }
}
</script>

<style>

</style>