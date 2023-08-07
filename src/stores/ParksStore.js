import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import getParksList from '../services/getParksList.js';

export default  defineStore('parks', () => {
  const rawParks = ref([]);

  async function parksInizialization(number){
    try{
     rawParks.value =  await getParksList(number);
    } catch (error) {
      throw new Error(`error:  ${error}`);
    }
  }

  async function loadMoreParks(number,start, term){
    try{
        const nextRawParks =  await getParksList(number, start, term);
        rawParks.value.push(...nextRawParks);
       } catch (error) {
         throw new Error(`error:  ${error}`);
       }
  }

  async function searchParks(number,start, term){
    try{
        rawParks.value =  await getParksList(number, start, term);
       } catch (error) {
         throw new Error(`error:  ${error}`);
       }
  }

    const parks = computed(()=>
    rawParks.value?.map((park) => ({
      id: park?.id,
      title: park?.fullName,
      articleUrl: park?.url,
      shortDescription: park?.description,
      image: {
        altText: park?.images[0].altText ||  'Alt text for image',
        imageUrl: park?.images[0].url || 'https://picsum.photos/200/300?grayscale'
      },
      states: park.states

    }))
    )

    function filterParksByState(state){
       rawParks.value = rawParks.value.filter(({ states }) => states.includes(state));
       
     }

  return { 
    parksInizialization,
    loadMoreParks,
    searchParks,
    filterParksByState,
    parks,
    rawParks,
  }
})
