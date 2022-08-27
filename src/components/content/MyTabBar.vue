<template>
  <div class="my-tab-bar">
    <tab-bar>
      <!-- 主页 -->
      <tab-bar-item to="/home" :activeColor="activeColor">
        <template #icon>
          <div>
            <img src="~assets/icon/home.svg" alt="home" />
          </div>
        </template>
        <template #icon_ac>
          <div>
            <img src="~assets/icon/home-ac.svg" alt="home-ac" />
          </div>
        </template>
        <template #text>
          <div>
            <span>主页</span>
          </div>
        </template>
      </tab-bar-item>
      <!-- 分类 -->
      <tab-bar-item to="/category" :activeColor="activeColor">
        <template #icon>
          <div>
            <img src="~assets/icon/category.svg" alt="category" />
          </div>
        </template>
        <template #icon_ac>
          <div>
            <img src="~assets/icon/category-ac.svg" alt="category-ac" />
          </div>
        </template>
        <template #text>
          <div>
            <span>分类</span>
          </div>
        </template>
      </tab-bar-item>
      <!-- 购物车 -->
      <tab-bar-item to="/cart" :activeColor="activeColor">
        <template #icon>
          <div>
            <img src="~assets/icon/cart.svg" alt="cart" />
          </div>
        </template>
        <template #icon_ac>
          <div>
            <img src="~assets/icon/cart-ac.svg" alt="cart-ac" />
          </div>
        </template>
        <template #text>
          <div>
            <span>购物车</span>
          </div>
        </template>
      </tab-bar-item>
      <!-- 我的 -->
      <tab-bar-item to="/profile" :activeColor="activeColor">
        <template #icon>
          <div>
            <img src="~assets/icon/profile.svg" alt="profile" />
          </div>
        </template>
        <template #icon_ac>
          <div>
            <img src="~assets/icon/profile-ac.svg" alt="profile-ac" />
          </div>
        </template>
        <template #text>
          <div>
            <span>我的</span>
          </div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import { TabBar, TabBarItem } from "components/common/TabBar";

export default {
  name: "MyTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
  data() {
    return {
      activeColor: "#ffb900",
    };
  },
};
</script>

<style scoped>
img {
  width: 30px;
  height: 30px;
}
</style>
