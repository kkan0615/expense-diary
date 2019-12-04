<template>
    <div>
        <h1 v-if="me">{{ me.user.nickname }} 로그인완료</h1>
        <h1 v-else>No</h1>
    </div>
</template>

<script>
export default {
    layout: 'default',
    data() {
        return {
        };
    },
    computed: {
        me() {
            return this.$store.state.users.me;
        }
    },
    head() {
        return {
            title: 'Expense-dairy',
        };
    },
}
</script>

<style>

</style>