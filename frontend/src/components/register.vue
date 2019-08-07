<template>
    <div class="register">
        <form v-on:submit="register">
            Email <input type="email" name="email"/><br>
            Password <input type="password" name="password"/><br>
            nickname <input type="text" name="nickname"/><br>
            <input type="submit" value="Login"/>
        </form>
    </div>
</template>
<script>
    import router from "../router"
    const axios = require('axios');
    export default {
        name: 'Login',
        methods: {
            register: (e) => {
                e.preventDefault()
                let email =  e.target.elements.email.value
                let password = e.target.elements.password.value
                let nickname = e.target.elements.nickname.value

                let data = {
                    email: email,
                    password: password,
                    nickname: nickname,
                }

                axios.post('/api/auth/join', data)
                .then((res) => {
                    router.push('/login')
                })
                .catch((err) => {
                    console.log('Cannot register')
                    alert(err)
                });
            }
        },
    }
</script>