<template>
  <div class="home-view">
    <nav-bar class="nav-bar">
      <template #center>
        <span>购物街</span>
      </template>
    </nav-bar>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" :alt="`${item.title}图片`" />
        </a>
      </swiper-item>
    </swiper>
    <h2>主页</h2>
  </div>
</template>

<script>
import { getMultiData } from "network/home";
import { NavBar } from "components/common/NavBar";
import { Swiper, SwiperItem } from "components/common/Swiper";

export default {
  name: "HomeView",
  components: {
    NavBar,
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    getMultiData().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.5rem;
}
</style>
