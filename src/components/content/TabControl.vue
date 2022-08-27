<template>
  <div class="tab-control">
    <ul>
      <li
        v-for="(item, index) in titles"
        :key="item"
        :class="{ active: curIndex === index }"
        @click="click(index)"
      >
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      curIndex: 0,
    };
  },
  methods: {
    click(index) {
      this.curIndex = index;
      this.$emit("tabControlClick", index);
    },
  },
};
</script>

<style scoped>
.active span {
  border-bottom: 0.2rem solid var(--color-highlight-text);
  color: var(--color-highlight-text);
}
ul {
  display: flex;
  text-align: center;
  background-color: #fff;
}
ul li {
  flex: 1;
  height: 2.5rem;
  line-height: 2.5rem;
}
ul li span {
  padding: 0.5rem;
}
</style>
