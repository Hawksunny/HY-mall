<template>
  <div class="home-msg">message</div>
</template>

<script>
export default {
  name: 'HomeMessage',
  activated() {
    console.log('msg activated!');
  },
  deactivated() {
    console.log('msg deactivated~');
  },
  created() {
    console.log('msg被创建！');
  },
  destroyed() {
    console.log('msg被销毁~');
  },
};
</script>

<style scoped>
.home-msg {
  background-color: yellow;
}
</style>
