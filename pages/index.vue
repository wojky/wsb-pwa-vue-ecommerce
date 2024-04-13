<template>
    <my-component />
</template>

<script>
// Import the component
import main from '@/components/Content/main.vue';

export default {
  name: 'index',
  components: {
    // Register the component locally s
    'my-component': main
  }
};
</script>