<template>
    <div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title"><a @click="redirectToRecipe">Recipe Name: {{ recipeChild.name }}</a>
                    <span @click="deleteChild" class="glyphicon glyphicon-remove-circle pull-right"></span>
                </h3>
            </div>
            <div class="panel-body">
               <p> {{ recipeChild.procedure }}</p>
                <button class="btn btn-sm  btn-link pull-right">Share</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['recipe'],
        data: function () {
            return {
                recipeChild: this.recipe,

            }
        },
        methods: {
            deleteChild: function ()  {
                this.$store.dispatch('deleteRecipe', this.recipe.id)
            },
            redirectToRecipe() {
                this.$router.push({ name: 'recipePage', params: { id: this.recipeChild.id }})
            }
        }
    }

</script>

<style scoped>
    .glyphicon-remove-circle {
        color: red;
        cursor: pointer;
    }
    .glyphicon-remove-circle:hover {
        transform: scale(1.1);
    }
</style>

