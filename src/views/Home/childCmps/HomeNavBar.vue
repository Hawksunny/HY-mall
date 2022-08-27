<template>
  <div class="home-nav-bar">
    <nav-bar>
      <template #center>
        <span>购物街</span>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import { NavBar } from "components/common/NavBar";

export default {
  name: "HomeNavBar",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.home-nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.5rem;
}
</style>
