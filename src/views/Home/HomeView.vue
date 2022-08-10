<template>
  <div class="home">
    <nav>
      <router-link to="/home/news">news</router-link> |
      <router-link to="/home/message">message</router-link>
    </nav>
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
    <img alt="Vue logo" src="@/assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      pathCache: '',
    };
  },
  beforeRouteLeave(to, from, next) {
    this.pathCache = from.path;
    next();
  },
  activated() {
    console.log('主页很活跃！');
    this.pathCache = this.$route.path;
    if (this.$route.path !== this.pathCache) {
      this.$router.push(this.pathCache);
    }
  },
  deactivated() {
    console.log('主页枯萎了~');
  },
  created() {
    console.log('主页被创建！');
  },
  destroyed() {
    console.log('主页被销毁~');
  },
};
</script>

<style scoped>
.home {
  border: 1px solid red;
}
</style>
