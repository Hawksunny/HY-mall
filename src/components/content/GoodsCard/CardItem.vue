<template>
  <div class="card-item">
    <img :src="imgLink" alt="商品图片" @load="imageloaded" />
    <div class="info">
      <p class="sl-overflow">{{ description }}</p>
      <span class="price">￥{{ price }}</span>
      <span class="stars">{{ stars }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      imgLink: this.goodsItem.show.img,
      description: this.goodsItem.title,
      price: this.goodsItem.price,
      stars: this.goodsItem.cfav,
    };
  },
  methods: {
    imageloaded() {
      this.$bus.$emit("imageloaded");
    },
  },
};
</script>

<style scoped>
.card-item {
  position: relative;
  padding-bottom: 2.5em;
}
.card-item img {
  width: 100%;
  border-radius: 1.1rem;
}
.info {
  position: absolute;
  bottom: 0.25em;
  left: 0;
  right: 0;
  font-size: 12px;
  line-height: 1.2;
  text-align: center;
}
.price {
  color: var(--color-price);
  margin-right: 1.5em;
}
.stars {
  position: relative;
  padding-left: 1.2em;
}
.stars::before {
  content: "";
  width: 1em;
  height: 1em;
  background: no-repeat url(assets/icon/star.svg) 0 0/1em 1em;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
}
</style>
