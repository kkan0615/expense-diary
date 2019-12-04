<template>
    <div>
        <div class="top-nav">
            <nuxt-link to="/">home</nuxt-link>
            <div v-if="me">
                <nuxt-link to="/calendar">calendar</nuxt-link>
                <button @click="onLogOut" v-if="me" >로그아웃</button>
            </div>
            <div v-else>
                <nuxt-link to="/calendar">calendar</nuxt-link>
                <nuxt-link to="/login">login</nuxt-link>
                <nuxt-link to="/signup">singup</nuxt-link>
            </div>
        </div>

        <div class="content">
            <nuxt />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    computed: {
        me() {
            return this.$store.state.users.me;
        }
    },
    methods: {
        onLogOut() {
            this.$store.dispatch('users/logOut')
            .then((res) => {

                this.$router.push('/')
            }).catch((err) => {
                console.error(err);
                alert(err);
            });;
        },
    },
    head: {
        script: [
            { src: 'https://kit.fontawesome.com/cdc70df69c.js' }
        ],
    }
}
</script>
<style scoped>
    .top-nav {
        width: 100%;
        position: fixed;
        background-image: linear-gradient(120deg, #3498db, #8e448e);
        top: 0;
        left: 0;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .top-nav a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
        float: left;
    }

    .content {
        margin-top: 80px;
    }
</style>