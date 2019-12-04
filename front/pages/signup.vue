<template>
    <div>
        <form ref="form" @submit.prevent="onSubmitForm" class="signup-form">
            <h1>Sign Up</h1>
            <label for="email">Email</label>
            <input v-model="email" type="email" required placeholder="email">
            <label for="password">Password</label>
            <input v-model="password" type="password" required placeholder="password">
            <label for="passwordCheck">Password</label>
            <input v-model="passwordCheck" type="password" required placeholder="password">
            <label for="nickname">Nickname</label>
            <input v-model="nickname" type="text" required placeholder="Nickname">
            <button type="submit">Sign Up</button>
        </form>
    </div>
</template>

<script>
export default {
    layout: 'default',
    data() {
        return {
        }

    },
    methods: {
        onSubmitForm() {
            this.$store.dispatch('users/signUp', {
                nickname: this.nickname,
                email: this.email,
                password: this.password,
            })
            .then(() => {
                this.$router.push({
                    path: '/',
                });
            }).catch((error) => {
                console.error(error);
                alert('Sign up fail!!!')
            });
        }
    },
    head() {
        return {
            title: 'Sign Up',
        };
    }
}
</script>

<style scoped>
    .signup {

    }
    .signup-form {
        font-family: "Times New Roman";
        margin-top: 15px;
        margin-bottom: 50px;
        width: 400px;
        background: #f1f1f1;
        font-size: 20px;
        height: 560px;
        padding: 40px 20px;
        position: absolute;
        border-radius: 15px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .signup-form h1 {
        text-align: center;
    }
    .signup-form label {
        text-align: left;
        margin-top: 30px;
    }
    .signup-form input[type=email] {
        margin-top: 15px;
        margin-bottom: 20px;
        border: none;
        background: none;
        outline: none;
        width: 100%;
        height: 40px;
        border-bottom: 1px solid black;
    }
    .signup-form input[type=password] {
        margin-top: 15px;
        margin-bottom: 20px;
        border: none;
        background: none;
        outline: none;
        width: 100%;
        height: 40px;
        border-bottom: 1px solid black;
    }
    .signup-form input[type=text] {
        margin-top: 15px;
        margin-bottom: 20px;
        border: none;
        background: none;
        outline: none;
        width: 100%;
        height: 40px;
        border-bottom: 1px solid black;
    }
    .signup-form button {
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