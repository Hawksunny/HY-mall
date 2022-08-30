<template>
  <div class="home-view">
    <home-nav-bar class="home-nav-bar" />
    <tab-control
      class="tab-control"
      :tabs="goodsTypes"
      @tabControlClick="tabControlClick"
      v-show="isTabControlFixed"
    />
    <back-top v-show="isBackTopShow" @click.native="backTop" />
    <my-scroll
      class="scroll-wrapper"
      ref="scroll"
      :probe-type="2"
      :pull-up-load="true"
      :mouseWheel="true"
      @scroll="contentScroll"
      @pullingUp="loadMoreGoods"
    >
      <home-swiper :banners="banners" />
      <recommends-view :recommends="recommends" />
      <feature-view />
      <tab-control
        class="tab-control"
        ref="tab-control"
        :tabs="goodsTypes"
        @tabControlClick="tabControlClick"
      />
      <goods-list :goods="curGoodsList" />
      <div class="pullup-tips">
        <div v-if="!isGoodsLoading">
          <span>上拉加载更多</span>
        </div>
        <div v-else>
          <span>加载中...</span>
        </div>
      </div>
    </my-scroll>
  </div>
</template>

<script>
import HomeNavBar from "./childCmps/HomeNavBar.vue";
import HomeSwiper from "./childCmps/HomeSwiper.vue";
import RecommendsView from "./childCmps/RecommendsView.vue";
import FeatureView from "./childCmps/FeatureView.vue";

import TabControl from "components/content/TabControl.vue";
import { GoodsList } from "components/content/GoodsCard";
import BackTop from "components/content/BackTop.vue";

import { getMultiData, getGoods } from "network/home";
import { debounce } from "@/assets/js/utils";

export default {
  name: "HomeView",
  components: {
    HomeNavBar,
    HomeSwiper,
    RecommendsView,
    FeatureView,
    TabControl,
    GoodsList,
    BackTop,
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
      isBackTopShow: false,
      isGoodsLoading: false,
      tabControlOffsetTop: 0,
      isTabControlFixed: false,
      scrollY: 0,
    };
  },
  computed: {
    curGoodsList() {
      return this.goods[this.curGoodsType].list;
    },
  },
  created() {
    // 1. 获取主页界面相关的数据
    this.getMultiData();
    // 2. 获取主页初始化商品列表
    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");
  },
  mounted() {
    // 1. 每次图片加载完成都让scroll重新计算可滚动内容高度，以确保不出bug
    const refresh = debounce(this.$refs.scroll.refresh, 20);
    this.$bus.$on("imageloaded", () => {
      refresh();
    });
    // 2. 获取DOM渲染完后tabControl对应DOM的offSetTop属性
    setTimeout(() => {
      this.tabControlOffsetTop = this.$refs["tab-control"].$el.offsetTop;
    }, 200);
  },
  activated() {
    // console.log(this.scrollY);
    this.$refs["scroll"].scrollTo(0, this.scrollY, 0);
  },
  deactivated() {
    this.scrollY = this.$refs["scroll"].getScrollY();
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    tabControlClick(index) {
      // 切换GoodsType
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
    contentScroll(pos) {
      // 1. 判断何时显示回到顶部小图标
      this.isBackTopShow = -pos.y > 750;
      // 2. 判断何时固定tabControl
      this.isTabControlFixed = -pos.y > this.tabControlOffsetTop;
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    loadMoreGoods() {
      this.isGoodsLoading = true;
      if (this.isGoodsLoading) {
        new Promise((resolve) => {
          this.getGoods(this.curGoodsType);
          resolve();
        }).then(() => {
          this.$refs.scroll.finishPullUp();
          this.isGoodsLoading = false;
        });
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
.home-view {
  position: relative;
  height: 100vh;
}
.scroll-wrapper {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.tab-control {
  position: relative;
  z-index: 9;
}
.pullup-tips {
  padding: 1rem;
  text-align: center;
  color: var(--color-text);
}
</style>
