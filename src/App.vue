<template>
  <div id="app">
    <router-view></router-view>
    <my-tab-bar></my-tab-bar>
  </div>
</template>

<script>
import MyTabBar from "@/components/content/MyTabBar.vue";

export default {
  name: "App",
  components: {
    MyTabBar,
  },
};
</script>

<style>
@import url(assets/style/base.css);
</style>
