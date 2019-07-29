<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-md-6">
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{ fruit }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  import { fruitMixin } from './fruitMixin';
  export default {
    mixins: [fruitMixin],
    created() {
      console.log('inside List created Hook')
    }
  }
</script>

<style>

</style>
