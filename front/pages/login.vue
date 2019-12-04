<template>
    <div class="login">
        <form ref="form" @submit.prevent="onSubmitForm" class="login-form">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input v-model="email" type="email" required placeholder="email"> <br>
            <label for="password">Password</label>
            <input v-model="password" type="password" required placeholder="password"> <br>
            <button type="submit">Sign Up</button> <br>
            Don't have account? <a href="http://localhost:3000/signup">Sign up</a>
        </form>
    </div>
</template>

<script>
export default {
    //layout: 'default',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        onSubmitForm() {
            this.$store.dispatch('users/logIn', {
                email: this.email,
                password: this.password,
            })
            .then((res) => {
                console.log(res);

                this.$router.push({
                    path: '/',
                });
            }).catch((error) => {
                console.error(error);
                alert('Email or Password is wrong. Please try again with correct email or password');
            });
        }
    },
    head() {
        return {
            title: 'Login',
        };
    },
    middleware: 'isNotLoggedIn',
}
</script>

<style scoped>
    .login {
        background-image: linear-gradient(120deg, #3498db, #8e448e);
    }
    .login-form {
        width: 400px;
        background: #f1f1f1;
        font-size: 20px;
        height: 500px;
        padding: 40px 20px;
        position: absolute;
        border-radius: 15px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .login-form h1 {
        text-align: center;
    }
    .login-form label {
        text-align: left;
        margin-top: 30px;
    }
    .login-form input[type=email] {
        margin-top: 15px;
        margin-bottom: 20px;
        border: none;
        background: none;
        outline: none;
        width: 100%;
        height: 40px;
        border-bottom: 1px solid black;
    }
    .login-form input[type=password] {
        margin-top: 15px;
        border: none;
        background: none;
        outline: none;
        width: 100%;
        height: 40px;
        border-bottom: 1px solid black;
    }
    .login-form button {
        margin-top: 30px;
        margin-bottom: 100px;
        border: none;
        background-image: linear-gradient(120deg, #3498db, #8e448e);
        outline: none;
        cursor: pointer;
        transition: 5s;
        text-align: center;
        color: #fff;
        width: 100%;
        height: 40px;
    }

</style>