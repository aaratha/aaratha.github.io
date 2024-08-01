<script setup>
import { ref, onMounted } from 'vue';

// Use import.meta.glob to dynamically import all images from the websites directory
const importImages = import.meta.glob('../assets/websites/*.png', { eager: true });

const websites = ref([]);
const links = ["/", "https://www.wec.education/", "https://vicrecords.club/", "https://www.cinebrief.com/"];

// Populate the websites array with image data on component mount
onMounted(() => {
  websites.value = Object.keys(importImages).map((key, index) => ({
    id: index + 1,
    link: links[index], // Placeholder link; update as needed
    imagePath: importImages[key].default, // Path to the image file
  }));
});
</script>

<template>
  <div id="content">
    <div id="videos">
      <div id="gallery">
        <div v-for="website in websites" :key="website.id">
          <a :href="website.link" target="_blank">
            <img :src="website.imagePath" class="visuals-image" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
