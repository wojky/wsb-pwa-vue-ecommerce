<script setup>
defineProps(
    {
      title: {
        type: String,
        required: true
      },
      content: {
        type: String,
        default: () => 'Domyślna wartość'
      }
    }
)
</script>
<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>
<template>
  <div class="main">
    <h1>{{ title }}</h1>
    <div class="centered">
      <button @click="scrollToTop" class="scroll-to-top-btn">
        <img src="/assets/arrowUp.png" alt="Arrow Up Icon">
      </button>
    </div>
    <div class="link">
      <a target="_blank" rel="nofollow" href="https://www.google.com">{{ content }}</a>
      <!--      <img src="" alt="LogoZespołu">-->
    </div>
  </div>
</template>
<style scoped lang="scss">
h1 {
  margin-left: 3%;
}
.link {
  position: absolute;
  left: 85%;
}

.link a {
  color: white;
  text-decoration: none;
  position: relative;
}

.link a::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 0;
  background-color: white;
  transition: height 0.3s;
}

.link a:hover::after {
  height: 2px;
}

.main {
  background-color: black;
  color: white;
  height: 60px;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;

}

.centered {
  position: absolute;
  left: 50%;
}

.scroll-to-top-btn {
  border-radius: 10px;
  border: 1px solid white;
  background-color: transparent;
  transition: background-color 0.3s, transform 0.3s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
}

.scroll-to-top-btn img {
  width: 20px;
  height: 18px;
}
</style>