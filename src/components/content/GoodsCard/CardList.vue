<template>
  <div class="card-list">
    <card-item
      class="card-item"
      v-for="(item, id) in goods"
      :key="id + item.iid"
      :goods-item="item"
    />
  </div>
</template>

<script>
import CardItem from "./CardItem.vue";

export default {
  name: "CardList",
  components: {
    CardItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.card-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
.card-item {
  align-self: flex-start;
  width: 45%;
  margin-top: 5px;
}
</style>
