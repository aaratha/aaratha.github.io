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

const theme = ref('light');

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme.value);
};
</script>

<style>
:root {
  --bg1: #f4ebd9;
  --bg2: #e3e3e3;
  --fg: #57786d;
  --fg-faded: #57786d9b;
  --shadow: 0, 0, 0;
}

[data-theme="dark"] {
  --bg1: #101514;
  --bg2: #00120d;
  --fg: #57786d;
  --fg-faded: #57786d9b;
  --shadow: 100, 217, 201;
}
</style>

<template>
  <div id="main">
    <!--test-->
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
  <button id="theme-toggle" @click="toggleTheme">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
      <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
      <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
    </svg>
  </button>
</template>
