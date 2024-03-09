<script setup>

const mobileMenu = ref(false);

function toggleMobileMenu() {
    mobileMenu.value = !mobileMenu.value
}


const showOverlay = ref(false)
const showHideOverlay = () => showOverlay.value = !showOverlay.value

</script>

<template>
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <NuxtLink class="navbar-item" to="/">
                <img src="assets/logo.png" width="120" height="50">
            </NuxtLink>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                data-target="navbarBasicExample" @click="toggleMobileMenu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': mobileMenu }">
            <div class="navbar-start">
                <div class="navbar-item has-dropdown is-hoverable">
                    <NuxtLink to="/" class="navbar-link">
                        Sklep
                    </NuxtLink>

                    <div class="navbar-dropdown">
                        <NuxtLink to="/" class="navbar-item">
                            KOLEKCJA
                        </NuxtLink>
                        <NuxtLink to="/" class="navbar-item">
                            SUKIENKI|KOMBINEZONY
                        </NuxtLink>
                        <NuxtLink to="/" class="navbar-item">
                            BLUZKI|KOSZULE
                        </NuxtLink>
                        <NuxtLink to="/" class="navbar-item">
                            BLUZKI|KOSZULE
                        </NuxtLink>
                        <NuxtLink to="/" class="navbar-item">
                            MARYNARKI
                        </NuxtLink>
                        <NuxtLink to="/" class="navbar-item">
                            PŁASZCZE|KURTKI
                        </NuxtLink>
                        <NuxtLink to="/" class="navbar-item">
                            SPODNIE
                        </NuxtLink>
                        <NuxtLink to="/" class="navbar-item">
                            SPÓDNICE
                        </NuxtLink>
                        <NuxtLink to="/" class="navbar-item">
                            SWETRY
                        </NuxtLink>
                        <NuxtLink to="/" class="navbar-item">
                            GOLFY
                        </NuxtLink>
                        <NuxtLink to="/" class="navbar-item">
                            RABAT 10%
                        </NuxtLink>
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

                <NuxtLink to="/sale" class="navbar-item">
                    Wyprzedaż
                </NuxtLink>

                <NuxtLink to="/new-collection" class="navbar-item">
                    Nowości
                </NuxtLink>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="language-dropdown">
                        <select id="language">
                            <option value="pl">PL</option>
                            <option value="en">EN</option>
                        </select>
                    </div>
                    <NuxtLink to="" class="navbar-item">
                        <img src="/assets/search.png" alt="Search" />
                    </NuxtLink>
                    <NuxtLink to="" class="navbar-item">
                        <img src="/assets/person.png" alt="Profil" />
                    </NuxtLink>
                    <NuxtLink to="" class="navbar-item">
                        <img src="/assets/hearth.png" alt="Ulubione" />
                    </NuxtLink>
                    <div class="separator"></div>

                    <NuxtLink to="" class="navbar-item">
                        <img src="/assets/shoppingBasket.png" @click="showHideOverlay" alt="Mój koszyk" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </nav>

    <div v-show="showOverlay" class="overlay">
        <div class="overlay-content">
            <span style="color:black" @click="showHideOverlay" class="close">&times;</span>
            <p class="overlayText">
                Nie posiadasz produktów w koszyku.
            </p>
        </div>
    </div>

</template>