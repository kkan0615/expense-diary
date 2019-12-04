<!--
Author: Youngjin Kwak
File name : detail.vue
url router: /calender/:year/:month/detail
Purpose : Specific year and month of detail
startedAt: 10/23/2019
Last update: 11/23/2019
-->

<template>
    <div>
    <div class="detail">
        <h3>Sum of this month</h3>
        <p>{{ monthOfSum }}</p>
        <h3>Average of this month</h3>
        <p>{{ monthOfAvg }}</p>
        <h3>이번달 합</h3>
        <p>{{ yearOfSum }}</p>
        <h3>이번달 합</h3>
        <p>{{ monthOfSum }}</p>
        <h3>이번달 합</h3>
        <p>{{ yearOfAvg }}</p>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            year: 2019, /* this year */
            month: 12, /* this month */
            monthOfSum: 0, /* sum of this month */
            monthOfAvg: 0, /* average of this month */
            yearOfSum: 0, /* sum of this year */
            yearOfAvg: 0, /* average of this year */
            monthByMonthAvg: 0, /* Total month avg */
            biggerThanSum: false, /* Is it bigger than sum? */
            biggerThanAvg: false, /* Is it bigger than avg? */
        }
    },
    mounted() {

            return this.$axios.post('http://127.0.0.1:8001/calendar/detail', {
                year: this.year,
                month: this.month,
                order: this.order,
            }, {
                withCredentials: true,
            })
            .then((res) => {
                console.error(res.data);
                this.year = null; /* this year */
                this.month = null; /* this month */
                this.monthOfSum = res.data.monthOfSum; /* sum of this month */
                this.monthOfAvg = res.data.monthOfAvg; /* average of this month */
                this.yearOfSum = res.data.yearOfSum /* sum of this year */
                this.yearOfAvg = res.data.yearOfAvg /* average of this year */
                this.monthByMonthAvg = res.data.yearOfAvg; /* Total month avg */
                if(monthOfSum > yearOfSum)
                    this.biggerThanSum = true; /* Is it bigger than sum? */
                if(monthOfAvg > yearOfAvg)
                this. biggerThanAvg = true; /* Is it bigger than avg? */
            })
            .catch((error) => {
                console.error(error);
            });
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