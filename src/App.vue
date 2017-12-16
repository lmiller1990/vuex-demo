<template>
  <div>
    <B :other="1"></B>
    <button @click="doMutation">Click</button>
    {{ text }}
    <input v-model="text" >
  </div>
</template>

<script>
import B from './B.vue'

export default {
  name: 'app',
  components: {
    B
  },


  data () {
    return {
      count: 0,
      hello: 'Hello',
    }
  },

  methods: {
    doMutation () {
      this.count += 1
      this.$store.commit('UPDATE_GREETING', this.count)
      this.$store.dispatch('updateGreeting')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
