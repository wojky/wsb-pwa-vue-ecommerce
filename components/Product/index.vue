<script setup lang="ts">
defineProps<{
  product: {
    name: string;
    price: number;
    imageURL: string;
    sizes: number[];
  };
}>();

const show = ref(false);
const order = ref({
  size: null,
  quantity: 1,
});

function formatPrice(price: number) {
  return price / 100;
}
</script>

<template>
  <div
    @mouseover="show = true"
    @mouseout="show = false"
    style="width: fit-content"
  >
    <img :src="[product.imageURL]" />
    <div v-if="show">
      <div>
        <button v-for="size in product.sizes" @click="order.size = size">
          {{ size }}
        </button>
        <input />
        <button>dodaj do koszyka</button>
      </div>
    </div>
  </div>
  <p>
    {{ product.name }}
  </p>
  <p>
    Już od <span>{{ formatPrice(product.price) }}</span> zł
  </p>
</template>
