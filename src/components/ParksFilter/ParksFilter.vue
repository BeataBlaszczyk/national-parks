<template>
  <div class="d-flex justify-content-between">
    <form class="d-flex">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="text"
      />
      <button class="btn btn-secondary" type="button" @click="emitSearch">Search</button>
    </form>
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle px-4"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filter visible Parks by state
      </button>
      <ul class="dropdown-menu bg-secondary" aria-labelledby="dropdownMenuButton1">
        <li
          v-for="state in states"
          :key="state.abbreviation"
          @click="emitFilter(state.abbreviation)"
        >
          <a class="dropdown-item">{{ state.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import states from '../../staticData/UnitStates.json'
import { ref } from 'vue'
const text = ref('')

const emit = defineEmits(['searchedValue', 'filteredState'])
const textConvert = (text) => text.replace(' ', '%20')

function emitSearch() {
  emit('searchedValue', textConvert(text.value))
}

function emitFilter(key) {
  emit('filteredState', key)
}
</script>

<style scoped>
.dropdown-menu {
  max-height: 10rem;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>