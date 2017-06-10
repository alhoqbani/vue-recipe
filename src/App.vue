<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <app-header></app-header>
                <flash></flash>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    export default {
        components: {
            'app-header': Header,
        }

    }
</script>