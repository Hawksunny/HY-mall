<template>
  <div class="profile">
    <p>name: {{ query.name }}</p>
    <p>age: {{ query.age }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProfileView',
  props: ['query'],
};
</script>

<style scoped>
.profile {
  border: 1px solid darkblue;
}
</style>
