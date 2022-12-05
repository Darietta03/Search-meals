<template>

        <div class="flex justify-center gap-2 mt-2 text-wrap">
         <router-link 
          :to="{name: 'byLetter', params: {letter}}" 
          v-for="letter of letters" 
          :key="letter"
          class="mt-8 w-2 h-2 flex item-center justify-center hover:text-red-300 hover:scale-105 transition-all"
         >
           {{ letter }}
         </router-link> 
        </div>
   

    <Meals :meals="meals" />
</template>

<script setup>

import { computed } from '@vue/reactivity';
import { onMounted, watch,} from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import Meals from '../components/Meals.vue';


const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const meals = computed(() => store.state.mealsByLetter);


watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

</script>