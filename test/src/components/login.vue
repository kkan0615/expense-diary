<template>
  <div id="test">
    <h2>Login</h2>
    <h3>{{ msg }}</h3>
    <p>{{ id }}</p>
    <form @submit.prevent="login(email, password)">
      <input type="text" v-model="email" placeholder="Email Address">
      <input type="password" v-model="password" placeholder="Password">
      <input type="submit" value="Login">
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'login',
    data() {
        return {
            id: this.$store.getters['auth/getUser'],
            email: '',
            password: '',
            msg: ''
        }
    },
    methods: {
        login() {
            console.log(this.email + ' ' + this.password);
            let data = {
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('auth/LOGIN', data )
            this.id = this.$store.getters['auth/getUser']
        }
    },
}
</script>

<style>
</style>