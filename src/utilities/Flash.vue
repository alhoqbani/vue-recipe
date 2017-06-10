<template>
    <transition name="slide">
        <div class="alert alert-info flash-message" v-show="show">
            <strong> {{ body }} </strong>
        </div>
    </transition>
</template>

<script>
    export default {
        props: ['message'],
        data() {
            return {
                'body': '',
                'show': false,
            }
        },
        created() {
            if (this.message) {
                this.flash(this.message);
            }
            ;
            window.events.$on('flash', message => {
                this.flash(message);
            });
        },
        methods: {
            flash(message) {
                this.body = message;
                this.show = true;
                this.hide();
            },
            hide() {
                setTimeout(() => {
                    this.show = false
                }, 3000);
            }
        }
    }
</script>

<style scoped>
    .flash-message {
        position: fixed;
        left: 10px;
        bottom: 10px;
        z-index: 100;
        min-width: 200px;
        background-color: rgba(142, 123, 123, 0.2);
        border: 0;
        color: black;
        text-align: center;
    }

    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for <2.1.8 */
    {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
