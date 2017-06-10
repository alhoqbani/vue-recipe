<template>
    <form @submit.prevent="onSubmit" @keyup="form.errors.clear()">

        <div class="form-group" v-bind:class="{ 'has-error': form.errors.has('name')}">
            <label for="name" class="control-label">name</label>
            <input type="text" class="form-control" name="name" id="name"
                   placeholder="" v-model="form.name" value="">
            <span class="help-block" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
        </div>

        <div class="form-group" v-bind:class="{ 'has-error': form.errors.has('procedure')}">
            <label for="procedure" class="control-label">procedure</label>
            <input type="text" class="form-control" name="procedure" id="procedure"
                   placeholder="" v-model="form.procedure" value="">
            <span class="help-block" v-if="form.errors.has('procedure')" v-text="form.errors.get('procedure')"></span>
        </div>

        <div class="form-group row" v-for="(ingredient, index) in form.ingredients">
            <div class="col-sm-4" v-bind:class="{ 'has-error': form.errors.has('ingredients.[index].name')}">
                <label for="ingredients.[index].name" class="control-label">ingredients.[index].name</label>
                <input type="text" class="form-control" name="ingredients.[index].name" id="ingredients.[index].name"
                       placeholder="" v-model="form.ingredients[index].name" value="">
                <span class="help-block" v-if="form.errors.has('ingredients.[index].name')"
                      v-text="form.errors.get('ingredients.[index].name')"></span>
            </div>
            <div class="col-sm-4" v-bind:class="{ 'has-error': form.errors.has('ingredients.amount')}">
                <label for="ingredients.amount" class="control-label">ingredients.amount</label>
                <input type="text" class="form-control" name="ingredients.amount" id="ingredients.amount"
                       placeholder="" v-model="form.ingredients[index].amount" value="">
                <span class="help-block" v-if="form.errors.has('ingredients.amount')"
                      v-text="form.errors.get('ingredients.amount')"></span>
            </div>

            <div class="col-sm-3" v-bind:class="{ 'has-error': form.errors.has('ingredients.unit')}">
                <label for="ingredients.unit" class="control-label">ingredients.unit</label>
                <input type="text" class="form-control" name="ingredients.unit" id="ingredients.unit"
                       placeholder="" v-model="form.ingredients[index].unit" value="">
                <span class="help-block" v-if="form.errors.has('ingredients.unit')"
                      v-text="form.errors.get('ingredients.unit')"></span>
            </div>
            <div class="col-sm-1"><button class="btn btn-info" @click.prevent="addIngredients">Add</button>
            </div>

        </div>


        <button type="submit" class="btn btn-default" :disabled="form.errors.any()">Submit</button>
    </form>

</template>

<script>
    import Form from '../../utilities/Form.js'
    export default {
        data: function () {
            return {
                form: new Form({
                    name: '',
                    procedure: '',
                    ingredients: [
                        {
                            name: '',
                            amount: '',
                            unit: '',
                        },
                    ],
                })
            }
        },
        methods: {
            onSubmit() {
                this.form.submit('post', '/recipes.json')
                    .then(recipe => this.$store.commit('ADD_RECIPE', recipe))
                    .catch(error => console.log(error))
            },
            addIngredients() {
                this.form.ingredients.push({
                    name: '',
                    amount: '',
                    unit: '',
                });
            }
        }
    }
</script>