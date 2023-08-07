<template>
  <main-layout>
    <template v-slot:top-component>
      <parks-filter @searched-value="searchPark" @filtered-state="filterByState"></parks-filter>
    </template>
    <template v-slot:small-component>
      <div v-if="(filterFlag === true) & (parks?.length === 0)" class="text-danger">
        No park from current list is located in selected state
      </div>
      <div
        class="d-flex justify-content-center flex-wrap justify-content-between custom-margin"
        v-if="parks?.length > 0"
      >
        <small-info-component
          v-for="park in parks"
          :key="park.id"
          :article="park"
          data-test-name="small-info-component"
        ></small-info-component>
      </div>
    </template>
    <template v-slot:button>
      <button
        class="btn btn-outline-secondary w-100 fst-italic"
        type="submit"
        @click="loadMoreClick()"
      >
        load more parks
      </button>
    </template>
  </main-layout>
</template>


<script setup>
import MainLayout from '../components/MainLayout/MainLayout.vue'
import SmallInfoComponent from '../components/SmallInfoComponent/SmallInfoComponent.vue'
import ParksFilter from '../components/ParksFilter/ParksFilter.vue'

import { onMounted, ref } from 'vue'
import { useParksStore } from '../stores/index.js'
import { storeToRefs } from 'pinia'

const { parksInizialization, loadMoreParks, searchParks, filterParksByState } = useParksStore()

const { parks } = storeToRefs(useParksStore())
const start = ref(0)
const numberOfParks = ref(12)
const term = ref('')
const filterFlag = ref(false)

const loadMoreClick = () => {
  filterFlag.value = false
  start.value += numberOfParks.value
  loadMoreParks(numberOfParks.value, start.value, term.value)
}

function searchPark(text) {
  filterFlag.value = false
  term.value = text
  start.value = 0
  searchParks(numberOfParks.value, start.value, term.value)
}

function filterByState(state) {
  filterFlag.value = true
  filterParksByState(state)
}

onMounted(async () => {
  try {
    await parksInizialization(numberOfParks.value)
  } catch (error) {
    throw new Error(`error:  ${error}`)
  }
})
</script>

<style scoped>
.custom-margin {
  margin: 0 -1rem;
}
</style>