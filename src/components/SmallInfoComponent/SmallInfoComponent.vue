<template>
  <div class="p-3" v-if="article">
    <img
      :src="props.article.image.imageUrl"
      class="w-100 img-size"
      :alt="props.article.image.altText"
    />
    <div class="text-white bg-black card-size p-2">
      <a class="text-white fw-bold fs-5" :href="props.article.articleUrl">{{
        props.article.title
      }}</a>
      <p class="my-2 fst-italic">{{ props.article.shortDescription }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  article: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
@media only screen and (min-width: 1120px) {
  .img-size {
    height: 15vw !important;

    width: 20vw !important;
  }

  .card-size {
    width: 20vw !important;
  }
}

@media only screen and (max-width: 1120px) {
  .img-size {
    height: 30vw !important;
    width: 40vw !important;
  }

  .card-size {
    width: 40vw !important;
  }
}

@media only screen and (max-width: 800px) {
  .img-size {
    height: 60vw !important;
    width: 80vw !important;
  }

  .card-size {
    width: 80vw !important;
  }
}
</style>