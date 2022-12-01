<template>
    <div class="p-8 pb-0">
        <input 
            type="text" 
            v-model="keyword"
            class="rounded border-2 border-gray-200 w-full"
            placeholder="Search for meals"
            @change="searchMeals"/> 
            
    </div>
    <pre>{{meals}}</pre>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
</template>

<script setup>

import { computed } from '@vue/reactivity';
import { onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from "vue-router";
import YouTubeButton from '../components/YouTubeButton.vue';
import store from '../store';
import MealItem from '../components/MealItem.vue'

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
    store.dispatch('searchMeals', keyword.value)
}

onMounted(() => {
    keyword.value = route.params.name
    if(keyword.value) {
        searchMeals()
    }
})

</script>