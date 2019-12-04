<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <test/>
  </div>
</template>

<script>
import test from './components/test'
import login from './components/login'
export default {
  name: 'App',
  components: {
    test,
    login,
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
