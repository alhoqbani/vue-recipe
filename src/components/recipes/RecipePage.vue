<!--suppress JSUnresolvedVariable -->
<template>
    <div>
        <div class="h3 push-left"> Recipe Number {{ thisRecipe.id }} </div>
        <div class="col-xs-8 col-xs-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Recipe Name: {{ thisRecipe.name }}
                        <span  class="glyphicon glyphicon-remove-circle pull-right"></span>
                    </h3>
                </div>
                <div class="panel-body">
                    <h4>Ingredients: </h4>
                    <ul>
                        <li v-for="ingredient in thisRecipe.ingredients" v-html="`${ingredient.name}<br><b>${ingredient.amount}</b> - ${ingredient.unit}`"></li>
                    </ul>
                    <h4>Procedure</h4>
                    <p>{{thisRecipe.procedure}}</p>

                    <button class="btn btn-sm  btn-link pull-right">Share</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['id'],
        data: function () {
            return {}
        },
        computed: {
            thisRecipe() {
                return this.$store.getters.recipeById(this.id);
            }
        }
    }
</script>

