<template>
  <div class="about">
    <h1>About {{ params.id }}</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  props: ['params', 'msg'],
  created() {
    console.log('关于被创建！');
  },
  destroyed() {
    console.log('关于被销毁~');
  },
};
</script>

<style scoped>
.about {
  border: 1px solid red;
}
</style>
