<template>
    <div 
        class="bg-white shadow rounded-xl hover:scale-110 transition-all">
       <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
        <img 
            :src="meal.strMealThumb" 
            :alt="meal.strMeal" 
            class="rounded-t-xl h-48 w-full object-cover">
       </router-link>
      <div class="p-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
         <p class="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolores ipsa non nesciunt est dolorum porro velit. Praesentium, omnis amet.
        </p> 
       <div class="flex items-center justify-between">
            <YouTubeButton :href="meal.strYoutube">
             YouTube
            </YouTubeButton>
       </div>
      </div>
    </div>
</template>

<script setup>

import YouTubeButton from './YouTubeButton.vue';


    const { meal } = defineProps({
        meal: {
            requered: true,
            type: Object
        }
    })


</script>

