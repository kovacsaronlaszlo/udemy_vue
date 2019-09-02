<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(100)">Decrement</button>
    </div>
</template>

<script>
    import { /*mapMutations,*/ mapActions } from 'vuex';
    export default {
        methods: {
          ...mapActions([
                'increment',
                'decrement'
            ])
            /*...mapMutations([
                'increment',
                'decrement'
            ]),*/
            /*increment() {
                // this.$emit('updated', 1);
                // this.$store.state.counter++;
                this.$store.commit('increment');
            },
            decrement() {
                // this.$emit('updated', -1);
                // this.$store.state.counter--;
                this.$store.commit('decrement');
            }*/
        }
    }
</script>