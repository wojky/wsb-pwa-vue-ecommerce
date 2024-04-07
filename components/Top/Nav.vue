<script setup>
const mobileMenu = ref(false);

function toggleMobileMenu() {
  mobileMenu.value = !mobileMenu.value;
}
</script>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <NuxtLink class="navbar-item" to="/"> Sklep </NuxtLink>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="toggleMobileMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': mobileMenu }"
    >
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> Sklep </a>

          <div class="navbar-dropdown">
            <a class="navbar-item"> About </a>
            <a class="navbar-item"> Jobs </a>
            <a class="navbar-item"> Contact </a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Report an issue </a>
          </div>
        </div>

        <NuxtLink to="/winter-collection" class="navbar-item">
          Kolekcja zimowa
        </NuxtLink>

        <NuxtLink to="/evening-collection" class="navbar-item">
          Stylizacje wieczorowe
        </NuxtLink>

        <NuxtLink to="/casual-collection" class="navbar-item">
          Stylizacje codzienne
        </NuxtLink>

        <NuxtLink to="/christmas-collection" class="navbar-item">
          Kolekcja świąteczna
        </NuxtLink>

        <NuxtLink to="/sale" class="navbar-item"> Wyprzedaż </NuxtLink>

        <NuxtLink to="/new-collection" class="navbar-item"> Nowości </NuxtLink>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light"> Log in </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
