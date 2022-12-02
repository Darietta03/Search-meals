<template>
    <div class="p-8 pb-0">
        <input 
            type="text" 
            v-model="keyword"
            class="rounded border-2 border-gray-200 w-full"
            placeholder="Search for meals"
            @change="searchMeals"/> 
            
    </div>

   <Meals :meals="meals" />
</template>

<script setup>

import { computed } from '@vue/reactivity';
import { onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from "vue-router";
import Meals from '../components/Meals.vue';
import store from '../store';


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