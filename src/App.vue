<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader/AppHeader.vue'
import AppFooter from './components/AppFooter/AppFooter.vue'
</script>

<template>
  <div class="d-flex min-vh-100 justify-content-center bg-dark my-flex-column">
    <div class="position-sticky top-0 custom-z-index">
      <app-header></app-header>
    </div>

    <div class="flex-grow-1">
      <RouterView />
    </div>

    <div class="position-sticky bottom-0">
      <app-footer></app-footer>
    </div>
  </div>
</template>

<style scoped>
.my-flex-column {
  flex-direction: column;
}
.custom-z-index {
  z-index: 5;
}
</style>
