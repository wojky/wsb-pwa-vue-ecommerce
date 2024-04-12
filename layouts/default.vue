<script setup>
const footerData = {
  title: '©2023 CLICK FASHION. All rights reserved.',
  content: 'Made by WSB team'
}
</script>

<template>
  <TopInfoBar>
    <template v-slot:title>
      PRODUKTY TWORZONE RĘCZNIE, WYSYŁKA MOŻE WYDŁUŻYĆ SIĘ DO
    </template>
    <template v-slot:day>
      5 dni
    </template>
  </TopInfoBar>
  <TopNav/>
  <slot/>
  <Footer/>
  <FooterInfo :title="footerData.title" :content="footerData.content"/>
</template>