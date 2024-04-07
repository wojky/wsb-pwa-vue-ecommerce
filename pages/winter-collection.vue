<script setup>
const product = ref({
  name: "test",
  price: 14990,
  imageURL:
    "https://clickfashion.pl/media/catalog/product/cache/ce45556a941c0460641499aa3e7c6972/c/l/click_3101_6224_kopia.jpg",
  sizes: [36, 38, 40, 42, 44, 46],
});
</script>

<template>
  <h3>Kolekcja zimowa</h3>

  <Product :product="product" />
</template>
