<template>
  <main-layout v-if="articles.length > 0 && parks.length > 0">
    <template v-slot:top-component v-if="parks.length > 0">
      <main-info-component :articles="parks"></main-info-component>
    </template>
    <template v-slot:small-component>
      <h1 class="text-white">Articles</h1>
      <div
        class="d-flex justify-content-center flex-wrap justify-content-between custom-margin"
        v-if="articles.length > 0"
      >
        <small-info-component
          v-for="article in articles"
          :key="article.id"
          :article="article"
        ></small-info-component>
      </div>
    </template>
  </main-layout>
</template>


<script setup>
import MainInfoComponent from '../components/MainInfoComponent/MainInfoComponent.vue'
import MainLayout from '../components/MainLayout/MainLayout.vue'
import SmallInfoComponent from '../components/SmallInfoComponent/SmallInfoComponent.vue'

import { onMounted } from 'vue'
import { useArticlesStore, useParksStore } from '../stores/index.js'
import { storeToRefs } from 'pinia'

const { articlesInizialization } = useArticlesStore()
const { parksInizialization } = useParksStore()

const { articles } = storeToRefs(useArticlesStore())
const { parks } = storeToRefs(useParksStore())

onMounted(async () => {
  try {
    await articlesInizialization(12)
    await parksInizialization(6)
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