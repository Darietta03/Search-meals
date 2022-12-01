<template>
    <div 
        
        
        class="bg-white shadow rounded-xl">
       <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
        <img 
            :src="meal.strMealThumb" 
            :alt="meal.strMeal" 
            class="rounded-t-xl h-48 w-full object-cover">
       </router-link>
      <div class="p-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae autem nemo quod earum maxime adipisci numquam alias dignissimos iusto. Incidunt dignissimos vero minima numquam eius officiis quia? Quis, sint cum.</p>
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

