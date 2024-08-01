<script setup>
import { ref, computed, onMounted } from 'vue';

// Use import.meta.glob to dynamically import all images from the directories
const importArt = import.meta.glob('../assets/visuals/art/*.{png,jpg,jpeg}', { eager: true });
const importPhotos = import.meta.glob('../assets/visuals/photos/*.{png,jpg,jpeg}', { eager: true });
const importGraphics = import.meta.glob('../assets/visuals/graphics/*.{png,jpg,jpeg}', { eager: true });

const art = ref([]);
const photos = ref([]);
const graphics = ref([]);

onMounted(() => {
  art.value = Object.keys(importArt).map((key, index) => ({
    id: index + 1,
    imagePath: importArt[key].default,
  }));
  photos.value = Object.keys(importPhotos).map((key, index) => ({
    id: index + 1,
    imagePath: importPhotos[key].default,
  }));
  graphics.value = Object.keys(importGraphics).map((key, index) => ({
    id: index + 1,
    imagePath: importGraphics[key].default,
  }));
});

// Manage the current display set
const currentSet = ref('art');

const images = computed(() => {
  switch (currentSet.value) {
    case 'photos':
      return photos.value;
    case 'graphics':
      return graphics.value;
    case 'art':
    default:
      return art.value;
  }
});

// Function to handle category selection
const selectCategory = (category) => {
  currentSet.value = category;
};
</script>

<template>
  <div id="content">
    <div id="visuals">
      <div id="visuals-buttons">
        <button
          class="visuals-button"
          :class="{ selected: currentSet === 'art' }"
          @click="selectCategory('art')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            class="bi bi-easel-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M8.473.337a.5.5 0 0 0-.946 0L6.954 2H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h1.85l-1.323 3.837a.5.5 0 1 0 .946.326L4.908 11H7.5v2.5a.5.5 0 0 0 1 0V11h2.592l1.435 4.163a.5.5 0 0 0 .946-.326L12.15 11H14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H9.046z"
            />
          </svg>
        </button>
        <button
          class="visuals-button"
          :class="{ selected: currentSet === 'photos' }"
          @click="selectCategory('photos')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            class="bi bi-image-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
            />
          </svg>
        </button>
        <button
          class="visuals-button"
          :class="{ selected: currentSet === 'graphics' }"
          @click="selectCategory('graphics')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            class="bi bi-circle-square"
            viewBox="0 0 16 16"
          >
            <path d="M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6" />
            <path
              d="M12.93 5h1.57a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1.57a7 7 0 0 1-1-.22v1.79A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4h-1.79q.145.486.22 1"
            />
          </svg>
        </button>
      </div>
      <div id="visuals-gallery">
        <img v-for="item in images" :key="item.id" :src="item.imagePath" class="visuals-image" />
      </div>
    </div>
  </div>
</template>

