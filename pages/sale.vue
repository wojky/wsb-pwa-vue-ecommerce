<template>
    <h3>Wyprzedaż</h3>
    <my-component />

</template>


<script>
// Import the component
import main from '@/components/mszopa/main.vue';

export default {
  name: 'index',
  components: {
    // Register the component locally s
    'my-component': main
  }
};
</script>