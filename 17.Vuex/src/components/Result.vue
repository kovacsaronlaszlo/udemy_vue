<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    import { mapGetters } from 'vuex';
    import * as types from '../store/types';
    export default {
        // props: ['counter']
        computed: {
            ...mapGetters({
                counter: types.DOUBLE_COUNTER,
            })
            /*counter() {
                // return this.$store.state.counter * 2;
                return this.$store.getters.doubleCounter;
                
            }*/
        }
    }
</script>