<template>
  <div class="cart-header">
      <p>Carrito</p>
      <i class="close icon" @click="closeCart" />
  </div>
</template>

<script>
export default {
    name: 'CartHeader',
    props: {
        closeCart: Function,
    },

};
</script>

<style lang="scss" scoped>
.cart-header {
    display: fLex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    border-bottom: lpx soLid #000;
    padding: 10px 20px;
    P,
    i {
        margin: 0;
    }
    i:hover {
        cursor: pointer;
    }
}
</style>