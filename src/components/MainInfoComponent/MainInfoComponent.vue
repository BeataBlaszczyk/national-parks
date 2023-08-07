<template>
  <div class="d-column-flex justify-content-end" v-if="props.articles">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active position-relative">
          <img
            :src="articles[0].image.imageUrl"
            class="w-100 img-size"
            :alt="articles[0].image.altText"
          />
          <div class="position-relative custom-description p-3 w-100">
            <a class="text-white fw-bold fs-5" :href="articles[0].articleUrl">{{
              articles[0].title
            }}</a>
            <p class="my-2 text-white fst-italic">{{ articles[0].shortDescription }}</p>
          </div>
        </div>
        <div
          v-for="article in props.articles"
          class="carousel-item position-relative"
          :key="article.id"
        >
          <img :src="article.image.imageUrl" class="w-100 img-size" :alt="article.image.altText" />
          <div class="position-relative custom-description p-3 w-100">
            <a class="text-white fw-bold fs-5" :href="article.articleUrl">{{ article.title }}</a>
            <p class="my-2 text-white fst-italic">{{ article.shortDescription }}</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev button-z-index-5"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next button-z-index-5"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  articles: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
@media only screen and (min-width: 1120px) {
  .custom-description {
    position: absolute !important;
    bottom: 0;
    max-height: 60vw;
  }
  .img-size {
    height: 30vw !important;
  }
}

@media only screen and (max-width: 1120px) {
  .custom-description {
    position: absolute !important;
    bottom: 0;
    max-height: 60vw;
  }
  .img-size {
    height: 60vw !important;
  }
}

@media only screen and (max-width: 800px) {
  .custom-description {
    position: static !important;
  }
  .img-size {
    height: 40vw !important;
  }
}

.custom-description {
  z-index: 3 !important;
  background: rgba(0, 0, 0, 0.55);
}
.button-z-index-5 {
  z-index: 1;
}
</style>