import Recipes from './components/recipes/Recipes.vue'
import CreateRecipeForm from './components/recipes/CreateRecipeForm.vue'
import RecipePage from './components/recipes/RecipePage.vue';

export const routes = [
    {path: '/recipes', component: Recipes},
    {path: '/recipes/create', component: CreateRecipeForm},
    {path: '/recipes/:id', component: RecipePage, name: 'recipePage', props: true},
    // { path: '*', redirect: '/'}


];
