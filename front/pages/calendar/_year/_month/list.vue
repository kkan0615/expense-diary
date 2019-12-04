<!--
Author: Youngjin Kwak
File name : list.vue
url router: /calender/:year/:month/list
Purpose : Specific year and month of list
startedAt: 10/23/2019
Last update: 11/23/2019
-->

<template>
    <div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            year: null, /* this year */
            month: null, /* this month */
            expenses: [], /* Array of expenses */
        }
    },
    head() {
        return {
            title: 'calendar',
        };
    },
    middleware: 'isLoggedIn',
}
</script>

<style lang="scss" scoped>
</style>