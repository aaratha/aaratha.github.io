<script setup lang="ts">
import { ref, computed } from 'vue';
import Home from './components/home.vue';
import Websites from './components/websites.vue';
import Videos from './components/videos.vue';
import Visuals from './components/visuals.vue';
import Contact from './components/contact.vue';
const currentComponentTitle = ref('home');

const currentComponent = computed(() => {
  switch (currentComponentTitle.value.toLowerCase()) {
    case 'home':
      return Home;
    case 'websites':
      return Websites;
    case 'videos':
      return Videos;
    case 'visuals':
      return Visuals;
    case 'contact':
      return Contact;
    default:
      return Home;
  }
});
</script>

<template>
  <div id="main">
    <div id="menu">
      <h1 class="z-2">Aseem Ratha</h1>
      <div id="menu-button-tray">
        <a id="menu-button" class="z-2" href="#" @click.prevent="currentComponentTitle = 'home'">Home</a>
        <button
          id="menu-button"
          class="projects-button z-2"
          @click="currentComponentTitle = 'videos'"
        >
          Projects
        </button>
        <div id="sliding-part">
          <div id="projects-tray">
            <button id="menu-button" @click="currentComponentTitle = 'videos'">
              Videos
            </button>
            <button id="menu-button" @click="currentComponentTitle = 'visuals'">
              Visuals
            </button>
            <button id="menu-button" class="last-button" @click="currentComponentTitle = 'websites'">
              Websites
            </button>
          </div>
          <button
            id="menu-button"
            class="last-button"
            @click="currentComponentTitle = 'contact'"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
    <component :is="currentComponent" />
  </div>
</template>