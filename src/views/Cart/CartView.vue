<template>
  <div class="cart-view">
    <h2>购物车</h2>
    <div class="btnGroup">
      <button @click="increment">+9</button>
      <button @click="delayIncre">+1000(delayed)</button>
      <button @click="decrement">-5</button>
    </div>
    <h2>count = {{ count }}</h2>
    <h2>10 × count = {{ cpxCount }}</h2>
  </div>
</template>

<script>
import * as types from '@/store/mutaion-types';
import { mapState } from 'vuex';

export default {
  name: 'CartView',
  data: () => ({
    factor: 10,
  }),
  computed: {
    ...mapState(['count']),
    ...mapState({
      cpxCount(state) {
        return state.count * this.factor;
      },
    }),
  },
  methods: {
    delayIncre() {
      this.$store
        .dispatch({
          type: types.DELAYINCRE,
          param: 1000,
        })
      .then(res => {
        console.log(res);
      });
    },
    increment() {
      this.$store.commit({
        type: types.INCREMENT,
        param: 9,
      });
    },
    decrement() {
      this.$store.commit({
        type: types.DECREMENT,
        param: 5,
      });
    },
  },
};
</script>

<style scoped>
.btnGroup {
  display: flex;
}
button {
  flex: 1;
  height: 49px;
}
p {
  font-size: 30px;
}
</style>
