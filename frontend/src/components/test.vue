<template>
  <div id="test">
    <p>{{ num }}</p>
    <button @click="increamentCompo()">increment</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'test',
    data() {
        return {
            num: this.$store.getters['test/getNum'],
        }
    },
    methods: {
        increamentCompo() {
            console.log('작동');
            this.$store.commit('test/increment'),
            this.num = this.$store.getters['test/getNum']
        }
    },
}
</script>

<style>
</style>