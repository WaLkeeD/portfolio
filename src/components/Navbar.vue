<template>
  <div>
    <nav class="nav">
      <div class="container">
        <ul class="nav__list" :class="show ? 'show' : ''">
          <li>
            <router-link @click="show = !show" to="/" class="nav__list-link" id="home"
              >Home</router-link
            >
          </li>
          <li>
            <router-link @click="show = !show" to="/education" class="nav__list-link" id="education"
              >Education</router-link
            >
          </li>
          <li>
            <router-link @click="show = !show" to="/skills" class="nav__list-link" id="skills"
              >Skills</router-link
            >
          </li>
          <li>
            <router-link @click="show = !show" to="/portfolio" class="nav__list-link" id="portfolio"
              >Portfolio</router-link
            >
          </li>
          <li>
            <router-link @click="show = !show" to="/contacts" class="nav__list-link" id="contacts"
              >Contacts</router-link
            >
          </li>
        </ul>
        <div v-if="!show" @click="show = !show" key="menu" class="nav__menu">
          <span></span>
        </div>
        <div v-else @click="show = !show" key="clear" class="nav__close">
          <img src="../assets/images/social-icons/remove.png" alt="close">
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";

let show = ref(false);

const props = defineProps({
  title: {
    typeof: String,
  },
});
</script>

<style lang="scss" scoped></style>