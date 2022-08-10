<template>
  <div id="app">
    <router-view name="profile"></router-view>
    <nav>
      <router-link :to="{ path: '/home' }">Home</router-link> |
      <button @click="aboutClick">About</button> |
    </nav>
    <keep-alive exclude="AboutView">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    aboutClick() {
      this.$router.push({
        path: '/about',
        name: 'about',
        params: {
          id: 'zs',
        },
        query: {
          name: '张三',
          age: 21,
        },
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
