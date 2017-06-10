<template>
    <div>
        <template v-if="recipesCount > 0">
            <app-recipe
                    class="col-sm-6"
                    v-for="(recipe, index) in recipes"
                    :key="recipe.name"
                    :recipe="recipe"
                    @RecipeWasDeleted="deleteRecipe(index, $event)">
            </app-recipe>
        </template>

        <div v-else>
            <h3 class="text-center">Sorry No Recipes</h3>
        </div>
        <router-view></router-view>

    </div>
</template>

<script>
    import Recipe from './Recipe.vue';
    export default {
        components: {'app-recipe': Recipe},
        data: function () {
            return {}
        },
        methods: {},
        computed: {
            recipesCount() {
                return this.recipes.length;
            },
            recipes() {
                return this.$store.state.recipes;
            }
        },
        created() {

        }
    }
</script>

