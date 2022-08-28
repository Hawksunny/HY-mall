<template>
  <div class="home-view">
    <home-nav-bar class="home-nav-bar" />
    <home-swiper :banners="banners" />
    <recommends-view :recommends="recommends" />
    <feature-view />
    <tab-control
      class="tab-control"
      :tabs="goodsTypes"
      @tabControlClick="switchGoodsType"
    />
    <goods-list :goods="curGoodsList" />
  </div>
</template>

<script>
import HomeNavBar from "./childCmps/HomeNavBar.vue";
import HomeSwiper from "./childCmps/HomeSwiper.vue";
import RecommendsView from "./childCmps/RecommendsView.vue";
import FeatureView from "./childCmps/FeatureView.vue";

import TabControl from "components/content/TabControl.vue";
import { GoodsList } from "components/content/GoodsCard";

import { getMultiData, getGoods } from "network/home";

export default {
  name: "HomeView",
  components: {
    HomeNavBar,
    HomeSwiper,
    RecommendsView,
    FeatureView,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      goodsTypes: ["流行", "新款", "精选"],
      curGoodsType: "pop",
    };
  },
  computed: {
    curGoodsList() {
      return this.goods[this.curGoodsType].list;
    },
  },
  created() {
    // 获取主页界面相关的数据
    this.getMultiData();
    // 获取主页初始化商品列表
    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    switchGoodsType(index) {
      switch (index) {
        case 0:
          this.curGoodsType = "pop";
          break;
        case 1:
          this.curGoodsType = "new";
          break;
        case 2:
          this.curGoodsType = "sell";
          break;
      }
    },
    /**
     * 网络请求相关的方法
     */
    getMultiData() {
      getMultiData().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getGoods(type) {
      const page = this.goods[type].page + 1;
      getGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
      });
    },
  },
};
</script>

<style scoped>
.home-nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>
