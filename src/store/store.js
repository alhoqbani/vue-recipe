import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
        recipes: [],
    },
    mutations: {
        'FETCH_RECIPES': (state, payload) => {

            for (let recipe in payload) {
                const id = recipe;
                const retrievedRecipe = payload[recipe];
                retrievedRecipe.id = id;
                state.recipes.push(payload[recipe]);
            }
        },
        'DELETE_RECIPE': (state, payload) => {
            state.recipes = state.recipes.filter(recipe => recipe.id !== payload);
            flash(` The Recipe with id: ${payload} was Deleted`);
        },
        'ADD_RECIPE': (state, recipe) => state.recipes.push(recipe),
    },
    actions: {
        fetchRecipes(context, from) {
            axios.get('/recipes.json')
                .then(({data}) => {
                    context.commit('FETCH_RECIPES', data);
                });
        },
        deleteRecipe(context, id) {
            if (confirm('delete?')) {
                axios.delete('/recipes/' + id + '.json')
                    .then(response => context.commit('DELETE_RECIPE', id))
                    .catch(error => console.log(error));
            }
        }

    },
    getters: {

        recipeById: (state, getters) => (id) => {
            return state.recipes.find(recipe => recipe.id === id)
        }

    },
    modules: {},
});