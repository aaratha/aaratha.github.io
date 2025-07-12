<script setup lang="ts">
import { ref } from 'vue';

// Define an array of YouTube video links
const links = [
    "https://www.youtube.com/embed/k59lX70pZuk?si=KShJlrcikNHxHUbN",
    /*"https://www.youtube.com/embed/6N6hmz5dd7o?si=h9QN7YRS894BnBjA",*/
    "https://www.youtube.com/embed/tkQt6GoE36o",
    "https://www.youtube.com/embed/9eHqGEshB2A",
    "https://www.youtube.com/embed/TBMEBSfnJbQ",
    "https://www.youtube.com/embed/TybreaCetEA",
    "https://www.youtube.com/embed/OcpRc_LU-e0",
    "https://www.youtube.com/embed/buUa9jiD9os",
    "https://www.youtube.com/embed/GSU93sFdRls",
];

const videos = ref(links.map((link, index) => ({
  id: index + 1,
  link: link
})));
</script>

<template>
  <div id="content">
    <div id="videos">
      <div id="gallery">
        <div v-for="video in videos" :key="video.id">
          <iframe 
            :src="video.link" 
            class="video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
