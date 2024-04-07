<!-- <template>
    <h3>Strona główna</h3>
</template> -->
<script setup>
const posts = ref([]);
const loader = ref(true);

const { data } = await useFetch("http://localhost:3001/posts");

onBeforeMount(async () => {
  setTimeout(() => {
    posts.value = data.value;
    loader.value = false;

    console.log(posts.value);
  }, 2000);
});
</script>

<template>
  <span v-if="loader" class="loader"></span>
  <div v-else>
    <p v-for="post in posts">{{ post.title }}</p>
  </div>
</template>
