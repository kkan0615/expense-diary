<template>
    <div class="login">
        <h2>Login</h2>
        <form v-on:submit="login">
            <input type="text" name="email"/><br>
            <input type="password" name="password"/><br>
            <input type="submit" value="Login"/>
        </form>
    </div>
</template>
<script>
import router from '../router'
import axios from 'axios'
export default {
    name: 'Login',
    methods: {
        login: (e) => {
            e.preventDefault()
            let email =  e.target.elements.email.value
            let password = e.target.elements.password.value
            let data =  {
                email: email,
                password: password
            }

            axios.post('/api/auth/login', data)
            .then((res) => {
                console.log(res)
                alert(res.data)
                router.push('/')
            })
            .catch((err) => {
                console.log('Cannot login')
                alert(err)
            })
        }
    }
}
</script>