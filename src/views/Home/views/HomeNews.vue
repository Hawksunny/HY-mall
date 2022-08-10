<template>
  <div class="home-news">news</div>
</template>

<script>
export default {
  name: 'HomeNews',
  activated() {
    console.log('news activated!');
  },
  deactivated() {
    console.log('news deactivated~');
  },
  created() {
    console.log('news被创建！');
  },
  destroyed() {
    console.log('news被销毁~');
  },
};
</script>

<style scoped>
.home-news {
  background-color: green;
}
</style>
