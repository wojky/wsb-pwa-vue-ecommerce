<template>
    <my-component />
</template>

<script>
// Import the component
import MyComponent from 'wsb-pwa-vue-ecommerce\components\Content\main.vue';

export default {
  name: 'index',
  components: {
    // Register the component locally s
    'my-component': MyComponent
  }
};
</script>