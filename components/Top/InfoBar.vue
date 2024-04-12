<script setup>

</script>

<template>
  <div class="info">
    <span>
      <img src="/assets/shoppingBasketWhite.png" alt="shoppingBasket">
      <slot name="title">Domyślna</slot>
      <slot name="day">Domyślna</slot>
    </span>
  </div>

</template>

<style scoped lang="scss">
.info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #000;
  color: #fff;

  span {
    display: flex;
    align-items: center;
    margin-right: 10px;
    font-size: smaller;
    font-weight: bold;
    text-transform: uppercase;
  }

  span img {
    margin-right: 5px;
  }
}
</style>