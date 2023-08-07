import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import getArticlesList from '../services/getArticlesList';

export default  defineStore('articles', () => {
  const rawArticles = ref([]);

  async function articlesInizialization(number){
    try{
     rawArticles.value =  await getArticlesList(number);
    } catch (error) {
      throw new Error(`error:  ${error}`); 
    }
  }

    const articles = computed(()=>
    rawArticles.value?.map((article) => ({
      id: article?.id,
      title: article?.title,
      articleUrl: article?.url,
      shortDescription: article?.listingDescription,
      image: {
        altText: article?.listingImage.altText ||  'Alt text for image',
        imageUrl: article?.listingImage.url || 'https://picsum.photos/200/300?grayscale'
      }
    }))
    )

  return { 
    articlesInizialization,
    articles,
    rawArticles
  }
})
