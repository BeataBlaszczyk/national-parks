<template>
  <div class="top-0 start-0 w-100 fs-3">
    <nav class="navbar navbar-expand-lg navbar-dark bg-black">
      <div class="container-fluid">
        <div class="d-flex justify-content-start">
          <div>
            <a class="navbar-brand px-3 fs-3 fw-bold" href="/">National Parks</a>
          </div>
        </div>
        <div class="justify-content-end" id="navbarNav">
          <ul class="navbar-nav custom-flex-direction">
            <li class="nav-item px-3">
              <a :class="currentPath === '/' ? 'nav-link active' : 'nav-link'" href="/">Home </a>
            </li>
            <li class="nav-item px-3">
              <a :class="currentPath === '/parks' ? 'nav-link active' : 'nav-link'" href="/parks"
                >Parks</a
              >
            </li>
            <li class="nav-item px-3">
              <a :class="currentPath === '/about' ? 'nav-link active' : 'nav-link'" href="/about"
                >About</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const currentPath = computed(() => router.currentRoute.value.path)
</script>

<style scoped>
.custom-flex-direction {
  flex-direction: row;
}
</style>
            