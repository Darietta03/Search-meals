import axiosClient from '../axiosClient';

export function searchMeals({commit}, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
        .then(({data}) => {
        commit('setSearchedMeals', data.meals)
        })
}

export function searchMealsByLetter({commit}, letter) {
    axiosClient.get(`search.php?f=a${letter}`)
        .then(({data}) => {
        commit('setMealsByLetter', data.meals)
        })
}

export function searchMealsByIngredient({commit}, ing) {
    axiosClient.get(`filter.php?i=chicken_breast${ing}`)
        .then(({data}) => {
        commit('setMealsByIngredients', data.meals)
        })
}